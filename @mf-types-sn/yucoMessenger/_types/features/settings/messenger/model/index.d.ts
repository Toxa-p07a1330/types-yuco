export declare enum MessengerOptionTypesEnum {
    LIST = "list",
    TOGGLE = "toggle"
}
export declare enum MessengerVisibilityEnum {
    EVERYBODY = "Everybody",
    MYCONTACTS = "My contacts",
    NOBODY = "Nobody"
}
export type TMessengerSettingsItem = {
    id: string;
    type?: MessengerOptionTypesEnum;
    value: any;
    hint?: string;
    onClick?: () => any;
};
