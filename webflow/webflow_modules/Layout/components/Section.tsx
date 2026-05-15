"use client";
import * as React from "react";
import { Props } from "../../types";

const Section = React.forwardRef<
  HTMLElement,
  Props<"section", { tag?: React.ElementType; grid?: unknown }>
>(function Section({ tag = "section", grid: _grid, ...props }, ref) {
  return React.createElement(tag, {
    ...props,
    ref,
  });
});

export default Section;
