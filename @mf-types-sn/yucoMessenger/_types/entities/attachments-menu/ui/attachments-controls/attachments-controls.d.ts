import { Dispatch, SetStateAction } from 'react';
export declare const AttachmentsControls: ({ controls, setActive, active, showControls, onAttachmentsSendHandler, setMessageText, messageText }: {
    controls: any;
    setActive: (val: string) => void;
    active?: string | undefined;
    showControls: boolean;
    onAttachmentsSendHandler: (val: any) => any;
    setMessageText: Dispatch<SetStateAction<string | undefined>>;
    messageText: string | undefined;
}) => import("react/jsx-runtime").JSX.Element;
