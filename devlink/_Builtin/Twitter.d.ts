import * as React from "react";
type TwitterSize = "m" | "l";
type TwitterMode = "follow" | "tweet";
type TwitterProps = React.PropsWithChildren<{
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
export declare function Twitter({ className, url, mode, size, text, ...props }: TwitterProps): JSX.Element;
export {};
