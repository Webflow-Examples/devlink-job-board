import * as React from "react";
export declare type ElementProps<T extends keyof HTMLElementTagNameMap> =
  React.HTMLAttributes<HTMLElementTagNameMap[T]>;
export declare type Props<
  T extends keyof HTMLElementTagNameMap,
  U = unknown
> = ElementProps<T> & React.PropsWithChildren<U>;
declare type BlockProps = React.PropsWithChildren<{
  tag?: React.ElementType;
}> &
  React.HTMLAttributes<HTMLOrSVGElement>;
export declare function Block({
  tag,
  ...props
}: BlockProps): React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
>;
export declare function Span(props: Props<"span">): JSX.Element;
export declare function Blockquote(props: Props<"blockquote">): JSX.Element;
export declare type LinkProps = Props<
  "a",
  {
    options?: {
      href: string;
      target?: "_self" | "_blank";
      preload?: "none" | "prefetch" | "prerender";
    };
    className?: string;
    button?: boolean;
  }
>;
export declare const Link: ({
  options,
  className,
  button,
  ...props
}: LinkProps) => JSX.Element;
declare type ListProps = Props<
  "ul",
  {
    tag?: React.ElementType;
    unstyled?: boolean;
  }
>;
export declare function List({
  tag,
  unstyled,
  className,
  ...props
}: ListProps): React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
>;
export declare function ListItem(
  props: Props<"li">
): React.DetailedReactHTMLElement<
  ElementProps<"li"> & {
    children?: React.ReactNode;
  },
  HTMLElement
>;
declare type ImageProps = React.HTMLProps<HTMLImageElement>;
export declare function Image(
  props: ImageProps
): React.DetailedReactHTMLElement<ImageProps, HTMLImageElement>;
export declare function Section({
  tag,
  ...props
}: Props<
  "section",
  {
    tag: React.ElementType;
  }
>): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export declare type ContainerProps = Props<
  keyof HTMLElementTagNameMap,
  {
    tag?: React.ElementType;
  }
>;
export declare const Container: React.ForwardRefExoticComponent<
  ElementProps<keyof HTMLElementTagNameMap> & {
    tag?: React.ElementType<any> | undefined;
  } & React.RefAttributes<unknown>
>;
declare type HtmlEmbedProps = Props<
  "div",
  {
    tag?: React.ElementType;
    value: string;
  }
>;
export declare function HtmlEmbed({
  tag,
  className,
  value,
  ...props
}: HtmlEmbedProps): React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
>;
export declare function Grid({
  tag,
  className,
  ...props
}: {
  [x: string]: any;
  tag?: string | undefined;
  className?: string | undefined;
}): React.ReactElement<
  {
    className: string;
  },
  string | React.JSXElementConstructor<any>
>;
declare type IconProps = Props<
  "div",
  {
    widget: {
      icon: string;
    };
  }
