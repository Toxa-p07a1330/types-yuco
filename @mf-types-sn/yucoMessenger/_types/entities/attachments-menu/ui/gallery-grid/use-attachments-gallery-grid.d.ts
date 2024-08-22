import { SyntheticEvent } from 'react';
import { UserMedia } from 'shared/types';
export declare const useAttachmentsGalleryGrid: () => {
    currentMedia: UserMedia[];
    prevMediaPool: import("entities/attachments-menu/model/store").TMediaPool;
    nextMediaPool: import("entities/attachments-menu/model/store").TMediaPool;
    setCurrentFrameHandler: (dataToProcess: UserMedia[]) => void;
    setPrevMediaPoolInitialHandler: (dataToProcess: UserMedia[]) => void;
    setNextMediaPoolInitialHandler: (dataToProcess: UserMedia[]) => void;
    addNextMediaPoolLastItemsHandler: (dataToProcess: UserMedia[]) => void;
    addPrevMediaPoolFirstItemsHandler: (dataToProcess: UserMedia[]) => void;
    bottomDirectionScrollUpdateHandler: (dataToProcess: UserMedia[]) => void;
    topDirectionScrollUpdateHandler: (dataToProcess: UserMedia[]) => void;
    removeNextMediaPoolLastItemsHandler: (dataToProcess: number) => void;
    removePrevMediaPoolFirstItemsHandler: (dataToProcess: number) => void;
    handleCheck: (data: string) => (event: SyntheticEvent) => void;
    checked: string[];
    picked: UserMedia | null;
    handlePick: (media: UserMedia) => (event: SyntheticEvent) => void;
    notificationInteract: (text: string) => void;
    getGalleryMedia: ({ date, limit, mediaAscending }: {
        date?: string | undefined;
        limit?: number | undefined;
        mediaAscending?: boolean | undefined;
    }) => Promise<{
        filepath: string;
        webviewPath: string;
        creationDate: string;
        contentType: string;
        fileName: string;
        preview: string;
    }[]>;
    readJpegImage: (path: string) => Promise<{
        value: string;
    }>;
};
