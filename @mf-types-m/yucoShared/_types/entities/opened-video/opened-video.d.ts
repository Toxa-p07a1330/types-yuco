import React, { RefObject } from 'react';
interface IOpenedVideo {
    src: string;
    isCurrentVideoSelected?: boolean;
    isOpened?: boolean;
    photoHeight?: number | null;
    videoRef?: RefObject<HTMLVideoElement>;
    isFullSize: boolean;
    isContainersHidden: boolean;
    autoplay?: boolean;
    withPanel: boolean;
    isFullScreenModal: boolean;
    poster?: string;
}
export declare const OpenedVideo: React.ForwardRefExoticComponent<IOpenedVideo & React.RefAttributes<unknown>>;
export {};
