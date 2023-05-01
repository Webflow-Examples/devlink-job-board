import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AboutInformation.module.css";

export function AboutInformation({ as: _Component = _Builtin.Section }) {
  return (
    <_Component className={_utils.cx(_styles, "section")} tag="div">
      <_Builtin.Container
        className={_utils.cx(_styles, "container", "narrow")}
        tag="div"
      >
        <_Builtin.RichText tag="div">
          <_Builtin.Paragraph>
            {
              "The Visual Developers Job Board was created with a simple mission: to bridge the gap between the most talented developers in the Webflow, no-code, and traditional development spaces and the forward-thinking companies that need their expertise. Our platform offers a curated selection of high-quality job listings from innovative organizations that understand the importance of blending creativity and technical acumen. We're more than just a job board - we're a community that fosters growth and collaboration, helping our users unlock their true potential and reshape the digital landscape. Join us today and be a part of the revolution in modern development."
            }
          </_Builtin.Paragraph>
          <_Builtin.Paragraph>
            {
              "In an ever-evolving technological landscape, the Visual Developers Job Board was born out of a passion for driving innovation and embracing the transformative potential of modern development techniques. We recognized the need for a dedicated platform that caters to Webflow, no-code, and traditional developers, as well as the companies that rely on their unique skillsets. Our commitment to fostering a vibrant community, centered around knowledge-sharing and collaboration, is what sets us apart. We exist to empower developers by providing them with the tools, resources, and opportunities needed to excel, while helping companies discover exceptional talent to bring their visionary projects to life. Together, we're building a more connected, creative, and technologically advanced future."
            }
          </_Builtin.Paragraph>
        </_Builtin.RichText>
      </_Builtin.Container>
    </_Component>
  );
}
