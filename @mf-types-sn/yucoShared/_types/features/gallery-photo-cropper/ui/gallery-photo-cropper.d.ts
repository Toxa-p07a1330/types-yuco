/// <reference types="react" />
import { TGalleryGridStateController } from 'features/gallery-grid/types';
interface IEditPhoto {
    layoutContentElement: HTMLIonContentElement | undefined;
    galleryGridStateController: TGalleryGridStateController;
    bottomOffset?: number;
}
export declare const GalleryPhotoCropper: import("react").ForwardRefExoticComponent<IEditPhoto & import("react").RefAttributes<{
    getPhoto: () => Promise<string>;
}>>;
export {};
