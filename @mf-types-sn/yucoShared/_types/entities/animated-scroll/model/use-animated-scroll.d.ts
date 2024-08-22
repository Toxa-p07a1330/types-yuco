/// <reference types="react" />
import { InfiniteScrollHookArgs2 } from "entities/scroll/model/types";
export declare enum ScrollDirection {
    TOP = "top",
    BOTTOM = "bottom",
    NONE = "none"
}
export declare const useAnimatedScroll: ({ handleBottom, handleTop, trackTransition, preventSideHandle }: InfiniteScrollHookArgs2) => {
    setTopVisible: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setBottomVisible: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    handleTopAvailable: import("react").MutableRefObject<boolean>;
    handleBottomAvailable: import("react").MutableRefObject<boolean>;
    setScrollDirection: import("react").Dispatch<import("react").SetStateAction<ScrollDirection>>;
    scrollDirectionRef: import("react").MutableRefObject<ScrollDirection>;
};
