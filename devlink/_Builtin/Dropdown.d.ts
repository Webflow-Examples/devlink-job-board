import * as React from "react";
import { LinkProps } from "./Basic";
declare type DropdownProps = React.PropsWithChildren<{
  tag?: keyof HTMLElementTagNameMap;
  className?: string;
}>;
declare type DropdownWrapperProps = DropdownProps & {
  children: React.ReactElement<DropdownToggleProps | DropdownListProps>;
};
export declare function DropdownWrapper(
  props: DropdownWrapperProps
): JSX.Element;
declare type DropdownToggleProps = DropdownProps;
export declare function DropdownToggle({
  tag,
  className,
  ...props
}: DropdownToggleProps): React.DOMElement<
  {
    "aria-haspopup": string;
    "aria-expanded": boolean;
    className: string;
    onClick: () => void;
    children?: React.ReactNode;
  },
  Element
>;
declare type DropdownListProps = DropdownProps & {
  children:
    | React.ReactElement<DropdownLinkProps>
    | React.ReactElement<DropdownLinkProps>[];
};
export declare function DropdownList({
  tag,
  className,
  ...props
}: DropdownListProps): React.DOMElement<
  {
    className: string;
    children: React.ReactNode &
      (
        | React.ReactElement<
            DropdownLinkProps,
            string | React.JSXElementConstructor<any>
          >
        | React.ReactElement<
            DropdownLinkProps,
            string | React.JSXElementConstructor<any>
          >[]
      );
  },
  Element
>;
declare type DropdownLinkProps = DropdownProps & LinkProps;
export declare function DropdownLink({
  className,
  ...props
}: DropdownLinkProps): React.FunctionComponentElement<
  import("./Basic").ElementProps<"a"> & {
    options?:
      | {
          href: string;
          target?: "_self" | "_blank" | undefined;
          preload?: "none" | "prerender" | "prefetch" | undefined;
        }
      | undefined;
    className?: string | undefined;
    button?: boolean | undefined;
  }
>;
export {};
