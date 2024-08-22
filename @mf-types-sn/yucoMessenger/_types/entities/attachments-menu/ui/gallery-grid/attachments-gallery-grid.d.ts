import { MutableRefObject, SyntheticEvent } from 'react';
import { TMediaPool } from '../../model/store';
import { UserMedia } from 'shared/types';
export type GalleryGridStateController = {
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
    handleCheck: (data: string) => (event: SyntheticEvent) => void;
    handlePick: (data: UserMedia) => (event: SyntheticEvent) => void;
    notificationInteract: (text: string) => void;
    checked: string[];
    picked: UserMedia | null;
};
export type TGalleryGridProps = {
    handleClick?: (data: string) => (event: SyntheticEvent) => void;
    gridRef: MutableRefObject<HTMLElement | null | undefined>;
    topOffset?: number;
};
export type TGalleryGridComponentProps = {
    galleryGridStateController: GalleryGridStateController;
    isExternalUsageDarkTheme?: boolean;
    isMultipleChecking?: boolean;
    disabled?: boolean;
} & TGalleryGridProps;
export declare const AttachmentsGalleryGrid: ({ handleClick, gridRef, topOffset }: TGalleryGridProps) => import("react/jsx-runtime").JSX.Element;
