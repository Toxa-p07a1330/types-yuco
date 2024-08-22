import { IMessengerApp } from './types';
import { ComponentType } from 'react';
declare const withProvider: (Component: ComponentType<IMessengerApp>) => (props: IMessengerApp) => import("react/jsx-runtime").JSX.Element;
export default withProvider;
