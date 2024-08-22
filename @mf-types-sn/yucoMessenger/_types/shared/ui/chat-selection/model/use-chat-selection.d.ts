export declare const useChatSelection: ({ setChats, getChats, chatsList, defaultBody }: {
    setChats: (items: any) => void;
    getChats: (data: any) => Promise<any>;
    chatsList: any;
    defaultBody: any;
}) => {
    getChatsCallback: (rewrite?: boolean, body?: any) => Promise<void>;
    isLoading: boolean;
};
