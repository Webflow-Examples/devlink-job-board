import * as React from "react";
import {
  debounce,
  dispatchCustomEvent,
  replaceSelector,
  useLayoutEffect,
} from "./utils";
const enhanceIXData = (data, styles) => {
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
const IXContext = React.createContext(null);
export const InteractionsProvider = ({ children, createEngine }) => {
  const ixData = React.useRef({});
  const ixEngine = React.useRef();
  const debouncedInit = React.useRef(
    debounce((data) => {
      if (!ixEngine.current) ixEngine.current = createEngine();
      ixEngine.current.init(data);
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    })
  );
  const initEngine = React.useCallback((data, styles) => {
    const newIXData = enhanceIXData(data, styles);
    if (!newIXData) return;
    if (!ixData.current.site) {
      ixData.current.site = newIXData.site;
    }
    ixData.current.events = {
      ...ixData.current.events,
      ...newIXData.events,
    };
    ixData.current.actionLists = {
      ...ixData.current.actionLists,
      ...newIXData.actionLists,
    };
    debouncedInit.current(ixData.current);
  }, []);
  return React.createElement(
    IXContext.Provider,
    { value: initEngine },
    children
  );
};
export const useInteractions = (data, styles, ...nodes) => {
  const initEngine = React.useContext(IXContext);
  React.useEffect(() => {
    if (initEngine) initEngine(data, styles, ...nodes);
  }, [initEngine, data, nodes, styles]);
  React.useEffect(() => {
    if (document.querySelector("html")?.hasAttribute("data-wf-page")) return;
    const hasPageInteractions = Object.values(data.events).some(
      (event) => event.target.appliesTo === "PAGE"
    );
    if (hasPageInteractions) {
      document
        .querySelector("html")
        ?.setAttribute("data-wf-page", "wf-page-id");
      document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
  }, [data.events]);
};
export function triggerIXEvent(element, active) {
  if (!element) return;
  dispatchCustomEvent(
    element,
    active ? "COMPONENT_ACTIVE" : "COMPONENT_INACTIVE"
  );
}
export function useIXEvent(element, active) {
  useLayoutEffect(() => {
    triggerIXEvent(element, active);
  }, [element, active]);
}
