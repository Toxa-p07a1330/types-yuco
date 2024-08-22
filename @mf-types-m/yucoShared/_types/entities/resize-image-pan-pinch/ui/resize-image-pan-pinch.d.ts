/// <reference types="react" />
import { IResizeImagePanPinchArgs } from '../types';
import 'context-filter-polyfill/dist/index.js';
import { ExportImageType, ISize, ITransformOptions } from 'entities/resize-pan-pinch/types';
/**
 * ResizeImagePanPinch component:
 * Manages interactive image resizing, panning, and zooming with optional cropping.
 * Provides methods via `ref` to get the cropped image and visible image size.
 *
 * Props:
 * - `image`: Image source
 * - `height`: Container height
 * - `pinchMode`: Zoom behavior
 * - `withSelectionIndicator`: Indicator visibility
 * - `disable`: Functionality toggle
 * - `panPinchSize`: Inner Pinch container dimensions
 * - `isSquare`: Aspect ratio
 * - `filter`: CSS effect
 * - `objectFit`: Object fit imitation, applied to internal image
 * - `hideOverflow`: Defines if overflow should be hidden or visible
 *  * */
export declare const ResizeImagePanPinch: import("react").ForwardRefExoticComponent<IResizeImagePanPinchArgs & import("react").RefAttributes<{
    getCroppedImage: (outputType?: ExportImageType) => Promise<{
        data: string;
        transformPosition: ITransformOptions;
    }>;
    getVisibleBlockSize: () => ISize;
    minimizeScale: () => void;
    resetScale: () => void;
}>>;
