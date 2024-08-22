import { SyntheticEvent } from 'react';
import { TChatItem } from 'entities/chat/model';
export declare const useChatItem: ({ chatItem }: {
    chatItem: TChatItem;
}) => {
    onTouchEnd: () => void;
    onTouchMove: (event: SyntheticEvent) => void;
    onTouchStart: (event: SyntheticEvent) => void;
    goToChat: () => void;
    showControls: boolean;
    avatarUrl: string;
    callbacks: {
        switchPin: () => void;
        deleteChat: () => Promise<void>;
        switchMute: () => void;
        switchArchive: () => void;
    };
    getMessagePreview: () => string | false;
};
