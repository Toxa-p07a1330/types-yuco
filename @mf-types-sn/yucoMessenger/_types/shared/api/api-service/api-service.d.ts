export type UploadFileResponse = {
    id: number;
    path: string;
    file_name: string;
    hashname: string;
    blocked_reason: string | null;
    bucket: string;
    created_by: number;
    created_at: string;
    blocked_by: string | null;
    blocked_at: string | null;
    deleted_by: string | null;
    deleted_at: string | null;
};
export declare const uploadedUrlReq: ({ file }: {
    file: File;
}) => Promise<{
    hashname: string;
    file_name: string;
}>;
export declare const readUrlReq: (body: any) => Promise<any>;
