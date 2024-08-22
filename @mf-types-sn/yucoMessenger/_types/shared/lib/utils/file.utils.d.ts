export declare const b64toBlob: (b64Data: string, contentType?: string, sliceSize?: number) => Blob;
export declare const blobToBase64: (blob: Blob) => Promise<unknown>;
export declare const isBase64VideoStr: (base64: string) => boolean;
export declare const urlToBlob: (url: string) => Promise<Blob | undefined>;
export declare const pretendBlobAsFile: (blob: Blob, name: string, lastModifiedDate: Date) => File;
export declare const b64EncodeUnicode: (str: string) => string;
