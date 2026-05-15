"use client";
import * as React from "react";
import { EASING_FUNCTIONS } from "../../utils";

const BREAKPOINTS = {
  medium: 991,
  small: 767,
  tiny: 479,
};

export { BREAKPOINTS };

export type NavbarConfig = {
  animation: string;
  collapse: keyof typeof BREAKPOINTS;
  docHeight: boolean;
  duration: number;
  easing: keyof typeof EASING_FUNCTIONS;
  easing2: keyof typeof EASING_FUNCTIONS;
  noScroll: boolean;
};

export const NavbarContext = React.createContext<
  NavbarConfig & {
    animDirect: -1 | 1;
    animOver: boolean;
    getBodyHeight: () => number | void;
    getOverlayHeight: () => number | undefined;
    isOpen: boolean;
    menu: React.MutableRefObject<HTMLElement | null>;
    root: React.MutableRefObject<HTMLElement | null>;
    toggleOpen: () => void;
    navbarMounted: boolean;
    setFocusedLink: React.Dispatch<React.SetStateAction<number>>;
  }
>({
  animDirect: 1,
  animOver: false,
  animation: "animation",
  collapse: "medium",
  docHeight: false,
  duration: 400,
  easing2: "ease",
  easing: "ease",
  getBodyHeight: () => undefined,
  getOverlayHeight: () => {
    return undefined;
  },
  isOpen: false,
  noScroll: false,
  toggleOpen: () => undefined,
  navbarMounted: false,
  menu: { current: null } as React.MutableRefObject<HTMLElement | null>,
  root: { current: null } as React.MutableRefObject<HTMLElement | null>,
  setFocusedLink: () => undefined,
});
