import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./JobListing.module.css";

export function JobListing({
  as: _Component = _Builtin.Block,
  companyName = "Company name",
  listingName = "This is some text inside of a div block.",
  location = "Location",
  applyText = "Apply now",

  applyLink = {
    href: "#",
  },

  learnText = "Learn more",

  learnLink = {
    href: "#",
  },
}) {
  return (
    <_Component className={_utils.cx(_styles, "job-listing")} tag="div">
      <_Builtin.Block tag="div">
        <_Builtin.Block tag="div">{companyName}</_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "listing-name")}
          tag="div"
        >
          {listingName}
        </_Builtin.Block>
        <_Builtin.Block tag="div">{location}</_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "buttons-wrapper")}
        id={_utils.cx(
          _styles,
          "w-node-_7f42fc01-bdea-9976-acc3-ac76a91ba330-a91ba328"
        )}
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "button", "small")}
          id={_utils.cx(
            _styles,
            "w-node-_7f42fc01-bdea-9976-acc3-ac76a91ba331-a91ba328"
          )}
          button={true}
          options={learnLink}
        >
          {learnText}
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "button", "small", "tertiary")}
          button={true}
          options={applyLink}
        >
          {applyText}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
