import * as React from "react";
export type FixMeAny = any;
export type ElementProps<T extends keyof HTMLElementTagNameMap> = React.HTMLAttributes<HTMLElementTagNameMap[T]>;
export type Props<T extends keyof HTMLElementTagNameMap, U = unknown> = ElementProps<T> & React.PropsWithChildren<U>;
type BlockProps = React.PropsWithChildren<{
    tag?: React.ElementType;
}> & React.HTMLAttributes<HTMLOrSVGElement>;
export declare function Block({ tag, ...props }: BlockProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export declare function Span(props: Props<"span">): JSX.Element;
export declare function Blockquote(props: Props<"blockquote">): JSX.Element;
export type LinkProps = Props<"a", {
    options?: {
        href: string;
        target?: "_self" | "_blank";
        preload?: "none" | "prefetch" | "prerender";
    };
    className?: string;
    button?: boolean;
}>;
export declare const Link: React.ForwardRefExoticComponent<ElementProps<"a"> & {
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
type ListProps = Props<"ul", {
    tag?: React.ElementType;
    unstyled?: boolean;
}>;
export declare function List({ tag, unstyled, className, ...props }: ListProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export declare function ListItem(props: Props<"li">): React.DetailedReactHTMLElement<ElementProps<"li"> & {
    children?: React.ReactNode;
}, HTMLElement>;
type ImageProps = React.HTMLProps<HTMLImageElement>;
export declare function Image(props: ImageProps): React.DetailedReactHTMLElement<ImageProps, HTMLImageElement>;
export declare function Section({ tag, ...props }: Props<"section", {
    tag: React.ElementType;
}>): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export type ContainerProps = Props<keyof HTMLElementTagNameMap, {
    tag?: React.ElementType;
}> & React.ComponentPropsWithRef<keyof HTMLElementTagNameMap>;
export declare const Container: React.ForwardRefExoticComponent<(Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, "ref"> & {
    ref?: ((instance: HTMLObjectElement | null) => void) | React.RefObject<HTMLObjectElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, "ref"> & {
    ref?: ((instance: HTMLScriptElement | null) => void) | React.RefObject<HTMLScriptElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & {
    ref?: ((instance: HTMLAnchorElement | null) => void) | React.RefObject<HTMLAnchorElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    ref?: React.RefObject<HTMLElement> | ((instance: HTMLElement | null) => void) | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, "ref"> & {
    ref?: ((instance: HTMLAreaElement | null) => void) | React.RefObject<HTMLAreaElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, "ref"> & {
    ref?: ((instance: HTMLAudioElement | null) => void) | React.RefObject<HTMLAudioElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, "ref"> & {
    ref?: ((instance: HTMLBaseElement | null) => void) | React.RefObject<HTMLBaseElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> & {
    ref?: ((instance: HTMLQuoteElement | null) => void) | React.RefObject<HTMLQuoteElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, "ref"> & {
    ref?: ((instance: HTMLBodyElement | null) => void) | React.RefObject<HTMLBodyElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLBRElement>, HTMLBRElement>, "ref"> & {
    ref?: ((instance: HTMLBRElement | null) => void) | React.RefObject<HTMLBRElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, "ref"> & {
    ref?: ((instance: HTMLCanvasElement | null) => void) | React.RefObject<HTMLCanvasElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> & {
    ref?: ((instance: HTMLTableColElement | null) => void) | React.RefObject<HTMLTableColElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, "ref"> & {
    ref?: ((instance: HTMLTableColElement | null) => void) | React.RefObject<HTMLTableColElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, "ref"> & {
    ref?: ((instance: HTMLDataElement | null) => void) | React.RefObject<HTMLDataElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, "ref"> & {
    ref?: ((instance: HTMLDataListElement | null) => void) | React.RefObject<HTMLDataListElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.DelHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> & {
    ref?: ((instance: HTMLModElement | null) => void) | React.RefObject<HTMLModElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.DetailsHTMLAttributes<HTMLDetailsElement>, HTMLDetailsElement>, "ref"> & {
    ref?: ((instance: HTMLDetailsElement | null) => void) | React.RefObject<HTMLDetailsElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, "ref"> & {
    ref?: ((instance: HTMLDialogElement | null) => void) | React.RefObject<HTMLDialogElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, "ref"> & {
    ref?: ((instance: HTMLDListElement | null) => void) | React.RefObject<HTMLDListElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, "ref"> & {
    ref?: ((instance: HTMLEmbedElement | null) => void) | React.RefObject<HTMLEmbedElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, "ref"> & {
    ref?: ((instance: HTMLFieldSetElement | null) => void) | React.RefObject<HTMLFieldSetElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref"> & {
    ref?: ((instance: HTMLFormElement | null) => void) | React.RefObject<HTMLFormElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> & {
    ref?: ((instance: HTMLHeadingElement | null) => void) | React.RefObject<HTMLHeadingElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, "ref"> & {
    ref?: ((instance: HTMLHeadElement | null) => void) | React.RefObject<HTMLHeadElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, "ref"> & {
    ref?: ((instance: HTMLHRElement | null) => void) | React.RefObject<HTMLHRElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, "ref"> & {
    ref?: ((instance: HTMLHtmlElement | null) => void) | React.RefObject<HTMLHtmlElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, "ref"> & {
    ref?: ((instance: HTMLIFrameElement | null) => void) | React.RefObject<HTMLIFrameElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "ref"> & {
    ref?: ((instance: HTMLImageElement | null) => void) | React.RefObject<HTMLImageElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
    ref?: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.InsHTMLAttributes<HTMLModElement>, HTMLModElement>, "ref"> & {
    ref?: ((instance: HTMLModElement | null) => void) | React.RefObject<HTMLModElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, "ref"> & {
    ref?: ((instance: HTMLLabelElement | null) => void) | React.RefObject<HTMLLabelElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, "ref"> & {
    ref?: ((instance: HTMLLegendElement | null) => void) | React.RefObject<HTMLLegendElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & {
    ref?: ((instance: HTMLLIElement | null) => void) | React.RefObject<HTMLLIElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, "ref"> & {
    ref?: ((instance: HTMLLinkElement | null) => void) | React.RefObject<HTMLLinkElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, "ref"> & {
    ref?: ((instance: HTMLMapElement | null) => void) | React.RefObject<HTMLMapElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.MenuHTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    ref?: React.RefObject<HTMLElement> | ((instance: HTMLElement | null) => void) | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, "ref"> & {
    ref?: ((instance: HTMLMetaElement | null) => void) | React.RefObject<HTMLMetaElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.MeterHTMLAttributes<HTMLMeterElement>, HTMLMeterElement>, "ref"> & {
    ref?: ((instance: HTMLMeterElement | null) => void) | React.RefObject<HTMLMeterElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & {
    ref?: ((instance: HTMLOListElement | null) => void) | React.RefObject<HTMLOListElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, "ref"> & {
    ref?: ((instance: HTMLOptGroupElement | null) => void) | React.RefObject<HTMLOptGroupElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, "ref"> & {
    ref?: ((instance: HTMLOptionElement | null) => void) | React.RefObject<HTMLOptionElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.OutputHTMLAttributes<HTMLOutputElement>, HTMLOutputElement>, "ref"> & {
    ref?: ((instance: HTMLOutputElement | null) => void) | React.RefObject<HTMLOutputElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void) | React.RefObject<HTMLParagraphElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, "ref"> & {
    ref?: ((instance: HTMLPreElement | null) => void) | React.RefObject<HTMLPreElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, "ref"> & {
    ref?: ((instance: HTMLProgressElement | null) => void) | React.RefObject<HTMLProgressElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, "ref"> & {
    ref?: ((instance: HTMLQuoteElement | null) => void) | React.RefObject<HTMLQuoteElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref"> & {
    ref?: ((instance: HTMLSelectElement | null) => void) | React.RefObject<HTMLSelectElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, "ref"> & {
    ref?: ((instance: HTMLSlotElement | null) => void) | React.RefObject<HTMLSlotElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, "ref"> & {
    ref?: ((instance: HTMLSourceElement | null) => void) | React.RefObject<HTMLSourceElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & {
    ref?: ((instance: HTMLSpanElement | null) => void) | React.RefObject<HTMLSpanElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, "ref"> & {
    ref?: ((instance: HTMLStyleElement | null) => void) | React.RefObject<HTMLStyleElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, "ref"> & {
    ref?: ((instance: HTMLTableElement | null) => void) | React.RefObject<HTMLTableElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, "ref"> & {
    ref?: ((instance: HTMLTableSectionElement | null) => void) | React.RefObject<HTMLTableSectionElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, "ref"> & {
    ref?: ((instance: HTMLTableDataCellElement | null) => void) | React.RefObject<HTMLTableDataCellElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, "ref"> & {
    ref?: ((instance: HTMLTemplateElement | null) => void) | React.RefObject<HTMLTemplateElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & {
    ref?: ((instance: HTMLTextAreaElement | null) => void) | React.RefObject<HTMLTextAreaElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, "ref"> & {
    ref?: ((instance: HTMLTableHeaderCellElement | null) => void) | React.RefObject<HTMLTableHeaderCellElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.TimeHTMLAttributes<HTMLTimeElement>, HTMLTimeElement>, "ref"> & {
    ref?: ((instance: HTMLTimeElement | null) => void) | React.RefObject<HTMLTimeElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, "ref"> & {
    ref?: ((instance: HTMLTitleElement | null) => void) | React.RefObject<HTMLTitleElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, "ref"> & {
    ref?: ((instance: HTMLTableRowElement | null) => void) | React.RefObject<HTMLTableRowElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, "ref"> & {
    ref?: ((instance: HTMLTrackElement | null) => void) | React.RefObject<HTMLTrackElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & {
    ref?: ((instance: HTMLUListElement | null) => void) | React.RefObject<HTMLUListElement> | null | undefined;
}, "ref"> | Omit<ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
} & {
    children?: React.ReactNode;
} & Omit<React.DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, "ref"> & {
    ref?: ((instance: HTMLVideoElement | null) => void) | React.RefObject<HTMLVideoElement> | null | undefined;
}, "ref">) & React.RefAttributes<unknown>>;
type HtmlEmbedProps = Props<"div", {
    tag?: React.ElementType;
    value: string;
}>;
export declare function HtmlEmbed({ tag, className, value, ...props }: HtmlEmbedProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export declare function Grid({ tag, className, ...props }: {
    [x: string]: any;
    tag?: string | undefined;
    className?: string | undefined;
}): React.ReactElement<{
    className: string;
}, string | React.JSXElementConstructor<any>>;
type IconProps = Props<"div", {
    widget: {
        icon: string;
    };
}>;
export declare function Icon({ widget, className, ...props }: IconProps): React.DetailedReactHTMLElement<{
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoFocus?: boolean | undefined;
    contentEditable?: "inherit" | (boolean | "true" | "false") | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    style?: React.CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    role?: React.AriaRole | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "off" | "on" | undefined;
    inputMode?: "none" | "text" | "search" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
    is?: string | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: (boolean | "true" | "false") | undefined;
    'aria-autocomplete'?: "none" | "list" | "inline" | "both" | undefined;
    'aria-busy'?: (boolean | "true" | "false") | undefined;
    'aria-checked'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?: boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: (boolean | "true" | "false") | undefined;
    'aria-dropeffect'?: "none" | "link" | "copy" | "execute" | "move" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: (boolean | "true" | "false") | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: (boolean | "true" | "false") | undefined;
    'aria-haspopup'?: boolean | "dialog" | "menu" | "true" | "false" | "grid" | "listbox" | "tree" | undefined;
    'aria-hidden'?: (boolean | "true" | "false") | undefined;
    'aria-invalid'?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "polite" | "off" | "assertive" | undefined;
    'aria-modal'?: (boolean | "true" | "false") | undefined;
    'aria-multiline'?: (boolean | "true" | "false") | undefined;
    'aria-multiselectable'?: (boolean | "true" | "false") | undefined;
    'aria-orientation'?: "horizontal" | "vertical" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-readonly'?: (boolean | "true" | "false") | undefined;
    'aria-relevant'?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    'aria-required'?: (boolean | "true" | "false") | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: (boolean | "true" | "false") | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    children?: React.ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCopyCapture?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCut?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCutCapture?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onPaste?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onPasteCapture?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCompositionEnd?: React.CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionEndCapture?: React.CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionStart?: React.CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionStartCapture?: React.CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionUpdate?: React.CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionUpdateCapture?: React.CompositionEventHandler<HTMLDivElement> | undefined;
    onFocus?: React.FocusEventHandler<HTMLDivElement> | undefined;
    onFocusCapture?: React.FocusEventHandler<HTMLDivElement> | undefined;
    onBlur?: React.FocusEventHandler<HTMLDivElement> | undefined;
    onBlurCapture?: React.FocusEventHandler<HTMLDivElement> | undefined;
    onChange?: React.FormEventHandler<HTMLDivElement> | undefined;
    onChangeCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onBeforeInput?: React.FormEventHandler<HTMLDivElement> | undefined;
    onBeforeInputCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onInput?: React.FormEventHandler<HTMLDivElement> | undefined;
    onInputCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onReset?: React.FormEventHandler<HTMLDivElement> | undefined;
    onResetCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onSubmit?: React.FormEventHandler<HTMLDivElement> | undefined;
    onSubmitCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onInvalid?: React.FormEventHandler<HTMLDivElement> | undefined;
    onInvalidCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onLoad?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onError?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onErrorCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyDownCapture?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyPress?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyPressCapture?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyUp?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyUpCapture?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onAbort?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onAbortCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlay?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayThrough?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayThroughCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onDurationChange?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onDurationChangeCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEmptied?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEmptiedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEncrypted?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEncryptedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEnded?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEndedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedData?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedDataCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedMetadata?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedMetadataCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadStart?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadStartCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPause?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPauseCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPlay?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPlayCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPlaying?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPlayingCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onProgress?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onProgressCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onRateChange?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onRateChangeCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onResize?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onResizeCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSeeked?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSeekedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSeeking?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSeekingCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onStalled?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onStalledCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSuspend?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSuspendCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onTimeUpdate?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onTimeUpdateCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onVolumeChange?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onVolumeChangeCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onWaiting?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onWaitingCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onAuxClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onAuxClickCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onClickCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onContextMenu?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onContextMenuCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onDoubleClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onDoubleClickCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onDrag?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragEnd?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragEndCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragEnter?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragEnterCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragExit?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragExitCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragLeave?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragLeaveCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragOver?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragOverCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragStart?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragStartCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDrop?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDropCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onMouseDown?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseDownCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseMove?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseMoveCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOut?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOutCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOver?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOverCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseUp?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseUpCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onSelect?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSelectCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onTouchCancel?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchCancelCapture?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchEnd?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchEndCapture?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchMove?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchMoveCapture?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchStart?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchStartCapture?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onPointerDown?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerDownCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerMove?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerMoveCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerUp?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerUpCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerCancel?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerCancelCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerEnter?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerLeave?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOver?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOverCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOut?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOutCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onGotPointerCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onGotPointerCaptureCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onLostPointerCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onLostPointerCaptureCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onScroll?: React.UIEventHandler<HTMLDivElement> | undefined;
    onScrollCapture?: React.UIEventHandler<HTMLDivElement> | undefined;
    onWheel?: React.WheelEventHandler<HTMLDivElement> | undefined;
    onWheelCapture?: React.WheelEventHandler<HTMLDivElement> | undefined;
    onAnimationStart?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationStartCapture?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationEnd?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationEndCapture?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationIteration?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationIterationCapture?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onTransitionEnd?: React.TransitionEventHandler<HTMLDivElement> | undefined;
    onTransitionEndCapture?: React.TransitionEventHandler<HTMLDivElement> | undefined;
    className: string;
}, HTMLElement>;
type ColumnProps = Props<"div", {
    tag: React.ElementType;
    columnClasses: string;
    grid: FixMeAny;
}>;
export declare function Column({ tag, className, columnClasses, grid, ...props }: ColumnProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
type RowProps = Props<"div", {
    children: React.ReactElement<typeof Column>[];
    tag: React.ElementType;
    grid: {
        cols: {
            [key: string]: string;
        };
    };
    value: string;
}>;
export declare function Row({ tag, className, grid, children, ...props }: RowProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export declare function NotSupported({ _atom }: Props<"div", {
    _atom?: string;
}>): JSX.Element;
export {};
