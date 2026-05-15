"use client";
import * as React from "react";
import { Props } from "../../types";

const RichText = React.forwardRef<
  HTMLElement,
  Props<"div", { tag?: React.ElementType }>
>(function RichText({ tag = "div", className = "", ...props }, ref) {
  return React.createElement(tag, {
    className: className + " w-richtext",
    ...props,
    ref,
  });
});

export default RichText;
