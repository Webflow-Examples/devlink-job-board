import * as React from "react";
import { triggerIXEvent } from "../interactions";
import { cj, debounce, EASING_FUNCTIONS, useLayoutEffect } from "../utils";
const tabsContext = React.createContext({
  current: "",
  onTabClick: () => {},
  onLinkKeyDown: () => {},
});
export function TabsWrapper({
  className = "",
  fadeIn,
  fadeOut,
  easing,
  current: initialCurrent,
  ...props
}) {
  const [current, setCurrent] = React.useState("");
  const changeTab = React.useCallback(
    (next) => {
      const currentTab = document.querySelector(
        `.w-tab-pane[data-w-tab="${current}"]`
      );
      const nextTab = document.querySelector(
        `.w-tab-pane[data-w-tab="${next}"]`
      );
      const easingFn = EASING_FUNCTIONS[easing] ?? "ease";
      const animation = currentTab?.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: fadeOut,
        fill: "forwards",
        easing: easingFn,
      });
      if (animation) {
        animation.onfinish = () => {
          setCurrent(next);
          nextTab?.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: fadeIn,
            fill: "forwards",
            easing: easingFn,
          });
        };
      } else {
        setCurrent(next);
      }
    },
    [current, easing, fadeIn, fadeOut]
  );
  // Trigger first tab change manually
  const firstRender = React.useRef(true);
  useLayoutEffect(() => {
    if (!firstRender.current) return;
    firstRender.current = false;
    setTimeout(() => {
      changeTab(initialCurrent);
    }, 1);
  }, [changeTab, initialCurrent]);
  const onTabClick = debounce(changeTab);
  const onLinkKeyDown = debounce((event) => {
    event.preventDefault();
    const currentTab = document.querySelector(
      `.w-tab-pane[data-w-tab="${current}"]`
    );
    const allTabs = document.querySelectorAll(".w-tab-pane");
    const firstTab = allTabs[0];
    const lastTab = allTabs[allTabs.length - 1];
    const nextTab = (() => {
      switch (event.key) {
        case "ArrowUp":
        case "ArrowLeft":
          return currentTab.previousElementSibling ?? lastTab;
        case "ArrowDown":
        case "ArrowRight":
          return currentTab.nextElementSibling ?? firstTab;
        case "Home":
          return firstTab;
        case "End":
          return lastTab;
      }
    })();
    if (nextTab) changeTab(nextTab.getAttribute("data-w-tab"));
  });
  return (
    <tabsContext.Provider value={{ current, onTabClick, onLinkKeyDown }}>
      <div {...props} className={cj(className, "w-tabs")} />
    </tabsContext.Provider>
  );
}
export function TabsMenu({ tag = "div", className = "", ...props }) {
  return React.createElement(tag, {
    ...props,
    className: cj(className, "w-tab-menu"),
    role: "tablist",
  });
}
export function TabsLink({ className = "", ...props }) {
  const { current, onTabClick, onLinkKeyDown } = React.useContext(tabsContext);
  const isCurrent = current === props["data-w-tab"];
  const ref = React.useCallback(
    (node) => {
      if (!node) return;
      triggerIXEvent(node, isCurrent);
    },
    [isCurrent]
  );
  return (
    <a
      {...props}
      ref={ref}
      className={cj(
        className,
        "w-inline-block w-tab-link",
        isCurrent && "w--current"
      )}
      onClick={() => onTabClick(props["data-w-tab"])}
      onKeyDown={onLinkKeyDown}
      role="tab"
      tabIndex={isCurrent ? 0 : -1}
      aria-selected={isCurrent}
      aria-controls={props["data-w-tab"]}
    />
  );
}
export function TabsContent({ tag = "div", className = "", ...props }) {
  return React.createElement(tag, {
    ...props,
    className: cj(className, "w-tab-content"),
  });
}
export function TabsPane({ tag = "div", className = "", ...props }) {
  const { current } = React.useContext(tabsContext);
  const isCurrent = current === props["data-w-tab"];
  return React.createElement(tag, {
    ...props,
    className: cj(className, "w-tab-pane", isCurrent && "w--tab-active"),
    role: "tabpanel",
    "aria-labelledby": props["data-w-tab"],
  });
}
