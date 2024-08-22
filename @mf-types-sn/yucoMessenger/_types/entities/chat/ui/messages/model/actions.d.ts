export declare const deleteFromMessageFrames: import("@reduxjs/toolkit").AsyncThunk<void | null, {
    chat_uuid: string;
    cache_id: string;
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
