import * as React from "react";
export function Heading({ tag = "h1", ...props }) {
  return React.createElement(tag, props);
}
export function Paragraph(props) {
  return React.createElement("p", props);
}
export function Emphasized(props) {
  return <em {...props} />;
}
export function Strong(props) {
  return React.createElement("strong", props);
}
export function Figure({ className = "", figure, ...props }) {
  const { type, align } = figure;
  if (align) {
    className += `w-richtext-align-${align} `;
  }
  if (type) {
    className += `w-richtext-align-${type} `;
  }
  return <figure className={className} {...props} />;
}
export function Figcaption(props) {
  return <figcaption {...props} />;
}
export function Subscript(props) {
  return <sub {...props} />;
}
export function Superscript(props) {
  return <sup {...props} />;
}
export function RichText({ tag = "div", className = "", ...props }) {
  return React.createElement(tag, {
    className: className + " w-richtext",
    ...props,
  });
}
