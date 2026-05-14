"use client";
import * as React from "react";
import { Props } from "../../types";

const ListItem = React.forwardRef<HTMLLIElement, Props<"li">>(function ListItem(
  props,
  ref
) {
  return React.createElement("li", {
    ...props,
    ref,
  });
});

export default ListItem;
