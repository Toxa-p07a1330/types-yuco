import { TChatItem } from 'entities/chat/model/types';
export declare const useDeleteChatModal: (chatItem: TChatItem, id: string) => {
    handleClickDeleteForMe: () => void;
    handleClickCancel: () => void;
    handleClickDeleteForAll: () => void;
};
