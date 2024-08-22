/// <reference types="react" />
import '../ui/custom.css';
import { TUserSelectionTag } from 'shared/types';
import { TMemberAlertState, TMembersAlertContent } from './types';
import { FriendlyRole } from 'mf-types/yucoShared/_types/generated-api/messenger/model/friendly-role';
export declare const useGroupMembers: ({ members, onRemove, onAdjust }: {
    members: TUserSelectionTag[];
    onRemove: (id: string) => void;
    onAdjust: (id: string, role: FriendlyRole) => void;
}) => {
    setAcceptOpen: import("react").Dispatch<import("react").SetStateAction<TMemberAlertState>>;
    canAdjustMember: (item: TUserSelectionTag) => boolean;
    canRemoveMember: (item: TUserSelectionTag) => boolean;
    canEditMembers: boolean;
    isAcceptOpen: TMemberAlertState;
    findUserName: (id: string | undefined) => string;
    alertContent: TMembersAlertContent;
};
