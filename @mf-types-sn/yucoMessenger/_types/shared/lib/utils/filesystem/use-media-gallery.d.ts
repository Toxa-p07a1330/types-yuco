/// <reference types="react" />
import { Photo } from '@capacitor/camera';
import { UserPhoto } from 'shared/types';
export declare const useMediaGallery: () => {
    photos: UserPhoto[];
    takePhoto: () => Promise<Photo>;
    takePicture: () => Promise<string | undefined>;
    setPhotos: import("react").Dispatch<import("react").SetStateAction<UserPhoto[]>>;
};