>;
export declare function Icon({
  widget,
  className,
  ...props
}: IconProps): React.DetailedReactHTMLElement<
  {
    defaultChecked?: boolean | undefined;
    defaultValue?: string | string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    contentEditable?: boolean | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: boolean | undefined;
    hidden?: boolean | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: boolean | undefined;
    style?: React.CSSProperties | undefined;
    tabIndex?: number | undefined;
    title?: string | undefined;
    inputMode?: string | undefined;
    is?: string | undefined;
    radioGroup?: string | undefined;
    role?: string | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    resource?: string | undefined;
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
    unselectable?: "on" | "off" | undefined;
    "aria-activedescendant"?: string | undefined;
    "aria-atomic"?: boolean | "false" | "true" | undefined;
    "aria-autocomplete"?: "inline" | "both" | "none" | "list" | undefined;
    "aria-busy"?: boolean | "false" | "true" | undefined;
    "aria-checked"?: boolean | "mixed" | "false" | "true" | undefined;
    "aria-colcount"?: number | undefined;
    "aria-colindex"?: number | undefined;
    "aria-colspan"?: number | undefined;
    "aria-controls"?: string | undefined;
    "aria-current"?:
      | boolean
      | "location"
      | "time"
      | "false"
      | "step"
      | "true"
      | "page"
      | "date"
      | undefined;
    "aria-describedby"?: string | undefined;
    "aria-details"?: string | undefined;
    "aria-disabled"?: boolean | "false" | "true" | undefined;
    "aria-dropeffect"?:
      | "link"
      | "none"
      | "copy"
      | "move"
      | "execute"
      | "popup"
      | undefined;
    "aria-errormessage"?: string | undefined;
    "aria-expanded"?: boolean | "false" | "true" | undefined;
    "aria-flowto"?: string | undefined;
    "aria-grabbed"?: boolean | "false" | "true" | undefined;
    "aria-haspopup"?:
      | boolean
      | "grid"
      | "dialog"
      | "menu"
      | "false"
      | "true"
      | "listbox"
      | "tree"
      | undefined;
    "aria-hidden"?: boolean | "false" | "true" | undefined;
    "aria-invalid"?:
      | boolean
      | "false"
      | "true"
      | "grammar"
      | "spelling"
      | undefined;
    "aria-keyshortcuts"?: string | undefined;
    "aria-label"?: string | undefined;
    "aria-labelledby"?: string | undefined;
    "aria-level"?: number | undefined;
    "aria-live"?: "off" | "assertive" | "polite" | undefined;
    "aria-modal"?: boolean | "false" | "true" | undefined;
    "aria-multiline"?: boolean | "false" | "true" | undefined;
    "aria-multiselectable"?: boolean | "false" | "true" | undefined;
    "aria-orientation"?: "horizontal" | "vertical" | undefined;
    "aria-owns"?: string | undefined;
    "aria-placeholder"?: string | undefined;
    "aria-posinset"?: number | undefined;
    "aria-pressed"?: boolean | "mixed" | "false" | "true" | undefined;
    "aria-readonly"?: boolean | "false" | "true" | undefined;
    "aria-relevant"?:
      | "all"
      | "text"
      | "additions"
      | "additions text"
      | "removals"
      | undefined;
    "aria-required"?: boolean | "false" | "true" | undefined;
    "aria-roledescription"?: string | undefined;
    "aria-rowcount"?: number | undefined;
    "aria-rowindex"?: number | undefined;
    "aria-rowspan"?: number | undefined;
    "aria-selected"?: boolean | "false" | "true" | undefined;
    "aria-setsize"?: number | undefined;
    "aria-sort"?: "none" | "other" | "ascending" | "descending" | undefined;
    "aria-valuemax"?: number | undefined;
    "aria-valuemin"?: number | undefined;
    "aria-valuenow"?: number | undefined;
    "aria-valuetext"?: string | undefined;
    children?: React.ReactNode;
    dangerouslySetInnerHTML?:
      | {
          __html: string;
        }
      | undefined;
    onCopy?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCopyCapture?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCut?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCutCapture?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onPaste?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onPasteCapture?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCompositionEnd?:
      | React.CompositionEventHandler<HTMLDivElement>
      | undefined;
    onCompositionEndCapture?:
      | React.CompositionEventHandler<HTMLDivElement>
      | undefined;
    onCompositionStart?:
      | React.CompositionEventHandler<HTMLDivElement>
      | undefined;
    onCompositionStartCapture?:
      | React.CompositionEventHandler<HTMLDivElement>
      | undefined;
    onCompositionUpdate?:
      | React.CompositionEventHandler<HTMLDivElement>
      | undefined;
    onCompositionUpdateCapture?:
      | React.CompositionEventHandler<HTMLDivElement>
      | undefined;
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
    onCanPlayThroughCapture?:
      | React.ReactEventHandler<HTMLDivElement>
      | undefined;
    onDurationChange?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onDurationChangeCapture?:
      | React.ReactEventHandler<HTMLDivElement>
      | undefined;
    onEmptied?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEmptiedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEncrypted?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEncryptedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEnded?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEndedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedData?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedDataCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedMetadata?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedMetadataCapture?:
      | React.ReactEventHandler<HTMLDivElement>
      | undefined;
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
    onPointerDownCapture?:
      | React.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerMove?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerMoveCapture?:
      | React.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerUp?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerUpCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerCancel?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerCancelCapture?:
      | React.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerEnter?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerEnterCapture?:
      | React.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerLeave?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerLeaveCapture?:
      | React.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerOver?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOverCapture?:
      | React.PointerEventHandler<HTMLDivElement>
      | undefined;
    onPointerOut?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOutCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onGotPointerCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onGotPointerCaptureCapture?:
      | React.PointerEventHandler<HTMLDivElement>
      | undefined;
    onLostPointerCapture?:
      | React.PointerEventHandler<HTMLDivElement>
      | undefined;
    onLostPointerCaptureCapture?:
      | React.PointerEventHandler<HTMLDivElement>
      | undefined;
    onScroll?: React.UIEventHandler<HTMLDivElement> | undefined;
    onScrollCapture?: React.UIEventHandler<HTMLDivElement> | undefined;
    onWheel?: React.WheelEventHandler<HTMLDivElement> | undefined;
    onWheelCapture?: React.WheelEventHandler<HTMLDivElement> | undefined;
    onAnimationStart?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationStartCapture?:
      | React.AnimationEventHandler<HTMLDivElement>
      | undefined;
    onAnimationEnd?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationEndCapture?:
      | React.AnimationEventHandler<HTMLDivElement>
      | undefined;
    onAnimationIteration?:
      | React.AnimationEventHandler<HTMLDivElement>
      | undefined;
    onAnimationIterationCapture?:
      | React.AnimationEventHandler<HTMLDivElement>
      | undefined;
    onTransitionEnd?: React.TransitionEventHandler<HTMLDivElement> | undefined;
    onTransitionEndCapture?:
      | React.TransitionEventHandler<HTMLDivElement>
      | undefined;
    className: string;
  },
  HTMLElement
>;
declare type ColumnProps = Props<
  "div",
  {
    tag: React.ElementType;
    columnClasses: string;
  }
>;
export declare function Column({
  tag,
  className,
  columnClasses,
  ...props
}: ColumnProps): React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
>;
declare type RowProps = Props<
  "div",
  {
    children: React.ReactElement<typeof Column>[];
    tag: React.ElementType;
    grid: {
      cols: {
        [key: string]: string;
      };
    };
    value: string;
  }
>;
export declare function Row({
  tag,
  className,
  grid,
  children,
  ...props
}: RowProps): React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
>;
export declare function NotSupported({
  _atom,
}: Props<
  "div",
  {
    _atom?: string;
  }
>): JSX.Element;
export {};
