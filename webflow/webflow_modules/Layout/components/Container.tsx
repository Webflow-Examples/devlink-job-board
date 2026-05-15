"use client";
import * as React from "react";
import { TagProps } from "../../types";

const Container = React.forwardRef<HTMLElement, TagProps>(function Container(
  { tag = "div", className = "", grid: _grid, ...props },
  ref
) {
  return React.createElement(tag, {
    className: className + " w-container",
    ref,
    ...props,
  });
});

export default Container;
