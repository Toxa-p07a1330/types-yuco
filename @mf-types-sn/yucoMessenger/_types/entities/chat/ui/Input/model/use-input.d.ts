/// <reference types="react" />
import { TMessage } from 'entities/chat/model';
import { UserMedia } from 'shared/types';
export declare const useInput: ({ onSend, onReply, onEdit, onForward, onAttachmentsSend }: {
    onSend: (text: string) => void;
    onReply: (text: string, activeMessage: TMessage) => void;
    onForward: (text: string) => void;
    onEdit: (id: string | undefined, text: string, cache_id: string) => void;
    onAttachmentsSend: (text: string, attachments: UserMedia[], isFile: boolean) => void;
}) => {
    messageText: string | null | undefined;
    mode: string;
    closeHeader: () => void;
    setMessageText: import("react").Dispatch<import("react").SetStateAction<string | null | undefined>>;
    handleSend: () => void;
    getHeaderTitle: () => string | undefined;
    getHeaderMsg: () => string | undefined;
    handleMultiselectForward: () => void;
    handleMultiselectDelete: () => void;
    handleAttach: () => void;
    activeMessage: TMessage | undefined;
};
