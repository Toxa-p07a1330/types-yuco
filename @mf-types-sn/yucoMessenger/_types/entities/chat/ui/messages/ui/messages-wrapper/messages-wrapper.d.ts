import { Dispatch, SetStateAction } from 'react';
import { IActiveMessage, TMessage } from 'entities/chat/model/types';
export declare const MessagesWrapper: ({ frame, setActiveMessage, updateReadMessages }: {
    frame: TMessage[];
    setActiveMessage: Dispatch<SetStateAction<IActiveMessage | null>>;
    updateReadMessages: (newReadMessageId: string) => void;
}) => import("react/jsx-runtime").JSX.Element;
