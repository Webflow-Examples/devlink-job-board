import * as React from "react";
import { CSSModules } from "./types";
declare type IXData = any;
declare type IXEngine = {
  init: (data: IXData) => void;
};
declare type InteractionProviderProps = {
  children: React.ReactNode;
  createEngine: () => IXEngine;
};
export declare const InteractionsProvider: React.FC<InteractionProviderProps>;
export declare const useInteractions: (
  data: IXData,
  styles: CSSModules,
  ...nodes: string[]
) => void;
export declare function triggerIXEvent(
  element: HTMLElement | null | undefined,
  active: boolean
): void;
export declare function useIXEvent(
  element: HTMLElement | null | undefined,
  active: boolean
): void;
export {};
