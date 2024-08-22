import { IMediaViewContent } from 'shared/types';
export declare const MediaView: ({ content, videoRef, autoplay }: {
    content: IMediaViewContent;
    videoRef: (el: HTMLVideoElement) => void;
    autoplay?: boolean | undefined;
}) => import("react/jsx-runtime").JSX.Element;
