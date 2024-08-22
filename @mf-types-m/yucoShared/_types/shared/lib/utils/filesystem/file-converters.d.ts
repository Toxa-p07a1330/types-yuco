export declare const blobToFiles: (blob: Array<Blob | null>, format: string) => File[];
export declare function base64FromPath(path: string): Promise<string>;
export declare const base64FromFile: (file: File | Blob) => Promise<string>;
export declare const getPrefix: (name?: string, widthBase64Prefix?: boolean) => string;
