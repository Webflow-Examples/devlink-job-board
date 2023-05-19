import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Hero.module.css";

export function Hero({
  as: _Component = _Builtin.Section,
  buttonText = "View open roles",

  buttonLink = {
    href: "#",
  },
}) {
  return (
    <_Component className={_utils.cx(_styles, "section", "hero")} tag="section">
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "two-columns")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "hero-content-wrapper")}
            id={_utils.cx(
              _styles,
              "w-node-eec4ca81-6ae6-a937-d67c-2a2debaf4e5f-ebaf4e5c"
            )}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "hero-heading")}
              tag="h1"
            >
              {"Visual"}
              <br />
              {"Development"}
              <br />
              {"Job Board"}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "hero-paragraph")}
            >
              {
                "Welcome to the Visual Developers Job Board - your one-stop destination for discovering the most exciting opportunities in Webflow, no-code, and traditional development. Empower your career by connecting with innovative companies that value creativity and technical expertise in equal measure."
              }
            </_Builtin.Paragraph>
            <_Builtin.Link
              className={_utils.cx(_styles, "button", "secondary")}
              button={true}
              options={buttonLink}
            >
              {buttonText}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "hero-image-wrapper")}
            id={_utils.cx(
              _styles,
              "w-node-eec4ca81-6ae6-a937-d67c-2a2debaf4e6a-ebaf4e5c"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "hero-image")}
              loading="eager"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/644d71f7a83e2ea6946fafd7/644ea54b57472ff521fca399_main-object.png"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
