"use client";
import * as React from "react";
import { cj } from "../../utils";
import Link, { LinkProps } from "../../Basic/components/Link";

type NavbarBrandProps = LinkProps;

export type { NavbarBrandProps };

const NavbarBrand = React.forwardRef<HTMLAnchorElement, NavbarBrandProps>(
  function NavbarBrand({ className = "", ...props }, ref) {
    return (
      <Link {...props} className={cj(className, "w-nav-brand")} ref={ref} />
    );
  }
);

export default NavbarBrand;
