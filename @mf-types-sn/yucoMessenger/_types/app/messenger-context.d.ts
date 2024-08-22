import { Dispatch } from 'react';
import { AppThunkDispatch } from 'shared/lib/store';
interface IMessengerContext {
    history: any;
    setNotification: ((val: any) => AppThunkDispatch) | null;
    setHistory: Dispatch<any>;
}
export declare const MessengerContext: import("react").Context<IMessengerContext>;
export declare function MessengerContextProvider(props: any): import("react/jsx-runtime").JSX.Element;
export {};
