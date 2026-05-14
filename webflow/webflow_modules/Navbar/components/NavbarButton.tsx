"use client";
import * as React from "react";
import { cj, KEY_CODES } from "../../utils";
import { NavbarContext } from "../helpers/navbarContext";
import { Props } from "../../types";

type NavbarButtonProps = Props<
  "div",
  {
    tag?: React.ElementType;
  }
>;

export type { NavbarButtonProps };

const NavbarButton = React.forwardRef<HTMLElement, NavbarButtonProps>(
  function NavbarButton({ tag = "div", className = "", ...props }, ref) {
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
      onKeyDown: (e: React.KeyboardEvent<Element>) => {
        if (e.key === KEY_CODES.ENTER || e.key === KEY_CODES.SPACE) {
          e.preventDefault();
          toggleOpen();
        }
      },
      ref,
    });
  }
);

export default NavbarButton;
