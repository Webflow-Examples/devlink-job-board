import * as React from "react";
import * as Types from "./types";

declare function Newnav(props: {
  as?: React.ElementType;
  brandLink?: Types.Basic.Link;
  homeText?: React.ReactNode;
  homeLink?: Types.Basic.Link;
}): React.JSX.Element;
