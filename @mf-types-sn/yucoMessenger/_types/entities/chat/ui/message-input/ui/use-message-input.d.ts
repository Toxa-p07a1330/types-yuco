import { MouseEventHandler } from 'react';
interface MessageInputProps {
    isEmpty: boolean;
    value: string | undefined | null;
    onInputChange: (val: string) => void;
    placeholder: string;
    onGifSelect: MouseEventHandler<HTMLImageElement>;
}
export declare const MessageInput: (props: MessageInputProps) => {
    input: import("react/jsx-runtime").JSX.Element;
    setFocus: () => void;
};
export {};
