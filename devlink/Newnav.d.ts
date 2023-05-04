import * as React from "react";
import * as Types from "./types";

declare function Newnav(props: {
  as?: React.ElementType;
  brandLink?: Types.Basic.Link;
  homeText?: React.ReactNode;
  homeLink?: Types.Basic.Link;
  aboutText?: React.ReactNode;
  aboutLink?: Types.Basic.Link;
  jobsText?: React.ReactNode;
  jobsLink?: Types.Basic.Link;
  postText?: React.ReactNode;
  postLink?: Types.Basic.Link;
}): React.JSX.Element;
