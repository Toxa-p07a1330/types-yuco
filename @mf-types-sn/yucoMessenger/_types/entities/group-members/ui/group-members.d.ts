/// <reference types="react" />
import { FriendlyRole } from 'mf-types/yucoShared/_types/generated-api/messenger/model';
interface IGroupMembers {
    members: any;
    onRemove: (id: string) => void;
    onAdjust: (id: string, role: FriendlyRole) => void;
    scrollable?: boolean;
    addMembers: () => void;
    membersHeight: number;
    getMembersHandler: () => Promise<void>;
    isLoading: boolean;
}
export declare const GroupMembers: import("react").ForwardRefExoticComponent<IGroupMembers & import("react").RefAttributes<HTMLDivElement>>;
export {};
