import { Dispatch, RefObject, SetStateAction } from 'react';
interface IVariableScrollLayoutContext {
    scrollable: boolean;
    mode: any;
    setScrollable: Dispatch<SetStateAction<boolean>>;
    setMode: Dispatch<SetStateAction<any>>;
    tabContentElement?: HTMLDivElement;
    bottomElement?: HTMLDivElement;
    tabLayoutElement?: HTMLDivElement;
    containerElement?: HTMLDivElement;
    layoutContentElement?: HTMLIonContentElement;
    scrollableContentElement?: HTMLDivElement;
    setTabContentElementHandler?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined;
    setTabLayoutElementHandler?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined;
    setContainerElementHandler?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined;
    setLayoutContentElementHandler?: ((instance: HTMLIonContentElement | null) => void) | RefObject<HTMLIonContentElement> | null | undefined;
    setBottomElementHandler?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined;
    setScrollableContentElementHandler?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined;
    headerColor: string;
    titleOpacity: number;
    manualSetScrollableLayoutTo?: (value: boolean) => void;
}
export declare const VariableScrollLayoutContext: import("react").Context<IVariableScrollLayoutContext>;
export declare const VariableScrollLayoutProvider: (props: any) => import("react/jsx-runtime").JSX.Element;
export {};
