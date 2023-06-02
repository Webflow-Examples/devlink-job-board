import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Stats.module.css";

export function Stats({ as: _Component = _Builtin.Section, chart }) {
  return (
    <_Component className={_utils.cx(_styles, "section")} tag="section">
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Heading className={_utils.cx(_styles, "tl-heading")} tag="h2">
          {"Average time to fill an open role"}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "timeline-grid")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "tl-card")}
            id={_utils.cx(
              _styles,
              "w-node-_13e882f5-b194-bda1-60df-b8cbb049f2ee-b049f2e9"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "tl-line-wrapper")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"•"}</_Builtin.Block>
              <_Builtin.Block tag="div">{"Day 1"}</_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "tl-line")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "tl-title")}
                tag="div"
              >
                {"Post your open role"}
              </_Builtin.Block>
              <_Builtin.Paragraph className={_utils.cx(_styles, "tl-summary")}>
                {
                  "Streamline your hiring process by quickly posting your open roles on our platform, reaching a vast network of highly skilled Webflow, no-code, and traditional developers."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tl-card")}
            id={_utils.cx(
              _styles,
              "w-node-_13e882f5-b194-bda1-60df-b8cbb049f2fa-b049f2e9"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "tl-line-wrapper")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"•"}</_Builtin.Block>
              <_Builtin.Block tag="div">{"Days 2 - 4"}</_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "tl-line")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "tl-title")}
                tag="div"
              >
                {"Review incoming applicants"}
              </_Builtin.Block>
              <_Builtin.Paragraph className={_utils.cx(_styles, "tl-summary")}>
                {
                  "Save time and effort by conveniently reviewing all incoming applications in one place, facilitated by our intuitive interface and applicant sorting features."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tl-card")}
            id={_utils.cx(
              _styles,
              "w-node-_13e882f5-b194-bda1-60df-b8cbb049f306-b049f2e9"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "tl-line-wrapper")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"•"}</_Builtin.Block>
              <_Builtin.Block tag="div">{"Day 5"}</_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "tl-line")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "tl-title")}
                tag="div"
              >
                {"Set up interview times"}
              </_Builtin.Block>
              <_Builtin.Paragraph className={_utils.cx(_styles, "tl-summary")}>
                {
                  "Take advantage of our integrated scheduling tool to effortlessly set up interviews, ensuring a smooth and efficient selection process that respects everyone's time."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "tl-card")}
            id={_utils.cx(
              _styles,
              "w-node-_13e882f5-b194-bda1-60df-b8cbb049f312-b049f2e9"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "tl-line-wrapper")}
              tag="div"
            >
              <_Builtin.Block tag="div">{"•"}</_Builtin.Block>
              <_Builtin.Block tag="div">{"Day 7"}</_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "tl-line")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "tl-title")}
                tag="div"
              >
                {"Send out an offer"}
              </_Builtin.Block>
              <_Builtin.Paragraph className={_utils.cx(_styles, "tl-summary")}>
                {
                  "Once you've found your ideal candidate, our platform makes it easy to send out an offer, accelerating the hiring timeline and helping you build your dream team faster."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Heading className={_utils.cx(_styles, "tl-heading")} tag="h2">
          {"Average time to hire visual"}
        </_Builtin.Heading>
        <_Builtin.Block tag="div">{chart}</_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
