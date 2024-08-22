import { IYucoDefaultAlert } from 'shared/types';
import React, { ReactNode } from 'react';
interface IAlertProviderProps {
    children: ReactNode | JSX.Element;
}
interface IAlertStore {
    alertType: string | null;
    alertProps: IYucoDefaultAlert | null;
}
interface IAlertContext {
    showAlert: (alertType: string, alertProps: IYucoDefaultAlert) => void;
    hideAlert: () => void;
    store: IAlertStore;
}
export declare const useAlertContext: () => IAlertContext;
export declare const AlertProvider: React.FC<IAlertProviderProps>;
export {};
