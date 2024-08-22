import { Dispatch, FC, MutableRefObject, SetStateAction, SyntheticEvent } from 'react';
import { SwiperRef } from 'swiper/react';
import 'swiper/css/pagination';
import { UserMedia } from 'shared/types';
interface IMediaSlider {
    media: UserMedia[];
    swiperRefOpened: MutableRefObject<SwiperRef | null>;
    activeSlide: number;
    setActiveSlide: any;
    checked?: string[];
    handleCheck?: (val: string) => (e: SyntheticEvent) => void;
    backCallback?: () => any;
    videoRefs?: MutableRefObject<HTMLVideoElement[]>;
    setVideoEls?: Dispatch<SetStateAction<HTMLVideoElement[]>>;
    onActiveSlideChange?: any;
}
export declare const MediaSlider: FC<IMediaSlider>;
export {};
