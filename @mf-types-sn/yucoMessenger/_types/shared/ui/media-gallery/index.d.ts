import { FC } from 'react';
export interface IPostCreationGallery {
    photos: Set<string>;
    handleCheck: (value: string) => void;
    checked: string[];
    videos?: Set<string>;
}
export declare const MediaGallery: FC<IPostCreationGallery>;
