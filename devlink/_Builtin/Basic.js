import * as React from "react";
import * as utils from "../utils";
export function Block({ tag = "div", ...props }) {
  return React.createElement(tag, props);
}
export function Span(props) {
  return <span {...props} />;
}
export function Blockquote(props) {
  return <blockquote {...props} />;
}
export const Link = function Link({
  options = { href: "#" },
  className = "",
  button = false,
  ...props
}) {
  if (button) className += " w-button";
  const { href, target, preload = "none" } = options;
  const shouldRenderResource =
    preload !== "none" && typeof href === "string" && !href.startsWith("#");
  return (
    <>
      <a href={href} target={target} className={className} {...props} />
      {shouldRenderResource && <link rel={preload} href={href} />}
    </>
  );
};
export function List({
  tag = "ul",
  unstyled = true,
  className = "",
  ...props
}) {
  return React.createElement(tag, {
    role: "list",
    className: className + (unstyled ? " w-list-unstyled" : ""),
    ...props,
  });
}
export function ListItem(props) {
  return React.createElement("li", props);
}
export function Image(props) {
  return React.createElement("img", props);
}
export function Section({ tag = "section", ...props }) {
  return React.createElement(tag, props);
}
export const Container = React.forwardRef(function Container(
  { tag = "div", className = "", ...props },
  ref
) {
  return React.createElement(tag, {
    className: className + " w-container",
    ref,
    ...props,
  });
});
export function HtmlEmbed({
  tag = "div",
  className = "",
  value = "",
  ...props
}) {
  return React.createElement(tag, {
    className: className + " w-embed",
    dangerouslySetInnerHTML: { __html: utils.removeUnescaped(value) },
    ...props,
  });
}
export function Grid({ tag = "div", className = "", ...props }) {
  return React.createElement(tag, {
    className: className + " w-layout-grid",
    ...props,
  });
}
export function Icon({ widget, className = "", ...props }) {
  return React.createElement("div", {
    className: className + ` w-icon-${widget.icon}`,
    ...props,
  });
}
export function Column({
  tag = "div",
  className = "",
  columnClasses = "",
  ...props
}) {
  return React.createElement(tag, {
    className: className + " w-col " + columnClasses,
    ...props,
  });
}
const transformWidths = (width, index) => {
  const widths = width?.split("|") ?? [];
  return widths.length > 1 ? widths[index] : width;
};
const columnClass = (width, key) => {
  if (/stack$/.test(width)) return "w-col-stack";
  if (/main$/.test(key)) return `w-col-${width}`;
  return `w-col-${key}-${width}`;
};
export function Row({ tag = "div", className = "", grid, children, ...props }) {
  return React.createElement(
    tag,
    { className: className + " w-row", ...props },
    grid
      ? React.Children.map(children, (child, index) => {
          if (child && typeof child === "object" && child.type !== Column)
            return child;
          const columnClasses = Object.entries(grid.cols ?? {}).reduce(
            (acc, [key, value]) => {
              const width = transformWidths(
                value === "custom" ? "6|6" : value,
                index
              );
              acc.add(width ? columnClass(width, key) : "");
              return acc;
            },
            new Set()
          );
          return React.cloneElement(child, {
            // @ts-ignore
            columnClasses: [...columnClasses].join(" "),
            ...child.props,
          });
        })
      : children
  );
}
export function NotSupported({ _atom = "" }) {
  return <div>{`This builtin is not currently supported: ${_atom}`}</div>;
}
