"use client";
import * as React from "react";
import { cj } from "../../utils";
import { NavbarContext } from "../helpers/navbarContext";

type NavbarMenuProps = React.PropsWithChildren<
  React.HTMLAttributes<HTMLElement> & {
    tag?: React.ElementType;
    isOpen?: boolean;
  }
>;

export type { NavbarMenuProps };

const NavbarMenu = React.forwardRef<HTMLElement, NavbarMenuProps>(
  function NavbarMenu({ tag = "nav", className = "", ...props }, ref) {
    const { getBodyHeight, animOver, isOpen, menu } =
      React.useContext(NavbarContext);

    React.useImperativeHandle(ref, () => menu.current as HTMLElement);

    return React.createElement(tag, {
      ...props,
      className: cj(className, "w-nav-menu"),
      ...(isOpen ? { "data-nav-menu-open": "" } : {}),
      style: animOver ? { height: getBodyHeight() } : {},
      ref: menu,
    });
  }
);

export default NavbarMenu;
