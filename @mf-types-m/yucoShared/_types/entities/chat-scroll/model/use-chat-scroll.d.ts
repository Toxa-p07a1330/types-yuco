import { InfiniteScrollHookArgs } from "./types";
import { LegacyRef } from "react";
export declare const useChatScroll: (args: InfiniteScrollHookArgs) => {
    scrollerRef: LegacyRef<HTMLDivElement>;
    bottomRef: LegacyRef<HTMLDivElement>;
    topRef: LegacyRef<HTMLDivElement>;
};
