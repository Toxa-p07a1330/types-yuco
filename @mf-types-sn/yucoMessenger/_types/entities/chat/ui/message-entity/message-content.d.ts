import type { Dispatch, SetStateAction } from 'react';
import { IActiveMessage, TMessage } from 'entities/chat/model/types';
interface IMessageContent {
    message: TMessage;
    isMyMessage: boolean;
    color?: string;
    maxWidth?: number;
    padding?: number;
    parentWidth: number;
    setActiveMessage?: Dispatch<SetStateAction<IActiveMessage | null>>;
    selectable: boolean;
}
export interface IMessageContentRef {
    showMessagePopover: () => void;
}
export declare const MessageContent: import("react").ForwardRefExoticComponent<IMessageContent & import("react").RefAttributes<IMessageContentRef>>;
export {};
