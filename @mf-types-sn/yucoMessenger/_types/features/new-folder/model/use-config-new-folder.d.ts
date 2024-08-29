export declare const useConfigNewFolder: () => {
    folderTitle: string;
    chat_list: import("i18next").TFunction<string, undefined, string>;
    addClickHandler: () => void;
    getChatsHandler: () => void;
    scrollHeight: number;
    setButtonRefHandler: (node: HTMLDivElement) => void;
    selectedChats: import("shared/types").TChatSelectionItem[];
    isLoading: boolean;
    onIonChange: (e: any) => void;
    buttonColor: string;
    isEditMode: boolean;
};
