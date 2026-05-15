"use client";
import React from "react";
import { InteractionsProvider } from "./webflow_modules/interactions";
import { createIX2Engine } from "./webflow_modules/devlink";
import type { FontsManifest } from "./webflow_modules/types";
import { useInjectFonts } from "./webflow_modules/useInjectFonts";
import { IX3Provider } from "./ix3-interactions";
import fontsManifest from "./webflow_modules/fonts.manifest.json";

export type RenderLink = React.FC<{
  href: string;
  target?: "_self" | "_blank";
  preload?: "none" | "prefetch" | "prerender";
  className?: string;
  children?: React.ReactNode;
  ref?: React.Ref<HTMLAnchorElement>;
}>;

export type RenderImage = React.FC<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
>;

export const DevLinkContext = React.createContext<{
  renderLink?: RenderLink;
  renderImage?: RenderImage;
}>({});

type DevLinkProviderProps = {
  renderLink?: RenderLink;
  renderImage?: RenderImage;
  children: React.ReactNode;
};

export const DevLinkProvider: React.FC<DevLinkProviderProps> = ({
  children,
  ...context
}) => {
  useInjectFonts(fontsManifest as FontsManifest);
  // IX3Provider is nested unconditionally so DevLink customers don't have
  // to compose providers themselves when adding IX3 interactions. The IX3
  // engine + GSAP are only loaded lazily — see the `ensureEngine` guard
  // in ./ix3-interactions.tsx — so non-IX3 sites pay no runtime cost.
  return (
    <DevLinkContext.Provider value={context}>
      <IX3Provider>
        <InteractionsProvider createEngine={createIX2Engine}>
          {children}
        </InteractionsProvider>
      </IX3Provider>
    </DevLinkContext.Provider>
  );
};
