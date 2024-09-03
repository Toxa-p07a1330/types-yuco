import { ReactNode } from 'react';
export interface IResizePanPinchArgs {
    children: ReactNode;
    containerHeight: string;
    pinchMode?: TPinchMode;
    withSelectionIndicator?: boolean;
    panPinchSize?: IPanPinchSize;
    disable?: boolean;
    isSquare?: boolean;
    filter?: TFilterName;
    childrenInitDim: ISize;
    resetTrigger?: any;
    objectFit?: TObjectFitOptions;
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
export declare const PinchMode: {
    readonly COMMON: "common";
    readonly BORDERS_ALLOWED: "bordersAllowed";
};
export type TPinchMode = (typeof PinchMode)[keyof typeof PinchMode];
export declare const ObjectFitOptions: {
    readonly contain: "contain";
    readonly cover: "cover";
};
export type TObjectFitOptions = (typeof ObjectFitOptions)[keyof typeof ObjectFitOptions];
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
