"use client";
/* eslint-disable @typescript-eslint/no-namespace */

import * as React from "react";

// ============================================================================
// Component Prop Types
// ============================================================================

/**
 * Generic element props type for HTML elements
 */
export type ElementProps<T extends keyof HTMLElementTagNameMap> =
  React.HTMLAttributes<HTMLElementTagNameMap[T]>;

/**
 * Props type that combines element props with additional custom props.
 */
export type Props<
  T extends keyof HTMLElementTagNameMap,
  U = unknown
> = ElementProps<T> & React.PropsWithChildren<U>;

/**
 * Tag props type for components that support custom tags
 */
export type TagProps = Props<
  keyof HTMLElementTagNameMap,
  { tag?: React.ElementType; grid?: unknown }
>;

/**
 * Link props type for Link component
 */
export type LinkProps = Props<
  "a",
  {
    options?: {
      href: string;
      target?: "_self" | "_blank";
      preload?: "none" | "prefetch" | "prerender";
    };
    className?: string;
    button?: boolean;
    block?: string;
  }
>;

// ============================================================================
// Value Type Namespaces
// ============================================================================

export type CSSModules = { [sel: string]: string };

export namespace Basic {
  type PreloadedLink = {
    preload?: "prerender" | "prefetch" | "none";
  };

  type TargetedLink = {
    target?: "_self" | "_blank";
  };

  type PreloadedAndTargetedLink = PreloadedLink & TargetedLink;

  export type Link = { href: string } & PreloadedAndTargetedLink;

  export type RichTextChildren = React.ReactNode;
}

export namespace Asset {
  export type Image = string;
}

export namespace Embed {
  export type Video = {
    height?: number;
    width?: number;
    title?: string;
    url?: string;
  };
}

export namespace Boolean {
  export type Boolean = boolean;
}

export namespace Visibility {
  export type VisibilityConditions = boolean;
}

export namespace Devlink {
  export type Slot = React.ReactNode;
  export type RuntimeProps = Record<string, unknown>;
}

export type FontsManifest = {
  google?: string[];
  typekit?: {
    kitId: string;
  };
};

export namespace Basic {
  export type Attributes = Record<string, unknown>;
}
