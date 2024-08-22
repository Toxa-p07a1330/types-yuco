import { ReactElement } from "react";
interface IVerticalScroll {
    className?: string;
    children?: ReactElement;
    style?: React.CSSProperties;
    bottomOffset?: number;
    handleBottom: () => boolean;
    handleTop: () => boolean;
    trackTransition: (val: boolean) => void;
    bottomLoading: boolean;
    topLoading: boolean;
    reversed?: boolean;
    transitionHeight?: number;
    disabled?: boolean;
    preventSideHandle?: boolean;
}
export declare const AnimatedScroll: import("react").ForwardRefExoticComponent<IVerticalScroll & import("react").RefAttributes<{
    scrollBottom(): void;
}>>;
export {};
