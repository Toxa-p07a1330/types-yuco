import { Directory } from '@capacitor/filesystem';
import { IChatAttachmentsRes } from 'entities/chat/model/types';
import { UserMedia } from 'shared/types';
export declare const FilesystemService: () => {
    getGalleryMedia: ({ date, limit, mediaAscending }: {
        date?: string | undefined;
        limit?: number | undefined;
        mediaAscending?: boolean | undefined;
    }) => Promise<{
        filepath: string;
        webviewPath: string;
        creationDate: string;
        contentType: string;
        fileName: string;
        preview: string;
    }[]>;
    saveMedia: (fileName: string, base64Data: string, isVideo: boolean) => Promise<string | null>;
    rmYucoCacheDir: () => Promise<void>;
    mkYucoCacheDir: () => Promise<void>;
    readFileFromDir: (filepath: string, directory: Directory) => Promise<void | import("@capacitor/filesystem").ReadFileResult>;
    readAttachment: (hashname: string, isVideo: boolean) => Promise<string>;
    pickFiles: () => Promise<UserMedia[]>;
    downloadFile: (url: string, fileName: string, progressCallback: (value: any) => void) => void;
    prepareMediaVideoAttachment: (item: any) => Promise<{
        hashname: string;
        data: string;
        type: string;
        thumbnail: string;
        object_type: "video";
        is_file: boolean;
        size: any;
        file_name: string;
    }>;
    prepareMediaImageAttachment: (item: any) => Promise<{
        hashname: string;
        data: string;
        type: string;
        thumbnail: string;
        object_type: "photo";
        is_file: boolean;
        size: any;
        file_name: string;
    }>;
    prepareFileAttachment: (item: any) => Promise<{
        hashname: string;
        data: string;
        type: any;
        object_type: "file";
        is_file: boolean;
        size: any;
        file_name: any;
    }>;
    addFilesystemProgressListener: () => void;
    appendThumbnailToReplyAttachment: (message: any) => Promise<IChatAttachmentsRes>;
    appendThumbnailToAttachment: (item: any) => Promise<IChatAttachmentsRes>;
    checkGalleryPermissions: () => Promise<boolean>;
    readJpegImage: (path: string) => Promise<{
        value: string;
    }>;
};
