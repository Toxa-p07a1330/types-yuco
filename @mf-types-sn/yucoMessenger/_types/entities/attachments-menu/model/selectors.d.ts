import { RootState } from 'shared/lib/store';
import { UserMedia } from 'shared/types';
export declare const selectMedia: (state: RootState) => UserMedia[];
export declare const selectPicked: (state: RootState) => UserMedia | null;
export declare const selectChecked: (state: RootState) => string[];
export declare const selectCurrentFrame: (state: RootState) => UserMedia[];
export declare const selectNextMediaPool: (state: RootState) => import("./store").TMediaPool;
export declare const selectPrevMediaPool: (state: RootState) => import("./store").TMediaPool;
export declare const selectCheckedMedia: (state: RootState) => UserMedia[];
