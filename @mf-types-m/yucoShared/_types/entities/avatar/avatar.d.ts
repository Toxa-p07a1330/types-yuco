export interface IAvatar {
    photo?: string;
    inComment?: boolean;
    width?: number;
    borderWidth?: number;
    colorSchema?: {
        fillColor?: string;
        userColor?: string;
    };
}
export declare const Avatar: ({ photo, inComment, width, borderWidth, colorSchema }: IAvatar) => import("react/jsx-runtime").JSX.Element;
