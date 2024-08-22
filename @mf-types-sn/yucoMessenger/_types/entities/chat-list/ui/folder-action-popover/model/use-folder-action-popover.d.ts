import { IAction } from 'shared/types';
import { IActiveFolder } from '../ui';
export declare const TAB_ACTIONS: {
    editFolder: string;
    addChats: string;
    readAll: string;
    remove: string;
};
export declare const useFolderActionPopover: ({ activeFolder }: {
    activeFolder: IActiveFolder | null;
}) => {
    getActions: () => void;
    actions: IAction[];
};
