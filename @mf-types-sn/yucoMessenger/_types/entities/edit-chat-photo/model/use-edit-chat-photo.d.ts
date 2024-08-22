import { Dispatch, SetStateAction } from 'react';
export declare const UseEditChatPhoto: (editPhoto: (nash_name: string) => void, setIsLoading: Dispatch<SetStateAction<boolean>>) => {
    galleryPhotoCropperRef: import("react").RefObject<{
        getPhoto: () => Promise<string>;
    }>;
};
