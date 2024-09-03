import { TFilterName } from 'shared/constants/filters';
import { IPanPinchSize, ITransformOptions, TObjectFitOptions, TPinchMode } from '../resize-pan-pinch/types';
import { IDraggableImage } from 'shared/types/image.type';
export declare const LANDSCAPE_IMAGE_MAX_SCALE: number;
export declare const PORTRAIT_IMAGE_MIN_SCALE: number;
export interface IResizeImagePanPinchArgs {
    image: IDraggableImage | null;
    height?: string;
    pinchMode?: TPinchMode;
    withSelectionIndicator?: boolean;
    panPinchSize?: IPanPinchSize;
    disable?: boolean;
    isSquare?: boolean;
    filter?: TFilterName;
    objectFit?: TObjectFitOptions;
    hideOverflow?: boolean;
    onLoadedData?: () => any;
    isSingleTouchDragAvailable?: boolean;
    initPosition?: ITransformOptions;
}
