import { FC, ReactNode } from "react";
interface IYucoDefaultModal {
    onWillDismiss?: () => void;
    component: JSX.Element | ReactNode;
    withCancel?: boolean;
    onCancel?: () => void;
    height?: string;
    width?: string;
    bottomContentOffset?: string;
    backgroundColor?: string;
    backdropColor?: string;
    showBackdrop?: boolean;
    id: string;
}
export declare const YucoDefaultModal: FC<IYucoDefaultModal>;
export {};
