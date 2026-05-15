"use client";
import * as React from "react";
import { cj } from "../../utils";
import Link, { LinkProps } from "../../Basic/components/Link";
import { NavbarContext } from "../helpers/navbarContext";

type NavbarLinkProps = LinkProps;

export type { NavbarLinkProps };

const NavbarLink = React.forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  function NavbarLink({ className = "", ...props }, ref) {
    const { isOpen } = React.useContext(NavbarContext);

    return (
      <Link
        {...props}
        className={cj(className, "w-nav-link", isOpen && "w--nav-link-open")}
        ref={ref}
      />
    );
  }
);

export default NavbarLink;
