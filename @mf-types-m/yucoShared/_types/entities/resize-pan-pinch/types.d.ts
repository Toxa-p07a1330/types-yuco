import { ReactNode } from 'react';
export interface IResizePanPinchArgs {
    children: ReactNode;
    containerHeight: string;
    pinchMode?: PinchMode;
    withSelectionIndicator?: boolean;
    panPinchSize?: IPanPinchSize;
    disable?: boolean;
    isSquare?: boolean;
    filter?: TFilterName;
    childrenInitDim: ISize;
    resetTrigger?: any;
    objectFit?: ObjectFitOptions;
    hideOverflow?: boolean;
    isSingleTouchDragAvailable?: boolean;
}
export interface ITransformOptions {
    x: number;
    y: number;
    scale: number;
}
import { TFilterName } from 'shared/constants/filters';
export declare enum Orientation {
    SQUARE = "square",
    LANDSCAPE = "landscape",
    PORTRAIT = "portrait"
}
export declare enum PinchMode {
    COMMON = "common",
    BORDERS_ALLOWED = "bordersAllowed"
}
export declare enum ObjectFitOptions {
    contain = "contain",
    cover = "cover"
}
export interface ISize {
    height: number;
    width: number;
}
export interface IPanPinchSize {
    height: number;
    width: number;
}
export declare enum ExportImageType {
    URL = "url",
    BASE_64 = "base64"
}
