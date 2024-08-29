/// <reference types="react" />
export interface IActiveFolder {
    ref?: React.RefObject<HTMLDivElement>;
    tabName: string;
}
export declare const FolderTabActionPopover: ({ tabsWrapperRef: tabsWrapperRef }: {
    tabsWrapperRef: IActiveFolder | null;
}) => import("react/jsx-runtime").JSX.Element;
