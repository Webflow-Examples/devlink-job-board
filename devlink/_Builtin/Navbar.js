import * as React from "react";
import { EASING_FUNCTIONS, cj, debounce, isServer, useLayoutEffect, useResizeObserver, } from "../utils";
import { Link, Container } from "./Basic";
export const NavbarContext = React.createContext({
    animDirect: 1,
    animOver: false,
    animation: "animation",
    collapse: "medium",
    docHeight: false,
    duration: 400,
    easing2: "ease",
    easing: "ease",
    getBodyHeight: () => 0,
    getOverlayHeight: () => 0,
    isOpen: false,
    noScroll: false,
    toggleOpen: () => { },
    navbarMounted: false,
});
function getAnimationKeyframes({ axis = "Y", start, end, }) {
    const t = `translate${axis}`;
    return [{ transform: `${t}(${start}px)` }, { transform: `${t}(${end}px)` }];
}
export function NavbarWrapper(props) {
    const { animation, docHeight, easing, easing2, duration, noScroll } = props.config;
    const root = React.useRef(null);
    const menu = React.useRef(null);
    const animOver = /^over/.test(animation);
    const animDirect = /left$/.test(animation) ? -1 : 1;
    const getBodyHeight = React.useCallback(() => {
        if (isServer)
            return 0;
        return docHeight
            ? document.documentElement.scrollHeight
            : document.body.scrollHeight;
    }, [docHeight]);
    const getOverlayHeight = React.useCallback(() => {
        if (isServer || !root.current)
            return 0;
        let h = getBodyHeight();
        const style = getComputedStyle(root.current);
        if (!animOver && style.position !== "fixed") {
            h -= root.current.offsetHeight;
        }
        return h;
    }, [animOver, getBodyHeight]);
    const getOffsetHeight = React.useCallback(() => {
        if (!root.current || !menu.current)
            return 0;
        return root.current.offsetHeight + menu.current.offsetHeight;
    }, []);
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleOpen = debounce(() => {
        if (!menu.current)
            return;
        // menu is open and should be closed
        if (isOpen) {
            const keyframes = animOver
                ? getAnimationKeyframes({
                    axis: "X",
                    start: 0,
                    end: animDirect * menu.current.offsetWidth,
                })
                : getAnimationKeyframes({ start: 0, end: -getOffsetHeight() });
            const anim = menu.current.animate(keyframes, {
                easing: EASING_FUNCTIONS[easing2] ?? "ease",
                duration,
                fill: "forwards",
            });
            anim.onfinish = () => {
                setIsOpen(!isOpen);
            };
            return;
        }
        setIsOpen(!isOpen);
    });
    useLayoutEffect(() => {
        if (!menu.current)
            return;
        // menu is closed and will open, but the animation only runs when isOpen is true
        if (isOpen) {
            const keyframes = animOver
                ? getAnimationKeyframes({
                    axis: "X",
                    start: animDirect * menu.current.offsetWidth,
                    end: 0,
                })
                : getAnimationKeyframes({ start: -getOffsetHeight(), end: 0 });
            menu.current.animate(keyframes, {
                easing: EASING_FUNCTIONS[easing] ?? "ease",
                duration,
                fill: "forwards",
            });
        }
    }, [
        animDirect,
        animOver,
        duration,
        easing,
        getBodyHeight,
        getOffsetHeight,
        isOpen,
    ]);
    // if the menu is opened and noScroll === false prevent scrolling
    useLayoutEffect(() => {
        if (isOpen && noScroll) {
            document.body.style.overflowY = "hidden";
        }
        else {
            document.body.style.overflowY = "";
        }
        return () => {
            document.body.style.overflowY = "";
        };
    }, [isOpen, noScroll]);
    // Closes menu when the window is resized
    const closeOnResize = React.useCallback(() => setIsOpen(false), [setIsOpen]);
    useResizeObserver(root, closeOnResize);
    return (React.createElement(NavbarContext.Provider, { value: {
            ...props.config,
            root,
            menu,
            animOver,
            animDirect,
            getBodyHeight,
            getOverlayHeight,
            isOpen,
            toggleOpen,
            navbarMounted: true,
        } },
        React.createElement(Navbar, { ...props })));
}
/**
 * Navbar menu gets appended to the overlay when it's open.
 * This function extracts the child menu when that's the case.
 * */
