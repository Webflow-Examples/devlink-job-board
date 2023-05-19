import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PricingGrid.module.css";

export function PricingGrid({
  as: _Component = _Builtin.Block,
  pricingHeading = "Student plans",
}) {
  return (
    <_Component className={_utils.cx(_styles, "pricing-bottom-grid")} tag="div">
      <_Builtin.Block
        id={_utils.cx(
          _styles,
          "w-node-_05a0cdfd-5b52-43c7-186d-fe226e527f86-6e527f85"
        )}
        tag="div"
      >
        <_Builtin.Heading tag="h3">{pricingHeading}</_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "p-small")}>
          {
            "Discover our Student Plan, specially designed to support the next generation of developers by providing exclusive resources, opportunities, and discounts tailored to your educational journey."
          }
        </_Builtin.Paragraph>
      </_Builtin.Block>
      <_Builtin.Block
        id={_utils.cx(
          _styles,
          "w-node-_05a0cdfd-5b52-43c7-186d-fe226e527f8b-6e527f85"
        )}
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "button", "tertiary")}
          button={true}
          options={{
            href: "#",
          }}
        >
          {"Get started"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
