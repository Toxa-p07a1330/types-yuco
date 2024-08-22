import { TChatSelectionCard, TChatSelectionTag } from 'shared/types';
import { SearchbarChangeEventDetail } from '@ionic/react';
import { IonSearchbarCustomEvent } from '@ionic/core/dist/types/components';
export declare const ChatSelection: ({ tagCallback, cardCallback, onInputFocus, searchChatHandler, tags, cards, isLoading, searchChat, getChatsCallback, scrollOffset }: {
    tagCallback: (item: any) => any;
    cardCallback: (item: any) => any;
    onInputFocus: () => any;
    searchChatHandler: (event: IonSearchbarCustomEvent<SearchbarChangeEventDetail>) => void;
    tags: TChatSelectionTag[];
    cards: TChatSelectionCard[];
    isLoading?: boolean | undefined;
    searchChat?: string | undefined;
    getChatsCallback?: any;
    scrollOffset?: number | undefined;
}) => import("react/jsx-runtime").JSX.Element;
