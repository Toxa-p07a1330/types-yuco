import { TChatItem } from 'entities/chat/model/types';
export declare const UseChatList: () => {
    chatsListData: TChatItem[];
    archivedChatsListData: never[];
    isLoading: boolean;
    fetchDialogs: (isInit: boolean) => () => void;
    setIsLoading: (value: boolean) => void;
};
