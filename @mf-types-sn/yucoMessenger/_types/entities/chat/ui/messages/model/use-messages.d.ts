/// <reference types="react" />
import { TMessage } from 'entities/chat/model/types';
export declare const useMessages: ({ messagesContainerRef }: {
    messagesContainerRef: any;
}) => {
    messages: TMessage[];
    updateReadMessages: (newReadMessageId: string) => void;
    handleTop: () => boolean;
    handleBottom: () => boolean;
    messagesCurrentFrame: TMessage[];
    inInitialFrame: boolean;
    transitionCallback: () => void;
    isFulfilled: boolean;
    chatId: string | undefined;
    scrollRef: import("react").RefObject<{
        scrollBottom(): void;
    }>;
    trackTransition: (val: boolean) => void;
    scrollerWrapper: HTMLDivElement | null;
    setScrollerWrapper: import("react").Dispatch<import("react").SetStateAction<HTMLDivElement | null>>;
    topLoading: boolean;
};
