import React, { ReactNode, SyntheticEvent } from 'react';
type headerProps = {
    title?: ReactNode | string;
    backButton?: boolean;
    withLeftAction?: ReactNode;
    withCancelLabel?: boolean;
    withRightAction?: ReactNode;
    subtitle?: string;
    defaultHref?: string;
    clickAction?: (e: SyntheticEvent) => void;
};
type updateLayout = {
    withRightAction?: ReactNode;
    withLeftAction?: ReactNode;
    withHeaderClass?: string;
};
interface ILayout {
    children?: ReactNode | ReactNode[];
    className?: string;
    headerProps?: headerProps;
    withoutPadding?: boolean;
    withTabMenu?: boolean;
    withWhiteToolbarBg?: boolean;
    withGreyToolbarBg?: boolean;
    backgroundToolbar?: string;
    backgroundContent?: string;
    backgroundImage?: string;
    withAbsoluteContent?: boolean;
    headerMargin?: number;
    isStoryLoading?: boolean;
    customPaddingTop?: number;
    customPaddingBottom?: number;
    withSwapTitle?: boolean;
    withOutKeyboardOffset?: boolean;
    isOverflowHidden?: boolean;
    boldness?: number;
    fontSize?: number;
    customBorderPaddings?: number;
    onlyTitleHeader?: boolean;
    titleOpacity?: number;
    useUpdateLayout?: () => updateLayout;
}
export declare const Layout: React.ForwardRefExoticComponent<ILayout & React.RefAttributes<HTMLIonContentElement>>;
export {};
