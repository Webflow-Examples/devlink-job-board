"use client";
import * as React from "react";
import { Props } from "../../types";

type ListProps = Props<
  "ul",
  {
    tag?: React.ElementType;
    unstyled?: boolean;
  }
>;

const List = React.forwardRef<HTMLElement, ListProps>(function List(
  { tag = "ul", unstyled = true, className = "", ...props },
  ref
) {
  return React.createElement(tag, {
    role: "list",
    className: className + (unstyled ? " w-list-unstyled" : ""),
    ...props,
    ref,
  });
});

export default List;
