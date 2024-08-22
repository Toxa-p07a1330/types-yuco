/// <reference types="react" />
import 'context-filter-polyfill/dist/index.js';
import { IResizePanPinchArgs, ISize, Orientation } from '../types';
export declare const ResizePanPinch: import("react").ForwardRefExoticComponent<IResizePanPinchArgs & import("react").RefAttributes<{
    getVisibleBlockSize: () => ISize;
    minimizeScale: () => void;
    resetScale: () => void;
    getOrientation: () => Orientation;
    getLimit: () => ISize | undefined;
    getTransformScale: () => number;
    getStyle: () => any;
}>>;
