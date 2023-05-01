import * as React from "react";
import * as Types from "./types";

declare function Navbar(props: {
  as?: React.ElementType;
  homeText?: React.ReactNode;
  homeLink?: Types.Basic.Link;
  aboutText?: React.ReactNode;
  aboutLink?: Types.Basic.Link;
  jobsText?: React.ReactNode;
  jobsLink?: Types.Basic.Link;
  brandLink?: Types.Basic.Link;
}): React.JSX.Element;
