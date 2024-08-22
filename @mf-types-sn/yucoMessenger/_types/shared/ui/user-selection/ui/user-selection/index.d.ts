import { TUserSelectionCard, TUserSelectionTag } from 'shared/types';
import { SearchbarChangeEventDetail } from '@ionic/react';
import { IonSearchbarCustomEvent } from '@ionic/core/dist/types/components';
export declare const UserSelection: ({ tagCallback, cardCallback, onInputFocus, searchUserHandler, tags, cards, isLoading, searchUser, getUsersCallback, scrollOffset }: {
    tagCallback: (item: any) => any;
    cardCallback: (item: any) => any;
    onInputFocus: () => any;
    searchUserHandler: (event: IonSearchbarCustomEvent<SearchbarChangeEventDetail>) => void;
    tags: TUserSelectionTag[];
    cards: TUserSelectionCard[];
    isLoading?: boolean | undefined;
    searchUser?: string | undefined;
    getUsersCallback?: any;
    scrollOffset?: number | undefined;
}) => import("react/jsx-runtime").JSX.Element;
