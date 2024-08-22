import { SearchbarChangeEventDetail } from '@ionic/core';
import { IonSearchbarCustomEvent } from '@ionic/core/dist/types/components';
import { FC } from 'react';
export interface ISearchInput {
    placeholder?: string;
    showClearButton?: 'always' | 'never' | 'focus';
    value?: string;
    onChange?: (event: IonSearchbarCustomEvent<SearchbarChangeEventDetail>) => void;
    disabled?: boolean;
    onFocus?: () => any;
}
export declare const SearchInput: FC<ISearchInput>;
