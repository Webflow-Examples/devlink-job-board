import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Details.module.css";

export function Details({
  as: _Component = _Builtin.Section,
  company = "This is some text inside of a div block.",
  location = "This is some text inside of a div block.",
  category = "category",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  benefits = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  applyText = "Apply now",

  applyLink = {
    href: "#",
  },
}) {
  return (
    <_Component className={_utils.cx(_styles, "section")} tag="div">
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "jobs-page-grid")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "job-meta-wrapper")}
            id={_utils.cx(
              _styles,
              "w-node-b5a5ddfd-6cd1-01fb-2140-91ef72d47996-72d47991"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "job-meta-item")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "job-label")}
                tag="div"
              >
                {"Company"}
              </_Builtin.Block>
              <_Builtin.Block tag="div">{company}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "job-meta-item")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "job-label")}
                tag="div"
              >
                {"Location"}
              </_Builtin.Block>
              <_Builtin.Block tag="div">{location}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "job-meta-item")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "category-chip")}
                tag="div"
              >
                {category}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-b5a5ddfd-6cd1-01fb-2140-91ef72d479a4-72d47991"
            )}
            tag="div"
          >
            <_Builtin.Heading className={_utils.cx(_styles, "mt0")} tag="h3">
              {"About the role"}
            </_Builtin.Heading>
            <_Builtin.Paragraph>{description}</_Builtin.Paragraph>
            <_Builtin.Heading tag="h3">{"Benefits"}</_Builtin.Heading>
            <_Builtin.Paragraph className={_utils.cx(_styles, "mb2")}>
              {benefits}
            </_Builtin.Paragraph>
            <_Builtin.Link
              className={_utils.cx(_styles, "button")}
              button={true}
              options={applyLink}
            >
              {applyText}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
