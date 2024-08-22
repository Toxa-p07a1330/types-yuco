export type InfiniteScrollArgs = {
    children: any;
    callback?: () => void;
    shift?: number;
    wrapperClass?: any;
    showLoader?: boolean;
    callbackTop?: () => void;
    offset?: number;
    scrollable?: boolean;
    height?: number;
    paddingBottom?: number;
};
export type InfiniteScrollHookArgs2 = {
    handleBottom: () => boolean;
    handleTop: () => boolean;
    trackTransition: (val: boolean) => void;
    preventSideHandle: boolean;
};
export type InfiniteScrollHookArgs = {
    callback?: () => void;
    callbackTop?: () => void;
    shift?: number;
    showLoader?: boolean;
};
