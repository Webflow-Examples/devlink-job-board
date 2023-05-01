import * as React from "react";
import * as Types from "./types";

declare function JobListing(props: {
  as?: React.ElementType;
  companyName?: React.ReactNode;
  listingName?: React.ReactNode;
  location?: React.ReactNode;
  applyText?: React.ReactNode;
  applyLink?: Types.Basic.Link;
  learnText?: React.ReactNode;
  learnLink?: Types.Basic.Link;
}): React.JSX.Element;
