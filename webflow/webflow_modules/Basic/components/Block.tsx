"use client";
import * as React from "react";
import { Props } from "../../types";

type BlockProps = Props<"div", { tag?: React.ElementType }>;

const Block = React.forwardRef<HTMLElement, BlockProps>(function Block(
  { tag = "div", ...props },
  ref
) {
  return React.createElement(tag, {
    ...props,
    ref,
  });
});

export default Block;
