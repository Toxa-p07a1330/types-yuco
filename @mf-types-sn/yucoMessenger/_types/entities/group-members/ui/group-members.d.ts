/// <reference types="react" />
import { TMemberRole } from 'shared/types';
interface IGroupMembers {
    members: any;
    onRemove: (id: string) => void;
    onAdjust: (id: string, role: TMemberRole) => void;
    scrollable?: boolean;
    addMembers: () => void;
    membersHeight: number;
    getMembersHandler: () => Promise<void>;
    isLoading: boolean;
}
export declare const GroupMembers: import("react").ForwardRefExoticComponent<IGroupMembers & import("react").RefAttributes<HTMLDivElement>>;
export {};
