import { UploadFileResponse } from './api-service/api-service';
export type UploadFileBody = {
    file: File;
};
export declare const useMessengerApi: () => {
    getFollowers: (obj: {
        limit: number;
        followers: number;
        offsetId?: string;
        search: string;
    }) => Promise<import("../../../@mf-types/yucoShared/_types/generated-api/social-network").UserWithFollowIndicators[]>;
    readUrl: (body: any) => Promise<{
        url: string;
    }>;
    uploadedUrl: ({ file }: UploadFileBody) => Promise<UploadFileResponse>;
};
