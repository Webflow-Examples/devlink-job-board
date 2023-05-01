import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./PageHeading.module.css";

export function PageHeading({
  as: _Component = _Builtin.Section,
  headingText = "Heading",
}) {
  return (
    <_Component className={_utils.cx(_styles, "section", "title")} tag="div">
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "title-heading")}
          tag="h1"
        >
          {headingText}
        </_Builtin.Heading>
      </_Builtin.Container>
    </_Component>
  );
}
