import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IX3Data = { interactions: any[]; timelines: any[] };

type IX3Engine = {
  register: (
    interactions: IX3Data["interactions"],
    timelines: IX3Data["timelines"]
  ) => void;
  destroy: () => void;
};

type IX3ContextValue = {
  registerIX3: ((data: IX3Data) => void) | null;
};

export const IX3Context = React.createContext<IX3ContextValue>({
  registerIX3: null,
});

async function loadAndCreateIX3Engine(): Promise<IX3Engine> {
  // Load order matters: devlink-gsap registers GSAP globals on window
  // before devlink-ix3 calls IX3.init().
  //
  // Literal-string specifiers are required so bundlers (Webpack/Turbopack/
  // Vite/Rollup) can statically analyze the dynamic imports and emit
  // chunks. devlink-ix3 resolves to a lightweight .d.ts stub at
  // engine/src/webflow_modules/devlink-ix3.d.ts (the real source lives in
  // engine/sources/ so tsc never follows the heavy ix3/core Zod chain).
  //
  // devlink-gsap is a side-effect-only bundle (attaches gsap to window)
  // with no source or .d.ts in either the engine or consumer export, so
  // tsc cannot resolve the specifier. ts-ignore (not ts-expect-error)
  // suppresses the resulting "Cannot find module" — ts-expect-error would
  // fire TS2578 ("unused directive") in consumer projects with
  // `allowJs: true` (Next.js default) where tsc may resolve
  // devlink-gsap.js cleanly via allowJs and break the consumer build.
  //
  // Webpack ignores TS comments — the literal specifier strings are still
  // statically analyzable, so chunk emission is unaffected.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- intentional; see comment above
  // @ts-ignore -- devlink-gsap is a side-effect bundle without typings
  await import("./webflow_modules/devlink-gsap");
  const { createIX3Engine } = await import("./webflow_modules/devlink-ix3");
  return createIX3Engine();
}

export const IX3Provider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const engineRef = React.useRef<IX3Engine | null>(null);
  const queueRef = React.useRef<IX3Data[]>([]);
  const initStartedRef = React.useRef(false);
  const destroyedRef = React.useRef(false);

  // Lazy-init: only kick off `loadAndCreateIX3Engine` when a child actually
  // registers interactions. Eager init (before this commit) was safe because
  // <IX3Provider> was only rendered for IX3-using sites. With <IX3Provider>
  // now nested unconditionally inside <DevLinkProvider>, every DevLink
  // customer's tree mounts this provider. Eager init would attempt to
  // dynamically import `./webflow_modules/devlink-{ix3,gsap}` on every page
  // — bundlers statically analyze those specifiers at customer-build time
  // and would fail on non-IX3 sites (the bundles are stub files emitted by
  // `getDevlinkEngine` so the imports resolve, but with eager init we'd
  // still execute them at runtime for no purpose).
  //
  // Regression-tested by `__tests__/ix3-interactions.test.tsx` —
  // "does not load the engine until useIX3Interactions runs (lazy init)".
  // Reverting this regresses every non-IX3 DevLink customer.
  const ensureEngine = React.useCallback(() => {
    if (initStartedRef.current) return;
    initStartedRef.current = true;

    loadAndCreateIX3Engine().then((engine) => {
      if (destroyedRef.current) {
        engine.destroy();
        return;
      }

      engineRef.current = engine;

      for (const data of queueRef.current) {
        engine.register(data.interactions, data.timelines);
      }
      queueRef.current = [];
    });
  }, []);

  // Cleanup at unmount. Only destroys if the engine actually loaded —
  // non-IX3 sites never trigger `ensureEngine`, so there's nothing to destroy.
  //
  // The `destroyedRef.current = false` at the top of setup is load-bearing
  // for React 18 StrictMode (dev). StrictMode intentionally runs each
  // effect's cleanup → setup pair an extra time on mount to surface unsafe
  // side effects; refs persist across that cycle, so without resetting
  // here the second-mount's `destroyedRef.current` would remain `true`
  // from the first cleanup. Any later `ensureEngine` call would then
  // resolve into the "destroy and bail" branch and silently break IX3 in
  // dev for Next.js / Astro customers (both default StrictMode on in dev).
  React.useEffect(() => {
    destroyedRef.current = false;
    return () => {
      destroyedRef.current = true;
      engineRef.current?.destroy();
    };
  }, []);

  const registerIX3 = React.useCallback(
    (data: IX3Data) => {
      ensureEngine();
      if (engineRef.current) {
        engineRef.current.register(data.interactions, data.timelines);
      } else {
        queueRef.current.push(data);
      }
    },
    [ensureEngine]
  );

  return (
    <IX3Context.Provider value={{ registerIX3 }}>
      {children}
    </IX3Context.Provider>
  );
};

export const useIX3Interactions = (data: IX3Data) => {
  const { registerIX3 } = React.useContext(IX3Context);
  const registeredRef = React.useRef(false);

  React.useEffect(() => {
    if (registeredRef.current || !registerIX3) return;
    registeredRef.current = true;
    registerIX3(data);
  }, [registerIX3, data]);
};
