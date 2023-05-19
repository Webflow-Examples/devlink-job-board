import * as React from "react";
declare type TwitterSize = "m" | "l";
declare type TwitterMode = "follow" | "tweet";
declare type TwitterProps = React.PropsWithChildren<{
  className?: string;
  mode?: TwitterMode;
  url?: string;
  text?: string;
  size?: TwitterSize;
}>;
declare global {
  interface Window {
    twttr: any;
  }
}
export declare function Twitter({
  className,
  url,
  mode,
  size,
  text,
  ...props
}: TwitterProps): JSX.Element;
export {};
