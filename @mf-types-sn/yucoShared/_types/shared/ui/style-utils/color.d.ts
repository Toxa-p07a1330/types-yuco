export interface IColorVariant {
    color?: "action" | "dark" | "light" | "error" | "secondary" | "dark_grey" | "inherit";
}
export declare const ColorStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<IColorVariant, any>>;
export declare const TABS_COLORS_NAMED: {
    white: {
        bg: string;
        color: string;
    };
    black: {
        bg: string;
        color: string;
    };
    lightBlue: {
        bg: string;
        color: string;
    };
    blue: {
        bg: string;
        color: string;
    };
    green: {
        bg: string;
        color: string;
    };
    lime: {
        bg: string;
        color: string;
    };
    yellow: {
        bg: string;
        color: string;
    };
    orange: {
        bg: string;
        color: string;
    };
    lightPink: {
        bg: string;
        color: string;
    };
    pink: {
        bg: string;
        color: string;
    };
    magenta: {
        bg: string;
        color: string;
    };
    lightMagenta: {
        bg: string;
        color: string;
    };
    semiblue: {
        bg: string;
        color: string;
    };
    sky: {
        bg: string;
        color: string;
    };
    deepBlue: {
        bg: string;
        color: string;
    };
    darkBlue: {
        bg: string;
        color: string;
    };
    purple: {
        bg: string;
        color: string;
    };
    darkBlue2: {
        bg: string;
        color: string;
    };
    darkRed: {
        bg: string;
        color: string;
    };
    paleRed: {
        bg: string;
        color: string;
    };
    red: {
        bg: string;
        color: string;
    };
};
export declare const getTextColor: (bgColor: string) => any;
