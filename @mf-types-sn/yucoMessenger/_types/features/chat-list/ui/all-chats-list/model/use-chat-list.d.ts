import { TChatItem } from 'entities/chat/model/types';
export declare const UseChatList: () => {
    chatsListData: TChatItem[];
    archivedChatsListData: TChatItem[];
    isLoading: boolean;
    fetchDialogs: (isInit: boolean) => () => void;
};
