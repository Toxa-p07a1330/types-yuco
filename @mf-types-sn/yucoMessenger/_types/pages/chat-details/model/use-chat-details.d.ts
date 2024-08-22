/// <reference types="react" />
export declare const useChatDetails: () => {
    initialLeftAction: () => import("react/jsx-runtime").JSX.Element;
    initialRightAction: () => import("react/jsx-runtime").JSX.Element;
    chatItem: import("entities/chat").TChatItem | undefined;
    mode: any;
    setMode: import("react").Dispatch<any>;
    scrollableLayout: boolean;
};
