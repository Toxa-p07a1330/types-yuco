/// <reference types="react" />
import { TGalleryGridStateController } from '../types';
export declare const useMediaGrid: (galleryGridStateController: TGalleryGridStateController) => {
    handleTop: () => boolean;
    handleBottom: () => boolean;
    mediaCurrentFrame: import("../types").UserMedia[];
    inInitialFrame: boolean;
    isFulfilled: boolean;
    scrollRef: import("react").RefObject<{
        scrollBottom(): void;
    }>;
    scrollerWrapper: HTMLDivElement | null;
    setScrollerWrapper: import("react").Dispatch<import("react").SetStateAction<HTMLDivElement | null>>;
    isTopReached: boolean;
    isInitialLoading: boolean;
};
