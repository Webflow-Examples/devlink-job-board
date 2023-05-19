import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Pricing.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","config":{"actionListId":"slideInBottom","autoStopEventId":"e-2"},"instant":false},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"3fb202a6-7504-b84c-fbff-e674556ba402"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":35,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1684527451652}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Pricing({
  as: _Component = _Builtin.Section,
  employerPrice = "$99",
  pricingBottom,
  applicantPricing = "$9",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section", "pricing")}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "radial-gradient")}
        tag="div"
      />
      <_Builtin.Container
        className={_utils.cx(_styles, "container", "rel")}
        tag="div"
      >
        <_Builtin.Heading tag="h2">
          {"Find the right price for you"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "mw-70ch")}>
          {
            "Explore our flexible pricing options designed to meet the diverse needs of both job seekers and employers. Unlock the full potential of the Visual Developers Job Board and invest in your future success with our affordable and value-driven plans."
          }
        </_Builtin.Paragraph>
      </_Builtin.Container>
      <_Builtin.Container
        className={_utils.cx(_styles, "container", "rel")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "two-columns", "narrow")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "pricing-card-large")}
            id={_utils.cx(
              _styles,
              "w-node-_3fb202a6-7504-b84c-fbff-e674556ba3c8-556ba3bf"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "pricing-tag")}
              tag="div"
            >
              {"Employers"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "price-text-wrapper")}
              tag="div"
            >
              <_Builtin.Block className={_utils.cx(_styles, "price")} tag="div">
                {employerPrice}
              </_Builtin.Block>
              <_Builtin.Block tag="div">{"/month"}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Paragraph className={_utils.cx(_styles, "p-small")}>
              {
                "Our Employers Plan is tailored to provide maximum visibility and engagement for your job listings, ensuring you reach the most talented and qualified candidates in the development community."
              }
            </_Builtin.Paragraph>
            <_Builtin.List
              className={_utils.cx(_styles, "pricing-list")}
              tag="ul"
              unstyled={false}
            >
              <_Builtin.ListItem>
                {
                  "Priority placement of your job listings, resulting in increased visibility"
                }
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                {"Customizable job posts with your company logo and branding"}
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                {
                  "Access to our curated pool of highly skilled Webflow, no-code, and traditional developers"
                }
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                {
                  "Analytics dashboard to track the performance of your job listings"
                }
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                {
                  "Dedicated account manager for personalized support and guidance"
                }
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                {
                  "Social media promotion of your job posts to extend your reach"
                }
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                {"Unlimited job edits and updates during the listing period"}
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                {"Discounted bulk pricing for multiple job listings"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.Link
              className={_utils.cx(_styles, "button", "sign-up")}
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Sign up"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "pricing-card-large")}
            id={_utils.cx(
              _styles,
              "w-node-_3fb202a6-7504-b84c-fbff-e674556ba3e5-556ba3bf"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "pricing-tag")}
              tag="div"
            >
              {"Applicants"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "price-text-wrapper")}
              tag="div"
            >
              <_Builtin.Block className={_utils.cx(_styles, "price")} tag="div">
                {applicantPricing}
              </_Builtin.Block>
              <_Builtin.Block tag="div">{"/month"}</_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Paragraph className={_utils.cx(_styles, "p-small")}>
              {
                "Our Applicants Plan is designed to give you a competitive edge in your job search, connecting you with exclusive opportunities and resources to accelerate your career in development."
              }
            </_Builtin.Paragraph>
            <_Builtin.List
              className={_utils.cx(_styles, "pricing-list")}
              tag="ul"
              unstyled={false}
            >
              <_Builtin.ListItem>
                {
                  "Early access to the latest job listings before they're publicly available"
                }
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                {
                  "Personalized job recommendations based on your skills and preferences"
                }
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                {
                  "Access to a library of resources, including tutorials, articles, and webinars to enhance your skills"
                }
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                {
                  "Profile optimization tips to help you stand out from the crowd"
                }
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                {
                  "Customizable job alerts to ensure you never miss a relevant opportunity"
                }
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                {
                  "Networking opportunities with fellow developers and industry professionals"
                }
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                {
                  "Priority support from our dedicated team to assist with your job search"
                }
              </_Builtin.ListItem>
              <_Builtin.ListItem>
                {
                  "Exclusive discounts on relevant tools, courses, and events to support your professional growth"
                }
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.Link
              className={_utils.cx(_styles, "button", "sign-up")}
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Sign up"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "pricing-bottom")}
          data-w-id="3fb202a6-7504-b84c-fbff-e674556ba402"
          tag="div"
        >
          {pricingBottom}
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
