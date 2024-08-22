/// <reference types="react" />
import { IDraggableImage } from 'shared/types/image.type';
import { UserMedia } from 'features/gallery-grid/types';
import { ISize, ITransformOptions } from 'entities/resize-pan-pinch/types';
export declare const UseGalleryPhotoCropper: ({ pickedMedia, notificationInteract, readJpegImage }: {
    pickedMedia: UserMedia | null;
    notificationInteract: (text: string) => void;
    readJpegImage?: ((val: string) => Promise<{
        value: string;
    }>) | undefined;
}) => {
    takeSinglePhoto: () => Promise<void>;
    resizeImagePanPinchRef: import("react").RefObject<{
        getCroppedImage: () => Promise<{
            data: string;
            transformPosition: ITransformOptions;
        }>;
        getVisibleBlockSize: () => ISize;
        minimizeScale: () => void;
        resetScale: () => void;
    }>;
    getPhoto: () => Promise<string>;
    draggable: IDraggableImage | null;
};
