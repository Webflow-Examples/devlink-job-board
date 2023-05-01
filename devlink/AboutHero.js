import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AboutHero.module.css";

export function AboutHero({ as: _Component = _Builtin.Section }) {
  return (
    <_Component className={_utils.cx(_styles, "section", "hero")} tag="section">
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "two-columns")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "hero-content-wrapper")}
            id={_utils.cx(
              _styles,
              "w-node-e99518a0-9081-2bc9-a4b2-c23fb0c1b414-b0c1b411"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "hero-heading")}
              tag="h1"
            >
              {"About us"}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "hero-paragraph")}
            >
              {
                "Discover the Future of Development at the Visual Developers Job Board - Where Talent Meets Opportunity."
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-e99518a0-9081-2bc9-a4b2-c23fb0c1b419-b0c1b411"
            )}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/644d71f7a83e2ea6946fafd7/644ea5920aef435a232ffdfc_Other%2021.png"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
