import { RootState } from 'shared/lib/store';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { TMessage, TMessageResponse, TUserAccount } from '../types';
interface IDeleteReactionHandler {
    reaction: {
        message_uuid: string;
        account_uuid: string;
        reaction: string;
        cache_id: string;
    };
    reactors: {
        [key: string]: TUserAccount;
    };
}
interface IUpdateReactionHandler {
    reaction: {
        message_uuid: string;
        account_uuid: string;
        reaction: string;
        cache_id: string;
        sender: TUserAccount;
    };
    old_reaction: {
        account_uuid: string;
        message_uuid: string;
        reaction: string;
    };
    old_reaction_reactors: TUserAccount[];
}
export declare const chatMessageHandler: {
    [x: string]: ((message: TMessageResponse, dispatch: (action: any) => any, getState: () => RootState) => void) | ((data: {
        accounts: any;
        messages: TMessageResponse[];
        updated_messages: TMessageResponse[];
        deleted_messages: (TMessageResponse & {
            replies: {
                uuid: string;
                cache_id: string;
            }[];
        })[];
        stuck_at: string;
    }, dispatch: (action: any) => any, getState: () => RootState) => Promise<void>) | ((message: TMessageResponse, dispatch: Dispatch<AnyAction>, getState: () => RootState) => void) | ((message: TMessage & {
        replies: {
            uuid: string;
            cache_id: string;
        }[];
    }) => void) | ((message: TMessage, dispatch: (action: any) => any) => void) | ((data: {
        uuid: string;
        is_read: boolean;
    }) => void) | ((data: {
        message_uuid: string;
        account_uuid: string;
        reaction: string;
        cache_id: string;
        sender: TUserAccount;
    }, dispatch: Dispatch<AnyAction>, getState: () => RootState) => void) | ((data: IDeleteReactionHandler, dispatch: Dispatch<AnyAction>, getState: () => RootState) => void) | ((data: IUpdateReactionHandler, dispatch: Dispatch<AnyAction>, getState: () => RootState) => void);
};
export {};
