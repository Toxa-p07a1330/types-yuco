import { UserMedia } from 'shared/types';
export type TMediaPool = {
    media: UserMedia[];
    initialized: boolean;
    filled: number;
};
type TAttachemntMenu = {
    checked: string[];
    picked: UserMedia | null;
    checkedMedia: UserMedia[];
    currentMedia: UserMedia[];
    nextMediaPool: TMediaPool;
    prevMediaPool: TMediaPool;
};
export declare const attachmentsMenuReducer: import("redux").Reducer<TAttachemntMenu, import("redux").AnyAction>;
export declare const setChecked: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "attachmentsMenu/setChecked">, resetChecked: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"attachmentsMenu/resetChecked">, removeNextMediaPoolFirstItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "attachmentsMenu/removeNextMediaPoolFirstItems">, removeNextMediaPoolLastItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "attachmentsMenu/removeNextMediaPoolLastItems">, removePrevMediaPoolLastItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "attachmentsMenu/removePrevMediaPoolLastItems">, removePrevMediaPoolFirstItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "attachmentsMenu/removePrevMediaPoolFirstItems">, addPrevMediaPoolFirstItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<UserMedia[], "attachmentsMenu/addPrevMediaPoolFirstItems">, addNextMediaPoolLastItems: import("@reduxjs/toolkit").ActionCreatorWithPayload<UserMedia[], "attachmentsMenu/addNextMediaPoolLastItems">, topDirectionScrollUpdate: import("@reduxjs/toolkit").ActionCreatorWithPayload<UserMedia[], "attachmentsMenu/topDirectionScrollUpdate">, bottomDirectionScrollUpdate: import("@reduxjs/toolkit").ActionCreatorWithPayload<UserMedia[], "attachmentsMenu/bottomDirectionScrollUpdate">, setPrevMediaPoolInitial: import("@reduxjs/toolkit").ActionCreatorWithPayload<UserMedia[], "attachmentsMenu/setPrevMediaPoolInitial">, setNextMediaPoolInitial: import("@reduxjs/toolkit").ActionCreatorWithPayload<UserMedia[], "attachmentsMenu/setNextMediaPoolInitial">, resetNextMediaPool: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"attachmentsMenu/resetNextMediaPool">, resetPrevMediaPool: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"attachmentsMenu/resetPrevMediaPool">, updatePrevPoolMedia: import("@reduxjs/toolkit").ActionCreatorWithPayload<UserMedia[], "attachmentsMenu/updatePrevPoolMedia">, updateNextPoolMedia: import("@reduxjs/toolkit").ActionCreatorWithPayload<UserMedia[], "attachmentsMenu/updateNextPoolMedia">, setCurrentFrame: import("@reduxjs/toolkit").ActionCreatorWithPayload<UserMedia[], "attachmentsMenu/setCurrentFrame">, setPicked: import("@reduxjs/toolkit").ActionCreatorWithPayload<UserMedia, "attachmentsMenu/setPicked">, resetPicked: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"attachmentsMenu/resetPicked">;
export {};
