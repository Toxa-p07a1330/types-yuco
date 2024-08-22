import { SyntheticEvent } from 'react';
import { TChatSelectionItem } from 'shared/types';
export declare const useSingleListElement: ({ chat: item }: {
    chat: TChatSelectionItem;
}) => {
    route: (id: string) => (e: SyntheticEvent) => void;
    avatar: string;
    removeClickHandler: () => void;
};
