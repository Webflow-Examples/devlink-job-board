import * as React from "react";
export function Heading({ tag = "h1", ...props }) {
    return React.createElement(tag, props);
}
export function Paragraph(props) {
    return React.createElement("p", props);
}
export function Emphasized(props) {
    return React.createElement("em", { ...props });
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
    return React.createElement("figure", { className: className, ...props });
}
export function Figcaption(props) {
    return React.createElement("figcaption", { ...props });
}
export function Subscript(props) {
    return React.createElement("sub", { ...props });
}
export function Superscript(props) {
    return React.createElement("sup", { ...props });
}
export function RichText({ tag = "div", className = "", ...props }) {
    return React.createElement(tag, {
        className: className + " w-richtext",
        ...props,
    });
}
