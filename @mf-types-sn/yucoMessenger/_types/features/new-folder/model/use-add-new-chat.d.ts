export declare const useAddNewChat: () => {
    onInputFocus: () => {
        payload: undefined;
        type: any;
    };
    tags: import("../../../shared/types").TChatSelectionTag[];
    cards: import("../../../shared/types").TChatSelectionCard[];
    tagCallback: (item: import("../../../shared/types").TChatSelectionTag) => void;
    cardCallback: (item: import("../../../shared/types").TChatSelectionCard) => void;
    searchChat: string;
    searchUserHandler: (event: any) => Promise<void>;
    getFollowersCallback: (rewrite?: boolean, body?: any) => Promise<void>;
    isLoading: boolean;
    getScrollOffset: () => number;
};
