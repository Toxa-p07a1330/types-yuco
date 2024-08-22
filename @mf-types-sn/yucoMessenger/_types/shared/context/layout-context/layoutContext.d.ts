import { TChatItem } from 'entities/chat/model/types';
import { FC, ReactNode, Dispatch, SetStateAction } from 'react';
interface PopoverRect {
    top: number;
    left: number;
    bottom: number;
    right: number;
}
interface LayoutContextState {
    rightAction: JSX.Element | null;
    setRightAction: Dispatch<JSX.Element | null>;
    leftAction: JSX.Element | null;
    setLeftAction: Dispatch<SetStateAction<JSX.Element | null>>;
    isLoading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    error: any;
    setError: Dispatch<SetStateAction<any>>;
    mode: string;
    setMode: Dispatch<SetStateAction<string>>;
    popoverRect: PopoverRect;
    setPopoverRect: Dispatch<SetStateAction<PopoverRect>>;
    messagePopovers: any[];
    setMessagePopovers: Dispatch<SetStateAction<any[]>>;
    appointAdminChat: TChatItem | null;
    setAppointAdminChat: Dispatch<SetStateAction<TChatItem | null>>;
    scrollableLayout: boolean;
    setScrollableLayout: Dispatch<SetStateAction<boolean>>;
}
interface LayoutContextProviderProps {
    children: ReactNode;
}
export declare const LayoutContext: import("react").Context<LayoutContextState>;
export declare const LayoutContextProvider: FC<LayoutContextProviderProps>;
export {};
