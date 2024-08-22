import { TMessage } from './types';
interface IUser {
    avatar: string;
    id: string;
    username: string;
}
export declare const ChatMessageManager: () => {
    fetchChatMessages: ({ chatUuid, limit, date, userAccount }: {
        chatUuid: string;
        limit: number;
        date: string;
        userAccount?: IUser | undefined;
    }) => Promise<TMessage[]>;
};
export {};
