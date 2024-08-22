export declare enum PossibleLanguages {
    en = "en-US",
    ru = "ru-RU"
}
export declare const LanguageMessageHandlerHook: () => {
    useLanguageMessageHandler: () => {
        PossibleLanguages: typeof PossibleLanguages;
        changeLanguageHandler: (lang: PossibleLanguages) => void;
        getLanguage: () => any;
    };
};
