import * as React from "react";
declare type FacebookProps = React.PropsWithChildren<{
  className?: string;
  layout?: string;
  width?: number;
  height?: number;
  url?: string;
  locale?: string;
}>;
export declare function Facebook({
  className,
  layout,
  width,
  height,
  url,
  locale,
  ...props
}: FacebookProps): JSX.Element;
export {};
