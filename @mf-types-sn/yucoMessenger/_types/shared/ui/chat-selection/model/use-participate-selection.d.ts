import { RootState } from 'shared/lib';
import { TChatSelectionCard, TChatSelectionTag } from 'shared/types';
import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { TChatItem } from 'entities/chat/model/types';
export declare const useParticipateSelection: ({ selectCards, resetChats, setChats, onTagAction, onInputAction }: {
    selectCards: (state: RootState) => any;
    resetChats: ActionCreatorWithoutPayload<any>;
    setChats: ActionCreatorWithPayload<TChatItem[], any>;
    onTagAction: ActionCreatorWithPayload<TChatSelectionTag, any>;
    onInputAction: ActionCreatorWithoutPayload<any>;
}) => {
    searchUserHandler: (event: any) => void;
    tagCallback: (item: TChatSelectionTag) => void;
    cardCallback: (item: TChatSelectionCard) => void;
    onInputFocus: () => {
        payload: undefined;
        type: any;
    };
    setIsLoading: () => void;
    tags: TChatSelectionTag[];
    cards: TChatSelectionCard[];
    isLoading: boolean;
    searchChat: string;
    getFollowersCallback: (rewrite?: boolean, body?: any) => Promise<void>;
};
