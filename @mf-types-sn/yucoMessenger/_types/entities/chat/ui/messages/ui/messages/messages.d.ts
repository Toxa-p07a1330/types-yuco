import { RefObject, Dispatch, SetStateAction } from 'react';
import { IActiveMessage } from 'entities/chat/model';
export declare const Messages: ({ messagesContainerRef, setActiveMessage, activeMessage }: {
    messagesContainerRef: RefObject<HTMLDivElement>;
    setActiveMessage: Dispatch<SetStateAction<IActiveMessage | null>>;
    activeMessage: IActiveMessage | null;
}) => import("react/jsx-runtime").JSX.Element;
