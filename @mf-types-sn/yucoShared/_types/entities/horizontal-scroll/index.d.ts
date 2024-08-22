import { ReactElement } from 'react';
export type Rect = Pick<DOMRect, 'left' | 'top' | 'bottom' | 'height' | 'width'>;
interface IHorizontalScroll {
    className?: string;
    children?: ReactElement;
    style?: React.CSSProperties;
    initAnimValues: number;
    manualAnimVal?: number;
    maxBound: number;
    minBound: number;
}
export declare const HorizontalScroll: import("react").ForwardRefExoticComponent<IHorizontalScroll & import("react").RefAttributes<HTMLDivElement>>;
export {};
