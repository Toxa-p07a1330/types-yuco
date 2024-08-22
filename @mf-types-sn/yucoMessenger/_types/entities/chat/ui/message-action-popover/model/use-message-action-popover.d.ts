import { IAction } from 'shared/types';
import { IActiveMessage } from 'entities/chat/model/types';
export declare const useMessageActionPopover: ({ activeMessage }: {
    activeMessage: IActiveMessage | null;
}) => {
    getActions: () => void;
    actions: IAction[];
};
