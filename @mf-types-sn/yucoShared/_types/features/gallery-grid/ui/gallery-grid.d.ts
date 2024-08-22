import { MutableRefObject, SyntheticEvent, FC } from 'react';
import { TGalleryGridStateController } from '../types';
export type TGalleryGridProps = {
    handleClick?: (data: string) => (event: SyntheticEvent) => void;
    gridRef: MutableRefObject<HTMLElement | null | undefined>;
    topOffset?: number;
    bottomOffset?: number;
};
export type TGalleryGridComponentProps = {
    galleryGridStateController: TGalleryGridStateController;
    isMultipleChecking?: boolean;
    disabled?: boolean;
} & TGalleryGridProps;
export declare const GalleryGrid: FC<TGalleryGridComponentProps>;
