import { TMessage } from 'entities/chat/model/types';
export declare const useMessage: ({ message }: {
    message: TMessage;
}) => {
    user: any;
    isMyMessage: boolean;
};
