import * as React from "react";
import * as Types from "./types";

declare function Cta(props: {
  as?: React.ElementType;
  headingText?: React.ReactNode;
  button?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
