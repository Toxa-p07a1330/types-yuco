import { TUserSelectionTag } from 'shared/types';
export declare const UseGroupChat: () => {
    setChatTitle: (event: any) => void;
    avatarUrl: string;
    chatHashName: string;
    chatTitle: string;
    members: TUserSelectionTag[];
    onRemove: (id: string) => void;
    onAdjust: (id: string) => void;
    getMembersHandler: () => Promise<void>;
};
