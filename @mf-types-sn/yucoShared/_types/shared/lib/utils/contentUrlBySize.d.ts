declare enum READ_URL_SIZES {
    original = 0,
    medium = 1,
    small = 2,
    _smallest = 3,
    _biggest = 4,
    any = 5
}
type argTypes = {
    urlsContainer: {
        read_urls?: {
            url: string;
            size_type: string;
        }[];
        thumbnail_read_urls?: {
            url: string;
            size_type: string;
        }[];
        profile_photo?: {
            read_urls?: {
                url: string;
                size_type: string;
            }[];
        };
    };
    wantedSize?: READ_URL_SIZES;
    thumbnailMode?: boolean;
};
export declare const ContentUrlBySize: () => {
    reaUrlSizesEnum: typeof READ_URL_SIZES;
    getContentUrlBySize: (args: argTypes) => string | null | undefined;
};
export {};
