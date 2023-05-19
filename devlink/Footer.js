import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

export function Footer({ as: _Component = _Builtin.Section, year = "XXXX" }) {
  return (
    <_Component className={_utils.cx(_styles, "footer")} tag="footer">
      <_Builtin.Container className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.List
          className={_utils.cx(_styles, "footer-list")}
          tag="ul"
          unstyled={false}
        >
          <_Builtin.ListItem className={_utils.cx(_styles, "navlist-item")}>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link")}
              button={false}
              options={{
                href: "/",
              }}
            >
              {"Home"}
            </_Builtin.Link>
          </_Builtin.ListItem>
          <_Builtin.ListItem className={_utils.cx(_styles, "navlist-item")}>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link")}
              button={false}
              options={{
                href: "/about",
              }}
            >
              {"About"}
            </_Builtin.Link>
          </_Builtin.ListItem>
          <_Builtin.ListItem className={_utils.cx(_styles, "navlist-item")}>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link")}
              button={false}
              options={{
                href: "/jobs",
              }}
            >
              {"Jobs"}
            </_Builtin.Link>
          </_Builtin.ListItem>
          <_Builtin.ListItem className={_utils.cx(_styles, "navlist-item")}>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link")}
              button={false}
              options={{
                href: "https://webflow.com",
                target: "_blank",
              }}
            >
              {"Webflow"}
            </_Builtin.Link>
          </_Builtin.ListItem>
          <_Builtin.ListItem className={_utils.cx(_styles, "navlist-item")}>
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link")}
              button={false}
              options={{
                href: "https://webflow.com/devlink",
                target: "_blank",
              }}
            >
              {"DevLink"}
            </_Builtin.Link>
          </_Builtin.ListItem>
        </_Builtin.List>
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-small")}
          tag="div"
        >
          <_Builtin.Block tag="div">{"©"}</_Builtin.Block>
          <_Builtin.Block tag="div">{year}</_Builtin.Block>
          <_Builtin.Block tag="div">
            {
              "Visual Development Job Board. This is all fake. Content by ChatGPT , built in Webflow using DevLink"
            }
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
