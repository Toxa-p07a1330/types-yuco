import { TMessage } from 'entities/chat/model/types';
import { RefObject } from 'react';
import { UserMedia } from 'shared/types';
export declare const Input: ({ onSend, onRecord, onAttach, onGifSelect, onEdit, inputContainerRef, onReply, onForward, onAttachmentsSend }: {
    onSend: (text: string) => void;
    onRecord: () => void;
    onAttach: () => void;
    onGifSelect: () => void;
    onReply: (text: string, activeMessage: TMessage) => void;
    onForward: (text: string) => void;
    onEdit: (id: string | undefined, text: string, cache_id: string) => void;
    inputContainerRef: RefObject<HTMLDivElement>;
    onAttachmentsSend: (text: string, attachments: UserMedia[], isFile: boolean) => void;
}) => import("react/jsx-runtime").JSX.Element;
