"use client";
import * as React from "react";
import { Props } from "../../types";

const Paragraph = React.forwardRef<HTMLParagraphElement, Props<"p">>(
  function Paragraph(props, ref) {
    return React.createElement("p", {
      ...props,
      ref,
    });
  }
);

export default Paragraph;
