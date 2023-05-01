import * as React from "react";
import * as Types from "./types";

declare function Details(props: {
  as?: React.ElementType;
  company?: React.ReactNode;
  location?: React.ReactNode;
  category?: React.ReactNode;
  description?: React.ReactNode;
  benefits?: React.ReactNode;
  applyText?: React.ReactNode;
  applyLink?: Types.Basic.Link;
}): React.JSX.Element;
