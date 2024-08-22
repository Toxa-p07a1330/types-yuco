import { TChatSelectionCard } from 'shared/types';
export declare const ChatSelectionContainer: ({ cardCallback, cards, getUsersCallback, isLoading, scrollOffset, tagIds }: {
    cardCallback: (item: any) => any;
    cards: TChatSelectionCard[];
    getUsersCallback?: any;
    isLoading?: boolean | undefined;
    scrollOffset?: number | undefined;
    tagIds?: string[] | undefined;
}) => import("react/jsx-runtime").JSX.Element;
