export declare const mediaProcessing: () => {
    blob_to_base64: (value: Blob) => Promise<string>;
    base64_to_blob: (value: string) => Promise<Blob>;
    url_to_base64: (value: string) => Promise<string>;
    url_to_blob: (value: string) => Promise<Blob>;
};
