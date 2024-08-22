import { Dispatch, SetStateAction } from 'react';
import { IActiveMessage, TMessage } from 'entities/chat/model/types';
interface IMessage {
    message: TMessage;
    setActiveMessage: Dispatch<SetStateAction<IActiveMessage | null>>;
    selectable: boolean;
    updateReadMessages: (updateReadMessages: string) => void;
    parentWidth: number;
}
export declare const Message: import("react").MemoExoticComponent<({ message, setActiveMessage, selectable, updateReadMessages, parentWidth }: IMessage) => import("react/jsx-runtime").JSX.Element>;
export {};
