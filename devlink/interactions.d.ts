import * as React from "react";
import { CSSModules } from "./types";
type IXData = any;
type IXEngine = {
    init: (data: IXData) => void;
};
type InteractionProviderProps = {
    children: React.ReactNode;
    createEngine: () => IXEngine;
};
export declare const InteractionsProvider: React.FC<InteractionProviderProps>;
export declare const useInteractions: (data: IXData, styles: CSSModules, ...nodes: string[]) => void;
export {};
