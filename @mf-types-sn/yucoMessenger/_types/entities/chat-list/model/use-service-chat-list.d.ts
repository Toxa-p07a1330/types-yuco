import { Chat } from 'mf-types/yucoShared/_types/generated-api/messenger/model';
export declare const useServiceChatList: () => {
    createDialogAction: ({ members, type, title, icon_hashname }: {
        members: Array<any>;
        type: Chat;
        title?: string | undefined;
        icon_hashname?: string | undefined;
    }) => Promise<import("mf-types/yucoShared/_types/generated-api/messenger/model").MSChatBase>;
    fetchDialogAction: <IParam, Error_1>(params: {
        offset?: string;
        limit?: number;
        init_cache_messages?: boolean;
    }) => Promise<import("mf-types/yucoShared/_types/generated-api/messenger/model").MSChatList>;
    getDialogAction: (account_id: string) => Promise<import("mf-types/yucoShared/_types/generated-api/messenger/model").MSFullChat>;
    fetchInitDialogs: import("@reduxjs/toolkit").AsyncThunk<void | null, {
        offset?: string | undefined;
        limit?: number | undefined;
        init_cache_messages: boolean;
    }, {
        state?: unknown;
        dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
        extra?: unknown;
        rejectValue?: unknown;
        serializedErrorType?: unknown;
        pendingMeta?: unknown;
        fulfilledMeta?: unknown;
        rejectedMeta?: unknown;
    }>;
    fetchDialogs: import("@reduxjs/toolkit").AsyncThunk<void | null, {
        offset?: string | undefined;
        limit?: number | undefined;
        init_cache_messages?: boolean | undefined;
    }, {
        state?: unknown;
        dispatch?: import("redux").Dispatch<import("redux").AnyAction> | undefined;
        extra?: unknown;
        rejectValue?: unknown;
        serializedErrorType?: unknown;
        pendingMeta?: unknown;
        fulfilledMeta?: unknown;
        rejectedMeta?: unknown;
    }>;
};
