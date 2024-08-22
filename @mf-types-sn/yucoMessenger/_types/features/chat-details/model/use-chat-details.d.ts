import { SyntheticEvent } from 'react';
import { InputCustomEvent } from '@ionic/react';
import { TUserSelectionCard, TUserSelectionTag } from 'shared/types';
export declare const useChatDetails: () => {
    avatarUrl: string;
    tabsLayout: import("react/jsx-runtime").JSX.Element;
    currentTab: string;
    tagCallback: (item: TUserSelectionTag) => void;
    cardCallback: (item: TUserSelectionCard) => void;
    onInputFocus: () => {
        payload: undefined;
        type: any;
    };
    setIsLoading: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    searchUserHandler: (event: any) => void;
    getFollowersCallback: (rewrite?: boolean, body?: any) => Promise<void>;
    tags: TUserSelectionTag[];
    cards: TUserSelectionCard[];
    isLoading: boolean;
    searchUser: string;
    isFollowersLoading: boolean;
    setChatTitle: (event: InputCustomEvent) => void;
    editPhoto: (nash_name: string) => Promise<void>;
    role: import("shared/types").TMemberRole | undefined;
    onTitleClick: () => (e: SyntheticEvent) => Promise<void>;
};
