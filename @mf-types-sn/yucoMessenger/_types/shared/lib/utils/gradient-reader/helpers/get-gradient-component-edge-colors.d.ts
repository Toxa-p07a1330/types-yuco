import { IColorStop } from "../gradient-reader";
interface ISegment {
    top: number;
    bottom: number;
}
export declare const getGradientSegmentColor: ({ gradient, segment, opacity, parentHeigh, colorMixin, whiteBackground }: {
    gradient?: IColorStop[] | undefined;
    segment: ISegment;
    opacity?: number | undefined;
    parentHeigh?: number | undefined;
    colorMixin?: string | undefined;
    whiteBackground?: boolean | undefined;
}) => string | undefined;
export {};
