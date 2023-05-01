import React from "react";
import { cj, debounce } from "../utils";
const BgVideoContext = React.createContext({ isPlaying: true, togglePlay: () => { } });
export const BackgroundVideoWrapper = ({ tag = "div", className = "", autoPlay = true, loop = true, sources = [], posterImage = "", children, }) => {
    const [isPlaying, setIsPlaying] = React.useState(autoPlay);
    const video = React.useRef(null);
    const togglePlay = debounce(() => {
        setIsPlaying(!isPlaying);
        if (!video?.current)
            return;
        if (video.current.paused) {
            video.current.play();
        }
        else {
            video.current.pause();
        }
    });
    return (React.createElement(BgVideoContext.Provider, { value: { isPlaying, togglePlay } },
        React.createElement(tag, {
            className: cj(className, "w-background-video", "w-background-video-atom"),
        }, React.createElement("video", { ref: video, autoPlay: autoPlay, loop: loop, style: posterImage
                ? { backgroundImage: `url("${posterImage}")` }
                : undefined, muted: true, playsInline: true }, sources.map((url) => (React.createElement("source", { src: url, key: url }))))),
        children));
};
export const BackgroundVideoPlayPauseButton = ({ children, className, }) => {
    const { togglePlay } = React.useContext(BgVideoContext);
    return (React.createElement("div", { "aria-live": "polite" },
        React.createElement("button", { type: "button", className: cj(className, "w-backgroundvideo-backgroundvideoplaypausebutton", "w-background-video--control"), onClick: togglePlay }, children)));
};
export const BackgroundVideoPlayPauseButtonPlaying = ({ children, }) => {
    const { isPlaying } = React.useContext(BgVideoContext);
    return React.createElement("span", { hidden: !isPlaying }, children);
};
export const BackgroundVideoPlayPauseButtonPaused = ({ children, }) => {
    const { isPlaying } = React.useContext(BgVideoContext);
    return React.createElement("span", { hidden: isPlaying }, children);
};
