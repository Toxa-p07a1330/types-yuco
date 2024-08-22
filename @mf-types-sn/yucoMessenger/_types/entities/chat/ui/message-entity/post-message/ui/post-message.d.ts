export declare const PostMessage: ({ postId, header, markObjectAsExpired, expired, isMyMessage }: {
    postId: number;
    header?: boolean | undefined;
    markObjectAsExpired: (val: boolean) => void;
    expired?: boolean | undefined;
    isMyMessage?: boolean | undefined;
}) => import("react/jsx-runtime").JSX.Element;
