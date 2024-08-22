import { AnyAction } from '@reduxjs/toolkit';
import * as History from 'history';
export interface IMessengerApp {
    store: any;
    yucoHistory: History.History;
    yucoLocation: History.Location;
    setNotification: AnyAction;
    setIsBarHide: (value: boolean) => {
        payload: any;
        type: 'router/setIsBarHide';
    };
    isDarkTheme: boolean;
}
