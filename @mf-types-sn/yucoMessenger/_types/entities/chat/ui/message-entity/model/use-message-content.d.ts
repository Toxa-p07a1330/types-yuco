import { TMessage } from 'entities/chat/model/types';
import { CurrentEmojiType } from 'entities/chat/ui/message-entity/types';
import { IAttachmentMedia } from 'shared/types';
export declare const useMessageContent: ({ message, isMyMessage }: {
    message: TMessage;
    isMyMessage: boolean;
}) => {
    replyAttachment: IAttachmentMedia | undefined;
    icon: any;
    storySender: {
        id: string;
        username: string;
        avatarUrl: string;
    } | undefined;
    storyReplySender: {
        id: string;
        username: string;
        avatarUrl: string;
    } | undefined;
    currentEmojis: CurrentEmojiType[];
    getMessageHeaderContent: () => string | undefined;
    markObjectAsExpired: (val: boolean) => void;
    markSourceObjectAsExpired: (val: boolean) => void;
};
