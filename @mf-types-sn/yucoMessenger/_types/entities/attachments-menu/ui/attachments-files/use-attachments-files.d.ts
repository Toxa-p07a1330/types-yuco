import { SyntheticEvent } from 'react';
import { UserMedia } from 'shared/types';
declare enum ATTACHMENTS_FILES_MODES {
    RECENT = "recent",
    GALLERY = "gallery",
    FILES = "files"
}
export declare const useAttachmentsFiles: ({ onAttachmentsSend, closeModal }: {
    onAttachmentsSend: (text: string, attachments: UserMedia[], isFile: boolean) => void;
    closeModal: () => void;
}) => {
    openGallery: () => (e: SyntheticEvent) => void;
    openFiles: () => (e: SyntheticEvent) => void;
    mode: ATTACHMENTS_FILES_MODES;
    ATTACHMENTS_FILES_MODES: typeof ATTACHMENTS_FILES_MODES;
};
export {};
