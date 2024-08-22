import { Table } from 'dexie';
import { TTableHookMap } from 'shared/db/yuco-storage/types';
export declare const HookManagerFactory: <TableType>(table: Table<TableType, any, TableType>) => {
    subscribeDeletingAction: (callback: (primKey: string | number, obj: TableType) => any) => () => void;
    subscribeUpdatingAction: (callback: (modifications: Object, primKey: string | number, obj: TableType) => any) => () => void;
    subscribeReadingAction: (callback: (obj: TableType) => any) => () => void;
    subscribeCreatingAction: (callback: (primKey: string | number, obj: TableType) => void | import("dexie").IndexableType | undefined) => () => void;
};
