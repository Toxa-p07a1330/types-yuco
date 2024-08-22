export type TTab = {
    id: string;
    content: JSX.Element | string;
    selectedContent?: JSX.Element | string;
    selected: boolean;
    onClick: () => void;
    value?: string | null;
};
