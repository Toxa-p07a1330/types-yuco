import { FC } from 'react';
import { IAttachmentMedia } from 'shared/types';
interface IImagePreviewModal {
    isOpen: boolean;
    onClose: () => void;
    currentImageContent: IAttachmentMedia | null;
}
export declare const ImagePreviewModal: FC<IImagePreviewModal>;
export {};
