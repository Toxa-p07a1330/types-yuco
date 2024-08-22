/// <reference types="react" />
import { TChatSelectionTag } from '../../../types';
export declare const useChatSelectionReduced: (scrollOffset: number, tags: TChatSelectionTag[]) => {
    tagRef: import("react").RefObject<HTMLDivElement>;
    userSelectionOffset: number;
    tagIds: string[];
};
