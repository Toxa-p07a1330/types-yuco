import { SyntheticEvent } from 'react';
export interface UserPhoto {
    filepath: string;
    webviewPath: string;
    contentType: string;
}
export interface UserMedia extends UserPhoto {
    creationDate?: string;
    size?: number;
    fileName?: string;
    preview?: string;
}
interface IGridItemBase {
    media: UserMedia;
    handleClick?: (data: string) => (event: SyntheticEvent) => void;
}
interface IGridItemCommon extends IGridItemBase {
    isMultipleChecking: false;
}
interface IGridItemMultiselect extends IGridItemBase {
    isMultipleChecking: true;
}
interface IPickOptions {
    picked: UserMedia | null;
    handlePick: (data: UserMedia) => (event: SyntheticEvent) => void;
}
interface IMultiselectOptions {
    checked: string[];
    handleCheck: (data: UserMedia) => (event: SyntheticEvent) => void;
}
type TConditionalProperties<K, T extends K> = T extends {
    isMultipleChecking: true;
} ? T & IMultiselectOptions : T & IPickOptions;
interface IGridWrapperBase {
    frame: UserMedia[];
    handleClick?: (data: string) => (event: SyntheticEvent) => void;
    isMultipleChecking: boolean;
}
interface IGridWrapperCommon extends IGridWrapperBase {
    isMultipleChecking: false;
}
interface IGridWrapperMultiselect extends IGridWrapperBase {
    isMultipleChecking: true;
}
export type TGalleryGridItem = TConditionalProperties<IGridItemBase, IGridItemCommon> | TConditionalProperties<IGridItemBase, IGridItemMultiselect>;
export type TGalleryWrapper = TConditionalProperties<IGridWrapperBase, IGridWrapperCommon> | TConditionalProperties<IGridWrapperBase, IGridWrapperMultiselect>;
export type TMediaPool = {
    media: UserMedia[];
    initialized: boolean;
    filled: number;
};
export type TGalleryGridStateController = {
    currentMedia: UserMedia[];
    nextMediaPool: TMediaPool;
    prevMediaPool: TMediaPool;
    setCurrentFrameHandler: (dataToProcess: UserMedia[]) => void;
    setPrevMediaPoolInitialHandler: (dataToProcess: UserMedia[]) => void;
    setNextMediaPoolInitialHandler: (dataToProcess: UserMedia[]) => void;
    addNextMediaPoolLastItemsHandler: (dataToProcess: UserMedia[]) => void;
    addPrevMediaPoolFirstItemsHandler: (dataToProcess: UserMedia[]) => void;
    bottomDirectionScrollUpdateHandler: (dataToProcess: UserMedia[]) => void;
    topDirectionScrollUpdateHandler: (dataToProcess: UserMedia[]) => void;
    removeNextMediaPoolLastItemsHandler: (dataToProcess: number) => void;
    removePrevMediaPoolFirstItemsHandler: (dataToProcess: number) => void;
    handleCheck: (data: UserMedia) => (event: SyntheticEvent) => void;
    handlePick: (data: UserMedia) => (event: SyntheticEvent) => void;
    notificationInteract: (text: string) => void;
    checked: string[];
    picked: UserMedia | null;
    getGalleryMedia: ({ date, limit, mediaAscending }: {
        date?: string | undefined;
        limit?: number | undefined;
        mediaAscending?: boolean | undefined;
    }) => Promise<UserMedia[]>;
    readJpegImage?: (val: string) => Promise<{
        value: string;
    }>;
};
export {};
