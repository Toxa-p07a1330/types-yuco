export declare const localStore: {
    createReducer: () => import("redux").Reducer<import("redux").CombinedState<{
        centrifuge: import("../entities/centrifuge/types").ICentrifugeStore;
        chatList: import("../entities").ChatListType;
        messengerSettings: {
            users: import("../shared/types").TUserSelectionItem[];
            neverShareWithCards: import("../shared/types").TUserSelectionCard[];
            neverShareWithTags: import("../shared/types").TUserSelectionTag[];
            neverShareWithTagsTemp: import("../shared/types").TUserSelectionTag[];
            blockedCards: import("../shared/types").TUserSelectionCard[];
            blockedTags: import("../shared/types").TUserSelectionTag[];
            blockedTagsTemp: import("../shared/types").TUserSelectionTag[];
            onlineVisibility: import("../features/settings/last-seen/model").TMessengerSettingsLastSeenItem[];
        };
        chat: import("../entities").IChatState;
        groupChat: {
            users: import("../shared/types").TUserSelectionItem[];
            cards: import("../shared/types").TUserSelectionCard[];
            tags: import("../shared/types").TUserSelectionTag[];
            title: string;
            hash_name: string;
        };
        messagesFrames: {
            initialFrame: import("../entities").TMessage[];
            currentFrame: import("../entities").TMessage[];
            nextMessagesPool: import("../entities").TMessagePool;
            prevMessagesPool: import("../entities").TMessagePool;
        };
        attachmentsMenu: {
            checked: string[];
            picked: import("../shared/types").UserMedia | null;
            checkedMedia: import("../shared/types").UserMedia[];
            currentMedia: import("../shared/types").UserMedia[];
            nextMediaPool: import("entities/attachments-menu/model/store").TMediaPool;
            prevMediaPool: import("entities/attachments-menu/model/store").TMediaPool;
        };
        measureMessages: {
            messagesToMeasure: import("../entities").TMessage[];
        };
    }>, import("redux").AnyAction>;
    createStore: () => import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<import("redux").EmptyObject & {
        centrifuge: import("../entities/centrifuge/types").ICentrifugeStore;
        chatList: import("../entities").ChatListType;
        messengerSettings: {
            users: import("../shared/types").TUserSelectionItem[];
            neverShareWithCards: import("../shared/types").TUserSelectionCard[];
            neverShareWithTags: import("../shared/types").TUserSelectionTag[];
            neverShareWithTagsTemp: import("../shared/types").TUserSelectionTag[];
            blockedCards: import("../shared/types").TUserSelectionCard[];
            blockedTags: import("../shared/types").TUserSelectionTag[];
            blockedTagsTemp: import("../shared/types").TUserSelectionTag[];
            onlineVisibility: import("../features/settings/last-seen/model").TMessengerSettingsLastSeenItem[];
        };
        chat: import("../entities").IChatState;
        groupChat: {
            users: import("../shared/types").TUserSelectionItem[];
            cards: import("../shared/types").TUserSelectionCard[];
            tags: import("../shared/types").TUserSelectionTag[];
            title: string;
            hash_name: string;
        };
        messagesFrames: {
            initialFrame: import("../entities").TMessage[];
            currentFrame: import("../entities").TMessage[];
            nextMessagesPool: import("../entities").TMessagePool;
            prevMessagesPool: import("../entities").TMessagePool;
        };
        attachmentsMenu: {
            checked: string[];
            picked: import("../shared/types").UserMedia | null;
            checkedMedia: import("../shared/types").UserMedia[];
            currentMedia: import("../shared/types").UserMedia[];
            nextMediaPool: import("entities/attachments-menu/model/store").TMediaPool;
            prevMediaPool: import("entities/attachments-menu/model/store").TMediaPool;
        };
        measureMessages: {
            messagesToMeasure: import("../entities").TMessage[];
        };
    }, import("redux").AnyAction, any>;
    reducers: {
        centrifuge: import("redux").Reducer<import("../entities/centrifuge/types").ICentrifugeStore, import("redux").AnyAction>;
        chatList: import("redux").Reducer<import("../entities").ChatListType, import("redux").AnyAction>;
        messengerSettings: import("redux").Reducer<{
            users: import("../shared/types").TUserSelectionItem[];
            neverShareWithCards: import("../shared/types").TUserSelectionCard[];
            neverShareWithTags: import("../shared/types").TUserSelectionTag[];
            neverShareWithTagsTemp: import("../shared/types").TUserSelectionTag[];
            blockedCards: import("../shared/types").TUserSelectionCard[];
            blockedTags: import("../shared/types").TUserSelectionTag[];
            blockedTagsTemp: import("../shared/types").TUserSelectionTag[];
            onlineVisibility: import("../features/settings/last-seen/model").TMessengerSettingsLastSeenItem[];
        }, import("redux").AnyAction>;
        chat: import("redux").Reducer<import("../entities").IChatState, import("redux").AnyAction>;
        groupChat: import("redux").Reducer<{
            users: import("../shared/types").TUserSelectionItem[];
            cards: import("../shared/types").TUserSelectionCard[];
            tags: import("../shared/types").TUserSelectionTag[];
            title: string;
            hash_name: string;
        }, import("redux").AnyAction>;
        messagesFrames: import("redux").Reducer<{
            initialFrame: import("../entities").TMessage[];
            currentFrame: import("../entities").TMessage[];
            nextMessagesPool: import("../entities").TMessagePool;
            prevMessagesPool: import("../entities").TMessagePool;
        }, import("redux").AnyAction>;
        attachmentsMenu: import("redux").Reducer<{
            checked: string[];
            picked: import("../shared/types").UserMedia | null;
            checkedMedia: import("../shared/types").UserMedia[];
            currentMedia: import("../shared/types").UserMedia[];
            nextMediaPool: import("entities/attachments-menu/model/store").TMediaPool;
            prevMediaPool: import("entities/attachments-menu/model/store").TMediaPool;
        }, import("redux").AnyAction>;
        measureMessages: import("redux").Reducer<{
            messagesToMeasure: import("../entities").TMessage[];
        }, import("redux").AnyAction>;
    };
    tempReducers: {
        chat: import("redux").Reducer<import("../entities").IChatState, import("redux").AnyAction>;
        groupChat: import("redux").Reducer<{
            users: import("../shared/types").TUserSelectionItem[];
            cards: import("../shared/types").TUserSelectionCard[];
            tags: import("../shared/types").TUserSelectionTag[];
            title: string;
            hash_name: string;
        }, import("redux").AnyAction>;
        messagesFrames: import("redux").Reducer<{
            initialFrame: import("../entities").TMessage[];
            currentFrame: import("../entities").TMessage[];
            nextMessagesPool: import("../entities").TMessagePool;
            prevMessagesPool: import("../entities").TMessagePool;
        }, import("redux").AnyAction>;
        attachmentsMenu: import("redux").Reducer<{
            checked: string[];
            picked: import("../shared/types").UserMedia | null;
            checkedMedia: import("../shared/types").UserMedia[];
            currentMedia: import("../shared/types").UserMedia[];
            nextMediaPool: import("entities/attachments-menu/model/store").TMediaPool;
            prevMediaPool: import("entities/attachments-menu/model/store").TMediaPool;
        }, import("redux").AnyAction>;
        measureMessages: import("redux").Reducer<{
            messagesToMeasure: import("../entities").TMessage[];
        }, import("redux").AnyAction>;
    };
};
