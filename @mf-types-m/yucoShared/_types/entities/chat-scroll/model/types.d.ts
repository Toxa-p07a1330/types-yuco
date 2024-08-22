export type InfiniteScrollArgs = {
    children: any;
    callback?: () => void;
    wrapperClass?: any;
    showLoader?: boolean;
    callbackTop?: () => void;
    offset?: number;
    inInitialFrame?: boolean;
    transitionCallback?: () => void;
    isMessagesLoading: boolean;
    isFulfilled: boolean;
    isTopReached: boolean;
    bottomOffset: number;
};
export type InfiniteScrollHookArgs = {
    callback?: () => void;
    callbackTop?: () => void;
    showLoader?: boolean;
    children: any;
    inInitialFrame?: boolean;
    transitionCallback?: () => void;
    isMessagesLoading: boolean;
    isFulfilled: boolean;
    isTopReached: boolean;
};
