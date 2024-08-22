import React, { ReactNode } from 'react';
interface ModalProviderProps {
    children: ReactNode | JSX.Element;
}
interface IModalProps {
    onWillDismiss?: () => void;
    component: JSX.Element | ReactNode;
    withCancel?: boolean;
    onCancel?: () => void;
    height?: string;
    bottomContentOffset?: string;
    backgroundColor?: string;
    backdropColor?: string;
    showBackdrop?: boolean;
    initialBreakpoint?: number;
    breakpoints?: number[];
    id?: string;
    width?: string;
}
interface IModalDispatchContext {
    showModal: (modalType: string, modalProps: IModalProps) => string;
    hideModal: (id: string) => void;
}
export declare const ModalProvider: React.FC<ModalProviderProps>;
export declare const useModalDispatchContext: () => IModalDispatchContext;
export {};
