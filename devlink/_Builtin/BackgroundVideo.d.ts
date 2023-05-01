import React from "react";
type BackgroundVideoWrapperProps = {
    tag?: keyof HTMLElementTagNameMap;
    className?: string;
    sources?: string[];
    posterImage?: "";
    autoPlay?: boolean;
    loop?: boolean;
    children?: React.ReactElement<BackgroundVideoPlayPauseButtonProps>;
};
export declare const BackgroundVideoWrapper: ({ tag, className, autoPlay, loop, sources, posterImage, children, }: BackgroundVideoWrapperProps) => JSX.Element;
type BackgroundVideoPlayPauseButtonProps = {
    className?: string;
    children: React.ReactElement<BackgroundVideoPlayPauseButtonPlayingProps | BackgroundVideoPlayPauseButtonPausedProps>[];
};
export declare const BackgroundVideoPlayPauseButton: ({ children, className, }: BackgroundVideoPlayPauseButtonProps) => JSX.Element;
type BackgroundVideoPlayPauseButtonPlayingProps = {
    children: React.ReactNode;
};
export declare const BackgroundVideoPlayPauseButtonPlaying: ({ children, }: BackgroundVideoPlayPauseButtonPlayingProps) => JSX.Element;
type BackgroundVideoPlayPauseButtonPausedProps = {
    children: React.ReactNode;
};
export declare const BackgroundVideoPlayPauseButtonPaused: ({ children, }: BackgroundVideoPlayPauseButtonPausedProps) => JSX.Element;
export {};
