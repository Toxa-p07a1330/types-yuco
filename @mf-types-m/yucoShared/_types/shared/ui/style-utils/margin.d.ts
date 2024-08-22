export interface IMarginVariant {
    margin_bottom?: "ultra" | "high" | "regular" | "extra_regular" | "small" | "tiny" | "extra_tiny" | "minimal" | 0;
    margin_top?: "ultra" | "high" | "regular" | "extra_regular" | "small" | "tiny" | "extra_tiny" | "minimal" | 0;
    margin_left?: "ultra" | "high" | "regular" | "extra_regular" | "small" | "tiny" | "extra_tiny" | "minimal" | 0;
    margin_right?: "ultra" | "high" | "regular" | "extra_regular" | "small" | "tiny" | "extra_tiny" | "minimal" | 0;
    gap?: number;
}
export declare const MarginStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<IMarginVariant, any>>;
