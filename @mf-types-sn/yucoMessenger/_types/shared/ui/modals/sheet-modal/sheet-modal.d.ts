import { FC, ReactNode } from "react";
interface IYucoSheetModal {
    onWillDismiss?: () => void;
    component: JSX.Element | ReactNode;
    withCancel?: boolean;
    onCancel?: () => void;
    height?: number;
    initialBreakpoint: number;
    breakpoints: number[];
    heightOffset?: number;
    id: string;
}
export declare const YucoSheetModal: FC<IYucoSheetModal>;
export {};
