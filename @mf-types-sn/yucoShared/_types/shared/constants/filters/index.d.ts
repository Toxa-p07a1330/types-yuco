export declare enum BackgroundColorTypeEnum {
    LINEAR_GRADIENT = "linear-gradient",
    RADIAL_GRADIENT = "radial-gradient",
    COLOR = "color"
}
export declare enum BlendModeEnum {
    MULTIPLY = "multiply",
    OVERLAY = "overlay",
    LIGHTEN = "lighten",
    DARKEN = "darken",
    SCREEN = "screen",
    COLOR = "color"
}
interface IFilterBackgroundBase {
    type: BackgroundColorTypeEnum;
}
interface IPlaneColorBackground extends IFilterBackgroundBase {
    type: BackgroundColorTypeEnum.COLOR;
    color: string;
}
interface IGradientColorStop {
    offset: number;
    color: string;
}
export declare enum LinearGradientSide {
    RIGHT = "right",
    BOTTOM = "bottom"
}
export declare enum RadialGradientSide {
    CIRCLE = "circle",
    CLOSEST_CORNER = "closest-corner"
}
interface IGradientBackground extends IFilterBackgroundBase {
    type: BackgroundColorTypeEnum.LINEAR_GRADIENT | BackgroundColorTypeEnum.RADIAL_GRADIENT;
    colorStops: IGradientColorStop[];
}
interface ILinearGradientBackground extends IGradientBackground {
    type: BackgroundColorTypeEnum.LINEAR_GRADIENT;
    side: LinearGradientSide;
}
interface IRadialGradientBackground extends IGradientBackground {
    type: BackgroundColorTypeEnum.RADIAL_GRADIENT;
    position: RadialGradientSide[];
}
type BackgroundTypeMap = {
    [BackgroundColorTypeEnum.COLOR]: IPlaneColorBackground;
    [BackgroundColorTypeEnum.LINEAR_GRADIENT]: ILinearGradientBackground;
    [BackgroundColorTypeEnum.RADIAL_GRADIENT]: IRadialGradientBackground;
};
type TConditionalProperties<T extends IFilterBackgroundBase> = T extends {
    type: BackgroundColorTypeEnum;
} ? BackgroundTypeMap[T['type']] & T : never;
export type TFilterBackground = TConditionalProperties<IFilterBackgroundBase>;
export type TFilter = {
    filter: string[];
    background?: TFilterBackground;
    blendMode?: BlendModeEnum;
};
export type TFilterName = 'filter-1977' | 'filter-aden' | 'filter-amaro' | 'filter-ashby' | 'filter-brannan' | 'filter-brooklyn' | 'filter-charmes' | 'filter-clarendon' | 'filter-crema' | 'filter-dogpatch' | 'filter-earlybird' | 'filter-gingham' | 'filter-ginza' | 'filter-hefe' | 'filter-helena' | 'filter-hudson' | 'filter-inkwell' | 'filter-juno' | 'filter-kelvin' | 'filter-lark' | 'filter-lofi' | 'filter-ludwig' | 'filter-maven' | 'filter-mayfair' | 'filter-moon' | 'filter-nashville' | 'filter-perpetua' | 'filter-poprocket' | 'filter-reyes' | 'filter-rise' | 'filter-sierra' | 'filter-skyline' | 'filter-slumber' | 'filter-stinson' | 'filter-sutro' | 'filter-toaster' | 'filter-valencia' | 'filter-vesper' | 'filter-walden' | 'filter-willow' | 'filter-xpro-ii';
export declare const filters: Record<TFilterName, TFilter>;
export {};
