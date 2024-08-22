import { SyntheticEvent } from 'react';
import { SwiperRef } from 'swiper/react';
import { IMediaViewContent } from 'shared/types';
export declare const useAttachmentsGallery: () => {
    media: import("shared/types").UserMedia[];
    openPreviewMedia: (filePath: string) => void;
    previewMedia: IMediaViewContent | null;
    swiperRefOpened: import("react").MutableRefObject<SwiperRef | null>;
    activeSlide: number;
    setPreviewMedia: import("react").Dispatch<import("react").SetStateAction<IMediaViewContent | null>>;
    setActiveSlide: import("react").Dispatch<import("react").SetStateAction<number>>;
    setVideoEls: import("react").Dispatch<import("react").SetStateAction<HTMLVideoElement[]>>;
    onActiveSlideChange: ({ cur, prev }: {
        cur: number;
        prev: number;
    }) => void;
    inInitialFrame: boolean;
    handleClick: (data: string) => (event: SyntheticEvent) => void;
};
