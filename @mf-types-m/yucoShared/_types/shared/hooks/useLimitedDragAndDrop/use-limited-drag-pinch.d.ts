import { RefObject } from 'react';
import { ITransformOptions } from 'entities/resize-pan-pinch/types';
interface IDragAndDropHook {
    blockElementRef: RefObject<HTMLElement>;
    withPinch: boolean;
    catchReset: any;
    zoomMinLimit: number;
    disable?: boolean;
    isSingleTouchDragAvailable?: boolean;
    initPosition?: ITransformOptions;
}
export declare const useLimitedDragAndDrop: ({ blockElementRef, withPinch, catchReset, zoomMinLimit, disable, isSingleTouchDragAvailable, initPosition }: IDragAndDropHook) => {
    style: {
        scale: import("@react-spring/core").SpringValue<number>;
        x: import("@react-spring/core").SpringValue<number>;
        y: import("@react-spring/core").SpringValue<number>;
    };
    api: import("@react-spring/core").SpringRef<{
        scale: number;
        x: number;
        y: number;
    }>;
};
export {};
