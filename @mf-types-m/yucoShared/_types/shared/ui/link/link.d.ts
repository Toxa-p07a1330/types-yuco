import { ReactNode } from "react";
import { IBoldnessVariant, IColorVariant, IMarginVariant } from "../style-utils";
export declare const YuRouterLink: ({ children, routerLink, onClick, replace, margin_top, margin_bottom, boldness, color, disabled, state }: {
    onClick?: (() => void) | undefined;
    children: ReactNode | ReactNode[];
    routerLink?: string | undefined;
    replace?: boolean | undefined;
    disabled?: boolean | undefined;
    state?: string | undefined;
} & IMarginVariant & IColorVariant & IBoldnessVariant) => import("react/jsx-runtime").JSX.Element;
