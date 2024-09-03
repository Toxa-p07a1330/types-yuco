import { TMemberRole } from 'shared/types';
export declare const useMembersDetails: () => {
    addMembers: () => void;
    members: import("shared/types").TUserSelectionTag[];
    onAdjust: (id: string, role: TMemberRole) => Promise<void>;
    onRemove: (id: string) => Promise<void>;
    getMembersHandler: () => Promise<void>;
    isLoading: boolean;
};
