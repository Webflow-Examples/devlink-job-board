"use client";
import * as React from "react";
import { Props } from "../../types";

type IconProps = Props<"div", { widget: { icon: string; type?: string } }>;

const Icon = React.forwardRef<HTMLDivElement, IconProps>(function Icon(
  { widget, className = "", ...props },
  ref
) {
  return React.createElement("div", {
    className: className + ` w-icon-${widget.icon}`,
    ...props,
    ref,
  });
});

export default Icon;
