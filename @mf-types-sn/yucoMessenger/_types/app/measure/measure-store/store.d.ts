import { TMessage } from 'entities/chat/model/types';
type TMeasureMessage = {
    messagesToMeasure: TMessage[];
};
export declare const measureMessagesReducer: import("redux").Reducer<TMeasureMessage, import("redux").AnyAction>;
export declare const removeMeasureMessage: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "measureMessages/removeMeasureMessage">, pushMeasureMessage: import("@reduxjs/toolkit").ActionCreatorWithPayload<TMessage, "measureMessages/pushMeasureMessage">;
export {};
