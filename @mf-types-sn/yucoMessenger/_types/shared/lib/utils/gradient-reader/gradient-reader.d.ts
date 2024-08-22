export interface IColorStop {
    color: string;
    stop: number;
}
export declare class GradientReader {
    private canvas;
    private ctx;
    private gr;
    private gr2;
    constructor(colorStops: IColorStop[], colorMixin?: string);
    getColor(pst: any): Uint8ClampedArray | undefined;
}
