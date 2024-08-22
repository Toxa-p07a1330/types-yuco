export declare const isVideo: (src: string) => boolean;
export declare const getVideoSize: (blob: Blob | string) => Promise<unknown>;
export declare const getVideoThumbnailPhotoUrl: (blob: Blob | string, time?: number) => Promise<string>;
export declare const getVideoThumbnailPhoto: (blob: Blob | string) => Promise<Blob | null>;
export declare const pretendBlobAsFile: (blob: Blob, name: string, lastModifiedDate: Date) => File;
