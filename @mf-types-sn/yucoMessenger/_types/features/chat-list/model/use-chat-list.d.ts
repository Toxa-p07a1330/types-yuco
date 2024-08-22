/// <reference types="react" />
import { TChatItem } from 'entities/chat/model/types';
export declare const useChatList: () => {
    tabsLayout: import("react/jsx-runtime").JSX.Element;
    chat_list: import("i18next").TFunction<string, undefined, string>;
    currentTab: string;
    setContainerElementHandler: (node: HTMLDivElement) => void;
    height: number;
    currentTabChats: TChatItem[];
    isLoading: boolean;
    archivedChatsListData: TChatItem[];
    fetchDialogs: (isInit: boolean) => () => void;
    activeTabTitleRef: import("react").RefObject<HTMLDivElement>;
    popoverLayoutOpen: boolean;
    dismissHandler: () => void;
    searchChangeHandler: (value: string) => Promise<void>;
};
