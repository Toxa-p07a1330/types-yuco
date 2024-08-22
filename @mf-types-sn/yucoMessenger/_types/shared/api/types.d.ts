export declare const SizeType: {
    readonly Original: "original";
    readonly Small: "small";
    readonly Medium: "medium";
    readonly Compress: "compress";
};
export type TSizeType = (typeof SizeType)[keyof typeof SizeType];
export interface IReadUrl {
    url: string;
    size_type: TSizeType;
}
export interface IUrlsMap {
    thumbnail_available_sizes?: any[] | null;
    read_urls?: IReadUrl[];
    thumbnail_read_urls?: IReadUrl[];
}
