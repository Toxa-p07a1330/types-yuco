/// <reference types="react" />
export declare const useAttachmentsMenu: () => {
    controls: {
        id: string;
        content: import("react/jsx-runtime").JSX.Element;
        selectedContent: import("react/jsx-runtime").JSX.Element;
    }[];
    setActive: import("react").Dispatch<import("react").SetStateAction<string>>;
    active: string;
    title: string | null;
    closeHandler: () => void;
};
