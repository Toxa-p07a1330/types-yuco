import { IActiveMessage } from 'entities/chat/model/types';
interface IAction {
    name: string;
    icon?: string;
    callback?: (value?: any) => void;
}
export declare const useMessageDeletePopover: ({ activeMessage }: {
    activeMessage: IActiveMessage | null;
}) => {
    getActions: () => void;
    actions: IAction[];
};
export {};
