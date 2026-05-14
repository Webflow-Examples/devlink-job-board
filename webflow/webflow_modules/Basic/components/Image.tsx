"use client";
import * as React from "react";
import { DevLinkContext } from "../../../DevLinkProvider";

type ImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const Image = React.forwardRef<HTMLImageElement, ImageProps>(function Image(
  { alt, ...props },
  ref
) {
  const { renderImage: UserImage } = React.useContext(DevLinkContext);

  return UserImage ? (
    <UserImage alt={alt || ""} {...props} ref={ref} />
  ) : (
    <img alt={alt || ""} {...props} ref={ref} />
  );
});

export default Image;
