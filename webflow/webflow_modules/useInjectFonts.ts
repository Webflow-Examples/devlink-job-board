"use client";
import * as React from "react";
import type { FontsManifest } from "./types";

const GOOGLE_WEBFONT_URL =
  "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js";
const TYPEKIT_BASE = "https://use.typekit.net";
const FONT_ERROR_WARN_FLAG = "__devlinkFontsErrorWarned";

type WebFontGlobal = {
  load?: (config: { google?: { families: string[] } }) => void;
};

type TypekitGlobal = {
  load?: (opts?: { async?: boolean }) => void;
};

function ensureGlobalLoaded<G>({
  src,
  globalKey,
  apply,
  onError,
}: {
  src: string;
  globalKey: string;
  apply: (g: G) => void;
  onError?: () => void;
}) {
  const readGlobal = () =>
    (window as unknown as Record<string, G | undefined>)[globalKey];

  const tryApply = () => {
    try {
      const g = readGlobal();
      if (g) apply(g);
    } catch {
      // Vendor loaders occasionally throw in constrained environments; ignore.
    }
  };

  if (readGlobal()) {
    tryApply();
    return;
  }

  const existing = document.head.querySelector(
    `script[src="${src}"]`
  ) as HTMLScriptElement | null;

  if (existing) {
    existing.addEventListener("load", tryApply, { once: true });
    return;
  }

  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  script.crossOrigin = "anonymous";
  script.addEventListener("load", tryApply, { once: true });
  if (onError) {
    script.addEventListener("error", onError, { once: true });
  }
  document.head.appendChild(script);
}

function warnOnce(message: string) {
  const w = window as unknown as Record<string, boolean | undefined>;
  if (w[FONT_ERROR_WARN_FLAG]) return;
  w[FONT_ERROR_WARN_FLAG] = true;
  console.warn(message);
}

export function useInjectFonts(manifest: FontsManifest): void {
  React.useEffect(() => {
    if (typeof document === "undefined") return;

    if (manifest.google && manifest.google.length > 0) {
      const families = [...manifest.google];
      ensureGlobalLoaded<WebFontGlobal>({
        src: GOOGLE_WEBFONT_URL,
        globalKey: "WebFont",
        apply: (wf) => wf.load?.({ google: { families } }),
        onError: () =>
          warnOnce(
            "[DevLink] Google Fonts failed to load. If your app uses a Content Security Policy, " +
              "allow https://ajax.googleapis.com in script-src, https://fonts.googleapis.com in style-src, " +
              "and https://fonts.gstatic.com in font-src."
          ),
      });
    }

    if (manifest.typekit?.kitId) {
      const { kitId } = manifest.typekit;
      ensureGlobalLoaded<TypekitGlobal>({
        src: `${TYPEKIT_BASE}/${kitId}.js`,
        globalKey: "Typekit",
        apply: (tk) => tk.load?.({ async: true }),
        onError: () =>
          warnOnce(
            "[DevLink] Adobe Fonts failed to load on this domain. Add this domain to your " +
              "Adobe Fonts kit at https://fonts.adobe.com/my_fonts#web_projects-section, or allow " +
              "https://use.typekit.net in your Content Security Policy. " +
              "See https://developers.webflow.com/devlink/reference/adobe-fonts"
          ),
      });
    }
  }, [manifest]);
}
