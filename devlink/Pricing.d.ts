import * as React from "react";
import * as Types from "./types";

declare function Pricing(props: {
  as?: React.ElementType;
  employerPrice?: React.ReactNode;
  pricingBottom?: Types.Devlink.Slot;
  applicantPricing?: React.ReactNode;
}): React.JSX.Element;
