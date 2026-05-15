"use client";
import * as React from "react";
import { DevLinkContext } from "../../../DevLinkProvider";
import { LinkProps } from "../../types";

export type { LinkProps };

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    options = { href: "#" },
    className = "",
    button = false,
    children,
    block = "",
    ...props
  },
  ref
) {
  const { renderLink: UserLink } = React.useContext(DevLinkContext);

  if (button) className += " w-button";
  if (block === "inline") className += " w-inline-block";

  if (UserLink) {
    return (
      <UserLink className={className} {...options} {...props} ref={ref}>
        {children}
      </UserLink>
    );
  }

  const { href, target, preload = "none" } = options;

  const shouldRenderResource =
    preload !== "none" && typeof href === "string" && !href.startsWith("#");

  return (
    <>
      <a href={href} target={target} className={className} {...props} ref={ref}>
        {children}
      </a>
      {shouldRenderResource && <link rel={preload} href={href} />}
    </>
  );
});

export default Link;
