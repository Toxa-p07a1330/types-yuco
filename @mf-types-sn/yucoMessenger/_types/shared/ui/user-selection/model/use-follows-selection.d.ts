/// <reference types="react" />
import { RootState } from "shared/lib";
import { TUserSelectionCard, TUserSelectionItem, TUserSelectionTag } from "shared/types";
import { ActionCreatorWithPayload, ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
export declare const useFollowsSelection: ({ selectTags, selectCards, selectUsers, resetUsers, setUsers, onTagAction, onCardAction, onInputAction }: {
    selectTags: (state: RootState) => any;
    selectCards: (state: RootState) => any;
    selectUsers: (state: RootState) => any;
    resetUsers: ActionCreatorWithoutPayload<any>;
    setUsers: ActionCreatorWithPayload<TUserSelectionItem[], any>;
    onTagAction: ActionCreatorWithPayload<TUserSelectionTag, any>;
    onCardAction: ActionCreatorWithPayload<TUserSelectionCard, any>;
    onInputAction: ActionCreatorWithoutPayload<any>;
}) => {
    searchUserHandler: (event: any) => void;
    tagCallback: (item: TUserSelectionTag) => void;
    cardCallback: (item: TUserSelectionCard) => void;
    onInputFocus: () => {
        payload: undefined;
        type: any;
    };
    setIsLoading: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    tags: any;
    cards: any;
    isLoading: boolean;
    searchUser: string;
    getFollowersCallback: (rewrite?: boolean, body?: any) => Promise<void>;
    isFollowersLoading: boolean;
};
