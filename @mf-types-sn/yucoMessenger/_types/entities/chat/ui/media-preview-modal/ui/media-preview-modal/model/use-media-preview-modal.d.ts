import { SyntheticEvent } from 'react';
import { SwiperRef } from 'swiper/react';
import { IAttachmentMedia, UserMedia, UserPhoto } from 'shared/types';
export declare const useMediaPreviewModal: ({ media, activeIndex }: {
    media: IAttachmentMedia[];
    activeIndex: number;
}) => {
    onActiveSlideChange: ({ cur, prev }: {
        cur: number;
        prev: number;
    }) => void;
    togglePlay: (videoEl: HTMLVideoElement) => (e: SyntheticEvent) => void;
    sliderMedia: UserMedia[];
    sliderControlsMedia: UserPhoto[];
    swiperRefOpened: import("react").MutableRefObject<SwiperRef | null>;
    isFooterShown: boolean;
    isPaused: boolean;
    isPopoverOpen: boolean;
    moreButtonEl: HTMLDivElement | null;
    hideModal: (id: string) => void;
    setActiveSlide: import("react").Dispatch<import("react").SetStateAction<number>>;
    setVideoEls: import("react").Dispatch<import("react").SetStateAction<HTMLVideoElement[]>>;
    setIsFooterShown: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setIsPopoverOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setMoreButtonElHandler: (node: HTMLDivElement) => void;
    activeSlide: number;
    videoEls: HTMLVideoElement[];
    actionsPopoverRef: import("react").RefObject<HTMLDivElement>;
};
