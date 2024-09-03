/// <reference types="react" />
import '../ui/custom.css';
import { TMemberRole, TUserSelectionTag } from 'shared/types';
import { TMemberAlertState, TMembersAlertContent } from './types';
export declare const useGroupMembers: ({ members, onRemove, onAdjust }: {
    members: TUserSelectionTag[];
    onRemove: (id: string) => void;
    onAdjust: (id: string, role: TMemberRole) => void;
}) => {
    setAcceptOpen: import("react").Dispatch<import("react").SetStateAction<TMemberAlertState>>;
    canAdjustMember: (item: TUserSelectionTag) => boolean;
    canRemoveMember: (item: TUserSelectionTag) => boolean;
    canEditMembers: boolean;
    isAcceptOpen: TMemberAlertState;
    findUserName: (id: string | undefined) => string;
    alertContent: TMembersAlertContent;
};
