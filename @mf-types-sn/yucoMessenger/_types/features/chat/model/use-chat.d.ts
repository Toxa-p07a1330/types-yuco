/// <reference types="react" />
import { IActiveMessage } from 'entities/chat/model/types';
import { UserMedia } from 'shared/types';
export declare const UseChat: () => {
    onSend: (text: string) => Promise<void>;
    onRecord: () => void;
    onAttach: () => void;
    onGifSelect: () => void;
    onEdit: (messageId: string | undefined, text: string, cache_id: string) => Promise<void>;
    onReply: (text: string, replyingMessage: any) => Promise<void>;
    onForward: (text: string) => Promise<void>;
    messagesContainerRef: import("react").RefObject<HTMLDivElement>;
    inputContainerRef: import("react").RefObject<HTMLDivElement>;
    popoverBottomOffset: number;
    actionsPopoverOpen: boolean;
    setActiveMessage: import("react").Dispatch<import("react").SetStateAction<IActiveMessage | null>>;
    activeMessage: IActiveMessage | null;
    bottomOffset: number;
    onPopoverDismiss: () => void;
    popoverLayoutOpen: boolean;
    onActionPerform: () => void;
    onAttachmentsSend: (text: string, attachments: UserMedia[], isFile: boolean) => Promise<void>;
    chatItem: import("entities/chat/model/types").TChatItem | undefined;
};
