export declare const useReactions: (message_id: string, cache_id: string, self_reaction?: string) => {
    handleReactions: (reaction: string) => Promise<void>;
};
