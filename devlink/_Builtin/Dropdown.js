import * as React from "react";
import { cj } from "../utils";
import { Link } from "./Basic";
import { NavbarContext } from "./Navbar";
const DropdownContext = React.createContext({
    isOpen: false,
    toggleOpen: () => { },
});
export function DropdownWrapper(props) {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleOpen = () => setIsOpen((isOpen) => !isOpen);
    return (React.createElement(DropdownContext.Provider, { value: { isOpen, toggleOpen } },
        React.createElement(Dropdown, { ...props })));
}
function Dropdown({ tag = "div", className = "", ...props }) {
    const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);
    return React.createElement(tag, {
        ...props,
        className: cj(className, "w-dropdown", isNavbarOpen && "w--nav-dropdown-open"),
    });
}
export function DropdownToggle({ tag = "div", className = "", ...props }) {
    const { isOpen, toggleOpen } = React.useContext(DropdownContext);
    const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);
    return React.createElement(tag, {
        ...props,
        "aria-haspopup": "menu",
        "aria-expanded": isOpen,
        className: cj(className, "w-dropdown-toggle", isNavbarOpen && "w--nav-dropdown-toggle-open"),
        onClick: toggleOpen,
    });
}
export function DropdownList({ tag = "nav", className = "", ...props }) {
    const { isOpen } = React.useContext(DropdownContext);
    const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);
    return React.createElement(tag, {
        ...props,
        className: cj(className, "w-dropdown-list", isOpen && "w--open", isNavbarOpen && "w--nav-dropdown-list-open"),
    });
}
export function DropdownLink({ className = "", ...props }) {
    const { isOpen: isNavbarOpen } = React.useContext(NavbarContext);
    return React.createElement(Link, {
        ...props,
        className: cj(className, "w-dropdown-link", isNavbarOpen && "w--nav-link-open"),
    });
}
