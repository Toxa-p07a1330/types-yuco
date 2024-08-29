import { PopoverLimits } from 'shared/ui/popover/model/types';
import { IActiveFolder } from '../../folder-action-popover';
export declare const FolderPopoverLayout: ({ onDismiss, onActionPerform, limits, tabsWrapperRef, popoverLayoutOpen }: {
    limits?: PopoverLimits | undefined;
    onDismiss?: (() => void) | undefined;
    onActionPerform: () => void;
    tabsWrapperRef: IActiveFolder | null;
    popoverLayoutOpen: boolean;
}) => import("react/jsx-runtime").JSX.Element;
