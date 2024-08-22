import { FC } from "react";
interface IFilePreviewModal {
    isOpen: boolean;
    currentFileContent: string;
    onClose: () => void;
    contentClassName?: string;
}
export declare const FilePreviewModal: FC<IFilePreviewModal>;
export {};
