import React from "react";
declare type BackgroundVideoWrapperProps = {
  tag?: keyof HTMLElementTagNameMap;
  className?: string;
  sources?: string[];
  posterImage?: "";
  autoPlay?: boolean;
  loop?: boolean;
  children?: React.ReactElement<BackgroundVideoPlayPauseButtonProps>;
};
export declare const BackgroundVideoWrapper: ({
  tag,
  className,
  autoPlay,
  loop,
  sources,
  posterImage,
  children,
}: BackgroundVideoWrapperProps) => JSX.Element;
declare type BackgroundVideoPlayPauseButtonProps = {
  className?: string;
  children: React.ReactElement<
    | BackgroundVideoPlayPauseButtonPlayingProps
    | BackgroundVideoPlayPauseButtonPausedProps
  >[];
};
export declare const BackgroundVideoPlayPauseButton: ({
  children,
  className,
}: BackgroundVideoPlayPauseButtonProps) => JSX.Element;
declare type BackgroundVideoPlayPauseButtonPlayingProps = {
  children: React.ReactNode;
};
export declare const BackgroundVideoPlayPauseButtonPlaying: ({
  children,
}: BackgroundVideoPlayPauseButtonPlayingProps) => JSX.Element;
declare type BackgroundVideoPlayPauseButtonPausedProps = {
  children: React.ReactNode;
};
export declare const BackgroundVideoPlayPauseButtonPaused: ({
  children,
}: BackgroundVideoPlayPauseButtonPausedProps) => JSX.Element;
export {};
