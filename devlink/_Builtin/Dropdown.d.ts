import * as React from "react";
import { LinkProps } from "./Basic";
type DropdownProps = React.PropsWithChildren<{
    tag?: keyof HTMLElementTagNameMap;
    className?: string;
}>;
type DropdownWrapperProps = DropdownProps & {
    children: React.ReactElement<DropdownToggleProps | DropdownListProps>;
};
export declare function DropdownWrapper(props: DropdownWrapperProps): JSX.Element;
type DropdownToggleProps = DropdownProps;
export declare function DropdownToggle({ tag, className, ...props }: DropdownToggleProps): React.DetailedReactHTMLElement<{
    "aria-haspopup": "menu";
    "aria-expanded": boolean;
    className: string;
    onClick: () => void;
    children?: React.ReactNode;
}, HTMLElement>;
type DropdownListProps = DropdownProps & {
    children: React.ReactElement<DropdownLinkProps> | React.ReactElement<DropdownLinkProps>[];
};
export declare function DropdownList({ tag, className, ...props }: DropdownListProps): React.DetailedReactHTMLElement<{
    className: string;
    children: React.ReactNode & (React.ReactElement<DropdownLinkProps, string | React.JSXElementConstructor<any>> | React.ReactElement<DropdownLinkProps, string | React.JSXElementConstructor<any>>[]);
}, HTMLElement>;
type DropdownLinkProps = DropdownProps & LinkProps;
export declare function DropdownLink({ className, ...props }: DropdownLinkProps): React.FunctionComponentElement<import("./Basic").ElementProps<"a"> & {
    options?: {
        href: string;
        target?: "_self" | "_blank" | undefined;
        preload?: "prerender" | "prefetch" | "none" | undefined;
    } | undefined;
    className?: string | undefined;
    button?: boolean | undefined;
} & {
    children?: React.ReactNode;
} & React.RefAttributes<any>>;
export {};
