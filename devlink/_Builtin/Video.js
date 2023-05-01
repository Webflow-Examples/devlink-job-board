import React from "react";
import { cj } from "../utils";
const getAspectRatio = ({ width, height }) => height && width ? height / width : 0;
export function Video({ className = "", options = { height: 0, width: 0, title: "", url: "" }, ...props }) {
    const { height, title, url, width } = options;
    return (React.createElement("div", { ...props, style: { paddingTop: `${getAspectRatio(options) * 100}%` }, className: cj("w-video", "w-embed", className) },
        React.createElement("iframe", { className: "embedly-embed", src: url, width: width, height: height, title: title, allowFullScreen: true, scrolling: "no", frameBorder: "0" })));
}
