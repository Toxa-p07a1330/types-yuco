import { IActiveMessage } from 'entities/chat/model';
import { PopoverLimits } from 'shared/ui/popover/model/types';
export declare const ChatPopoverLayout: ({ onDismiss, onActionPerform, limits, activeMessage, popoverLayoutOpen }: {
    actionsPopoverOpen: boolean;
    limits?: PopoverLimits | undefined;
    onDismiss?: (() => void) | undefined;
    onActionPerform: () => void;
    activeMessage: IActiveMessage | null;
    popoverLayoutOpen: boolean;
}) => import("react/jsx-runtime").JSX.Element;
