import { TMessage, TMessagePool } from 'entities/chat/model/types';
type TMessageFrames = {
    initialFrame: TMessage[];
    currentFrame: TMessage[];
    nextMessagesPool: TMessagePool;
    prevMessagesPool: TMessagePool;
};
export declare const messagesFramesReducer: import("redux").Reducer<TMessageFrames, import("redux").AnyAction>;
export declare const setCurrentFrame: import("@reduxjs/toolkit").ActionCreatorWithPayload<TMessage[], "messagesFrames/setCurrentFrame">, removeNextMessagesPoolFirstItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "messagesFrames/removeNextMessagesPoolFirstItems">, removeNextMessagesPoolLastItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "messagesFrames/removeNextMessagesPoolLastItems">, removePrevMessagesPoolLastItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "messagesFrames/removePrevMessagesPoolLastItems">, addPrevMessagesPoolFirstItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<TMessage[], "messagesFrames/addPrevMessagesPoolFirstItems">, bottomDirectionScrollUpdate: import("@reduxjs/toolkit").ActionCreatorWithPayload<TMessage[], "messagesFrames/bottomDirectionScrollUpdate">, topDirectionScrollUpdate: import("@reduxjs/toolkit").ActionCreatorWithPayload<TMessage[], "messagesFrames/topDirectionScrollUpdate">, addNextMessagesPoolLastItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<TMessage[], "messagesFrames/addNextMessagesPoolLastItems">, removePrevMessagesPoolFirstItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "messagesFrames/removePrevMessagesPoolFirstItems">, setNextMessagesPoolInitial: import("@reduxjs/toolkit").ActionCreatorWithPayload<TMessage[], "messagesFrames/setNextMessagesPoolInitial">, setPrevMessagesPoolInitial: import("@reduxjs/toolkit").ActionCreatorWithPayload<TMessage[], "messagesFrames/setPrevMessagesPoolInitial">, resetNextMessagesPool: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"messagesFrames/resetNextMessagesPool">, resetPrevMessagesPool: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"messagesFrames/resetPrevMessagesPool">, addFetchedNextMessagesPoolLastItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<TMessage[], "messagesFrames/addFetchedNextMessagesPoolLastItems">, updatePrevPoolMessages: import("@reduxjs/toolkit").ActionCreatorWithPayload<TMessage[], "messagesFrames/updatePrevPoolMessages">, updateNextPoolMessages: import("@reduxjs/toolkit").ActionCreatorWithPayload<TMessage[], "messagesFrames/updateNextPoolMessages">, setInitialFrame: import("@reduxjs/toolkit").ActionCreatorWithPayload<TMessage[], "messagesFrames/setInitialFrame">, insertInInitialFrame: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    message: TMessage;
    limit: number;
}, "messagesFrames/insertInInitialFrame">, updateFrames: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    modify: Object;
    cache_id: string;
}, "messagesFrames/updateFrames">, insertInCurrentFrame: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    message: TMessage;
    limit: number;
}, "messagesFrames/insertInCurrentFrame">;
export {};
