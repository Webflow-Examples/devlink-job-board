import * as React from "react";
import { EASING_FUNCTIONS } from "../utils";
declare type SliderConfig = {
  navSpacing: number;
  navShadow: boolean;
  autoplay: boolean;
  delay: number;
  iconArrows: boolean;
  animation: "slide" | "cross" | "outin" | "fade" | "over";
  navNumbers: boolean;
  easing: keyof typeof EASING_FUNCTIONS;
  navRound: boolean;
  hideArrows: boolean;
  disableSwipe: boolean;
  duration: number;
  infinite: boolean;
  autoMax: number;
  navInvert: boolean;
};
declare type SlideState = {
  current: number;
  previous: number;
};
export declare const SliderContext: React.Context<
  SliderConfig & {
    slideAmount: number;
    setSlideAmount: React.Dispatch<React.SetStateAction<number>>;
    slide: SlideState;
    setCurrentSlide: (current: number) => void;
    goToNextSlide: () => void;
    goToPreviousSlide: () => void;
    isAutoplayPaused: boolean;
    setAutoplayPause: React.Dispatch<React.SetStateAction<boolean>>;
  }
>;
declare type SliderChildrenType =
  | SliderSlideProps
  | SliderArrowProps
  | SliderNavProps
  | SliderMaskProps;
declare type SliderWrapperProps = SliderConfig & {
  className?: string;
  children?:
    | React.ReactElement<SliderChildrenType>[]
    | React.ReactElement<SliderChildrenType>;
};
export declare function SliderWrapper({
  className,
  ...props
}: SliderWrapperProps): JSX.Element;
declare type SliderMaskProps = React.PropsWithChildren<{
  className?: string;
}>;
export declare function SliderMask({
  className,
  children,
  ...props
}: SliderMaskProps): JSX.Element;
declare type SliderSlideProps = React.PropsWithChildren<{
  style?: React.CSSProperties;
  tag?: string;
  className?: string;
  index: number;
}>;
export declare function SliderSlide({
  tag,
  className,
  style,
  index,
  ...props
}: SliderSlideProps): React.DOMElement<
  {
    className: string;
    style: {};
    "aria-label": string;
    role: string;
    ref: (node: any) => void;
    "aria-hidden": string;
    children?: React.ReactNode;
  },
  any
>;
declare type SliderArrowProps = React.PropsWithChildren<{
  className?: string;
  dir: "left" | "right";
}>;
export declare function SliderArrow({
  className,
  dir,
  children,
  ...props
}: SliderArrowProps): JSX.Element;
declare type SliderNavProps = {
  className?: string;
};
export declare function SliderNav({
  className,
  ...props
}: SliderNavProps): JSX.Element;
export {};
