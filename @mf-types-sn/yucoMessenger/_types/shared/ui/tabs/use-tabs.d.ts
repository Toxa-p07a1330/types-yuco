import { ElementType, RefObject } from "react";
export declare const useTabs: (tabs: Array<{
    id: string;
    content: JSX.Element | string;
    selectedContent?: JSX.Element | string;
}>, Component: ElementType, initValue?: string, scrollable?: boolean, className?: string, refHandler?: RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null | undefined) => {
    tabsLayout: import("react/jsx-runtime").JSX.Element;
    currentTab: string;
};
