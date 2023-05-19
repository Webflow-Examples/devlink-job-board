import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Newnav.module.css";

export function Newnav({
  as: _Component = _Builtin.NavbarWrapper,

  brandLink = {
    href: "#",
  },

  homeText = "Home",

  homeLink = {
    href: "#",
  },

  aboutText = "About",

  aboutLink = {
    href: "#",
  },

  jobsText = "Jobs",

  jobsLink = {
    href: "#",
  },

  postText = "Post a job",

  postLink = {
    href: "#",
  },

  postJob = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "navbar")}
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "nav")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "brand")}
          options={brandLink}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "brand-image")}
            loading="lazy"
            width="auto"
            height="auto"
            src="https://uploads-ssl.webflow.com/644d71f7a83e2ea6946fafd7/644ea5920aef435a232ffdfc_Other%2021.png"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "navmenu")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.List
            className={_utils.cx(_styles, "navlist")}
            tag="ul"
            unstyled={false}
          >
            <_Builtin.ListItem className={_utils.cx(_styles, "navlist-item")}>
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "navlink")}
                options={homeLink}
              >
                {homeText}
              </_Builtin.NavbarLink>
            </_Builtin.ListItem>
            <_Builtin.ListItem className={_utils.cx(_styles, "navlist-item")}>
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "navlink")}
                options={aboutLink}
              >
                {aboutText}
              </_Builtin.NavbarLink>
            </_Builtin.ListItem>
            <_Builtin.ListItem className={_utils.cx(_styles, "navlist-item")}>
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "navlink")}
                options={jobsLink}
              >
                {jobsText}
              </_Builtin.NavbarLink>
            </_Builtin.ListItem>
            <_Builtin.ListItem className={_utils.cx(_styles, "navlist-item")}>
              <_Builtin.NavbarLink
                className={_utils.cx(_styles, "navlink", "nav-button")}
                options={postLink}
                {...postJob}
              >
                {postText}
              </_Builtin.NavbarLink>
            </_Builtin.ListItem>
          </_Builtin.List>
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "hamburger")}
          tag="div"
        >
          <_Builtin.Icon
            widget={{
              type: "icon",
              icon: "nav-menu",
            }}
          />
        </_Builtin.NavbarButton>
      </_Builtin.Block>
    </_Component>
  );
}
