"use client";
import * as React from "react";
import { Props } from "../../types";

type HeadingProps = Props<
  "h1",
  {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  }
>;

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading({ tag = "h1", ...props }, ref) {
    return React.createElement(tag, {
      ...props,
      ref,
    });
  }
);

export default Heading;
