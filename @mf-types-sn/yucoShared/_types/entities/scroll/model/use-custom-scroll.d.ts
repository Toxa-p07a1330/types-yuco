import { InfiniteScrollHookArgs } from "./types";
import { LegacyRef } from "react";
export declare const useCustomScroll: (args: InfiniteScrollHookArgs) => {
    scrollerRef: import("react").MutableRefObject<HTMLDivElement | undefined>;
    bottomRef: LegacyRef<HTMLDivElement>;
    topRef: LegacyRef<HTMLDivElement>;
};
