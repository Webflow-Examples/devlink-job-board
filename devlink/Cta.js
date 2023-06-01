import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Cta.module.css";

export function Cta({
  as: _Component = _Builtin.Section,
  headingText = "Find your next job, today",
  button = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "section")} tag="section">
      <_Builtin.Container
        className={_utils.cx(_styles, "container", "center")}
        tag="div"
      >
        <_Builtin.Heading className={_utils.cx(_styles, "mb2")} tag="h2">
          {headingText}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "mw-70ch", "mb2")}>
          {
            "Welcome to the Visual Developers Job Board - your one-stop destination for discovering the most exciting opportunities in Webflow, no-code, and traditional development. Empower your career by connecting with innovative companies that value creativity and technical expertise in equal measure."
          }
        </_Builtin.Paragraph>
        <_Builtin.Link
          className={_utils.cx(_styles, "button")}
          button={true}
          options={{
            href: "#",
          }}
          {...button}
        >
          {"Get started"}
        </_Builtin.Link>
      </_Builtin.Container>
    </_Component>
  );
}
