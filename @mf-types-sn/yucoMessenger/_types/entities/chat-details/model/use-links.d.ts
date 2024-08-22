export type linkObjectType = {
    msg: string;
    link: string;
    title: string;
    hash_name: string;
    description: string;
    updated_at: string;
};
export declare const useLinks: () => {
    links: linkObjectType[];
    getLinks: (uuid: string) => Promise<any>;
    createLink: (link: string) => Promise<void>;
    convertedLinks: any[];
    isLoading: boolean;
    loadExtraLinks: () => Promise<void>;
};
