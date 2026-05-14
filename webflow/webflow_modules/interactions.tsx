import * as React from "react";

import { CSSModules } from "./types";
import {
  debounce,
  dispatchCustomEvent,
  replaceSelector,
  useLayoutEffect,
} from "./utils";

type IXData = any;

const enhanceIXData = (data: IXData, styles: CSSModules) => {
  const newIXData = structuredClone(data);

  for (const id in newIXData.events) {
    const { target, targets } = newIXData.events[id];

    for (const t of [target, ...targets]) {
      if (t.appliesTo !== "CLASS") continue;
      t.selector = replaceSelector(t.selector, styles);
    }
  }

  for (const id in newIXData.actionLists) {
    const { actionItemGroups, continuousParameterGroups } =
      newIXData.actionLists[id];

    if (actionItemGroups) {
      for (const { actionItems } of actionItemGroups) {
        for (const { config } of actionItems) {
          const { selector } = config.target;

          if (!selector) continue;

          config.target.selector = replaceSelector(selector, styles);
        }
      }
    }

    if (continuousParameterGroups) {
      for (const group of continuousParameterGroups) {
        for (const { actionItems } of group.continuousActionGroups) {
          for (const { config } of actionItems) {
            const { selector } = config.target;

            if (!selector) continue;

            config.target.selector = replaceSelector(selector, styles);
          }
        }
      }
    }
  }

  return newIXData;
};

export const IXContext = React.createContext<{
  initEngine: ((data: IXData, styles?: CSSModules) => void) | null;
  restartEngine: (() => void) | null;
}>({ initEngine: null, restartEngine: null });

type IXEngine = {
  init: (data: IXData) => void;
};

type InteractionProviderProps = {
  children: React.ReactNode;
  createEngine: () => IXEngine;
};

export const InteractionsProvider: React.FC<InteractionProviderProps> = ({
  children,
  createEngine,
}) => {
  const ixData = React.useRef<IXData>({});
  const ixStyles = React.useRef<CSSModules | undefined>(undefined);
  const ixEngine = React.useRef<IXEngine | undefined>(undefined);
  const debouncedInit = React.useRef(
    debounce((data: IXData, styles?: CSSModules) => {
      if (!ixEngine.current) ixEngine.current = createEngine();

      const newData = styles ? enhanceIXData(data, styles) : data;

      ixEngine.current.init(newData);

      dispatchCustomEvent(document, "IX2_PAGE_UPDATE");
    })
  );

  const initEngine = React.useCallback((data: IXData, styles?: CSSModules) => {
    if (!ixData.current.site) {
      ixData.current.site = data.site;
    }

    ixData.current.events = {
      ...ixData.current.events,
      ...data.events,
    };
    ixData.current.actionLists = {
      ...ixData.current.actionLists,
      ...data.actionLists,
    };

    if (styles) {
      // Check if styles exist. If ixStyles.current is falsy, set it to an empty object
      ixStyles.current = ixStyles.current ?? {};

      // Loop through each property in the styles object
      for (const s in styles) {
        const styleValue = styles[s];
        if (styleValue === undefined) continue;

        // Check if the current style is not already included in ixStyles.current
        if (!ixStyles.current[s]?.includes(styleValue)) {
          // Get the current style value from ixStyles.current
          const currentStyle = ixStyles.current[s];

          // Concatenate the new style with the current style (if it exists)
          ixStyles.current[s] =
            CSS.escape(styleValue) + (currentStyle ? ` ${currentStyle}` : "");
        }
      }
    }

    debouncedInit.current(ixData.current, ixStyles.current);
  }, []);

  return (
    <IXContext.Provider
      value={{
        initEngine,
        restartEngine: () =>
          debouncedInit.current &&
          debouncedInit.current(ixData.current, ixStyles.current),
      }}
    >
      {children}
    </IXContext.Provider>
  );
};

export const useInteractions = (data: IXData, styles?: CSSModules) => {
  const { initEngine } = React.useContext(IXContext);

  React.useEffect(() => {
    if (initEngine) initEngine(data, styles);
  }, [initEngine, data, styles]);

  React.useEffect(() => {
    if (document.querySelector("html")?.hasAttribute("data-wf-page")) return;

    const hasPageInteractions = Object.values(
      data.events as { target: { appliesTo: string } }[]
    ).some((event) => event.target.appliesTo === "PAGE");

    if (hasPageInteractions) {
      document.documentElement.setAttribute("data-wf-page", "wf-page-id");
      dispatchCustomEvent(document, "IX2_PAGE_UPDATE");
    }
  }, [data.events]);
};

export function triggerIXEvent(
  element: HTMLElement | null | undefined,
  active: boolean
) {
  if (!element) return;
  dispatchCustomEvent(
    element,
    active ? "COMPONENT_ACTIVE" : "COMPONENT_INACTIVE"
  );
}

export function useIXEvent(
  element: HTMLElement | null | undefined,
  active: boolean
) {
  useLayoutEffect(() => {
    triggerIXEvent(element, active);
  }, [element, active]);
}
