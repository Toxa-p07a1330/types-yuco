/// <reference types="react" />
export type Position = 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right' | 'top-center' | 'top-right-justify' | "top-left-justify";
export type Rect = Pick<DOMRect, 'left' | 'top' | 'bottom' | 'height' | 'width'>;
export type PopoverLimits = {
    top: number;
    bottom: number;
    left?: number;
    right?: number;
};
export interface IPopover {
    children: React.ReactNode;
    isOpen: boolean;
    triggerRect: Rect | undefined;
    position?: Position;
    limits?: PopoverLimits;
    onDismiss?: () => void;
    onActionPerform?: () => void;
    setPopoverRect?: (val: DOMRect) => void;
}