const maybeExtractChildMenu = (children, isOpen) => {
    if (!isOpen)
        return { childMenu: null, rest: children };
    const childrenArray = React.Children.toArray(children);
    const { childMenu, rest } = childrenArray.reduce((acc, child) => {
        if (child.type === NavbarMenu) {
            acc.childMenu = child;
            return acc;
        }
        if (child.type === NavbarContainer) {
            const { children: containerChildren, ...containerProps } = child.props;
            const { childMenu, rest } = maybeExtractChildMenu(containerChildren, isOpen);
            acc.childMenu = childMenu;
            acc.rest.push(React.createElement(NavbarContainer, { ...containerProps }, rest));
            return acc;
        }
        acc.rest.push(child);
        return acc;
    }, { childMenu: null, rest: [] });
    return {
        childMenu,
        rest: React.createElement(React.Fragment, null, rest.map((e, i) => React.cloneElement(e, { key: i }))),
    };
};
function Navbar({ tag = "div", className = "", children, config, ...props }) {
    const { root, isOpen } = React.useContext(NavbarContext);
    const { childMenu, rest } = React.useMemo(() => maybeExtractChildMenu(children, isOpen), [children, isOpen]);
    return React.createElement(tag, {
        ...props,
        className: cj(className, "w-nav"),
        "data-collapse": config.collapse,
        "data-animation": config.animation,
        ref: root,
    }, React.createElement(React.Fragment, null,
        rest,
        React.createElement(NavbarOverlay, null, childMenu)));
}
function NavbarOverlay({ children }) {
    const { isOpen, getOverlayHeight, toggleOpen } = React.useContext(NavbarContext);
    const overlayToggleOpen = React.useCallback((e) => {
        // prevent link clicks to close the overlay
        if (e.target === e.currentTarget) {
            toggleOpen();
        }
    }, [toggleOpen]);
    return (React.createElement("div", { className: "w-nav-overlay", id: "w-nav-overlay", style: {
            display: isOpen ? "block" : "none",
            height: getOverlayHeight(),
            width: isOpen ? "100vw" : 0,
        }, onClick: overlayToggleOpen }, children));
}
export function NavbarContainer({ children, ...props }) {
    const ref = React.useRef(null);
    const { isOpen } = React.useContext(NavbarContext);
    const updateLinkStyles = React.useCallback((entry) => {
        const { maxWidth: containerMaxWidth } = getComputedStyle(entry.target);
        document
            .querySelectorAll(".w-nav-menu>.w-dropdown,.w-nav-menu>.w-nav-link")
            .forEach((node) => {
            if (!(node instanceof HTMLElement))
                return;
            if (!isOpen) {
                node.style.maxWidth = "";
                return;
            }
            const { maxWidth } = getComputedStyle(node);
            node.style.maxWidth =
                !maxWidth || maxWidth === "none" ? containerMaxWidth : "";
        });
    }, [isOpen]);
    useResizeObserver(ref, updateLinkStyles);
    return (React.createElement(Container, { ...props, ref: ref }, children));
}
export function NavbarBrand({ className = "", ...props }) {
    return React.createElement(Link, { ...props, className: cj(className, "w-nav-brand") });
}
export function NavbarMenu({ tag = "nav", className = "", ...props }) {
    const { getBodyHeight, animOver, isOpen, menu } = React.useContext(NavbarContext);
    return React.createElement(tag, {
        ...props,
        className: cj(className, "w-nav-menu"),
        ...(isOpen ? { "data-nav-menu-open": "" } : {}),
        style: animOver ? { height: getBodyHeight() } : {},
        ref: menu,
    });
}
export function NavbarLink({ className = "", ...props }) {
    const { isOpen } = React.useContext(NavbarContext);
    return (React.createElement(Link, { ...props, className: cj(className, "w-nav-link", isOpen && "w--nav-link-open") }));
}
export function NavbarButton({ tag = "div", className = "", ...props }) {
    const { isOpen, toggleOpen } = React.useContext(NavbarContext);
    return React.createElement(tag, {
        ...props,
        "aria-label": "menu",
        "aria-expanded": isOpen ? "true" : "false",
        "aria-haspopup": "menu",
        "aria-controls": "w-nav-overlay",
        role: "button",
        tabIndex: 0,
        className: cj(className, "w-nav-button", isOpen && "w--open"),
        onClick: toggleOpen,
    });
}
