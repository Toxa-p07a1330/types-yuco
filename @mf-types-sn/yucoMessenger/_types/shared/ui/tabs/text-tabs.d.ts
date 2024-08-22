/// <reference types="react" />
import { TTab } from "./model";
interface ITextTabs {
    tabs: TTab[];
    currentTab?: string | null;
    scrollable?: boolean;
    className?: string;
}
export declare const TextTabs: import("react").ForwardRefExoticComponent<ITextTabs & import("react").RefAttributes<HTMLIonSegmentElement>>;
export * from "./styles";
