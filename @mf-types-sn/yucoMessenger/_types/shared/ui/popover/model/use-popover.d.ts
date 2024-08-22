import { ForwardedRef } from 'react';
import { Position, Rect } from './types';
export declare const usePopover: ({ ref, isOpen, onDismiss, triggerRect, position, setPopoverRect, getPopoverCoords, onActionPerform }: {
    ref: ForwardedRef<HTMLDivElement>;
    isOpen: boolean;
    position?: Position | undefined;
    onDismiss?: (() => void) | undefined;
    triggerRect?: Rect | undefined;
    getPopoverCoords: (triggerRect: Rect, popoverRect: Rect, position: Position) => {
        top: number;
        left: number;
    };
    setPopoverRect?: ((value: DOMRect) => void) | undefined;
    onActionPerform?: (() => void) | undefined;
}) => {
    inputRef: import("react").MutableRefObject<HTMLDivElement | null>;
    coords: {
        top: number;
        left: number;
    };
    isPopoverReadyToDisplay: boolean;
    isPopoverTriggered: boolean;
    setIsPopoverTriggered: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
