import { Table } from 'dexie';
import { IPostDraft } from 'shared/db/yuco-storage/types';
export declare const PostDraftController: (table: Table<IPostDraft>) => {
    actions: {
        addDraft: (draft: IPostDraft) => Promise<any>;
        deleteDraft: (draftId: number) => Promise<number>;
        getDraft: (id: number) => Promise<IPostDraft | undefined>;
        getSortedDrafts: (created_at: string, limit: number) => Promise<IPostDraft[]>;
        updateDraft: (draft: IPostDraft) => Promise<any>;
    };
    hookManager: {
        subscribeDeletingAction: (callback: (primKey: string | number, obj: IPostDraft) => any) => () => void;
        subscribeUpdatingAction: (callback: (modifications: Object, primKey: string | number, obj: IPostDraft) => any) => () => void;
        subscribeReadingAction: (callback: (obj: IPostDraft) => any) => () => void;
        subscribeCreatingAction: (callback: (primKey: string | number, obj: IPostDraft) => void | import("dexie").IndexableType | undefined) => () => void;
    };
};
