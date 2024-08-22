import { FriendlyRole } from 'mf-types/yucoShared/_types/generated-api/messenger/model/friendly-role';
export declare const useMembersDetails: () => {
    addMembers: () => void;
    members: import("shared/types").TUserSelectionTag[];
    onAdjust: (id: string, role: FriendlyRole) => Promise<void>;
    onRemove: (id: string) => Promise<void>;
    getMembersHandler: () => Promise<void>;
    isLoading: boolean;
};
