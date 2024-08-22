/// <reference types="react" />
import { TChatSelectionTag } from '../../../types';
export declare const useChatSelectionTagContainer: ({ tagCallback }: {
    tagCallback: (item: any) => any;
}) => {
    clickHandler: (item: TChatSelectionTag) => void;
    tagIdsDeleteMenuOpen: string;
    setTagIdDeleteMenuOpen: import("react").Dispatch<import("react").SetStateAction<string>>;
};
