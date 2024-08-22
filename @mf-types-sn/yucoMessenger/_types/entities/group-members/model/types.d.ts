export type alertType = "delete" | "adjustMember" | "adjustAdmin";
export type TMemberAlertState = {
    state: boolean;
    type?: alertType;
    userId: string | undefined;
};
export type TMembersAlertContent = {
    [key: string]: TMembersAlertContentItem;
};
type TMembersAlertContentItem = {
    header: string;
    message: string[];
    confirmButton: TAlertConfirmButton;
};
type TAlertConfirmButton = {
    text: string;
    handler: () => void;
};
export {};
