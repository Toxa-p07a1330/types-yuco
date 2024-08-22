/**
 * Yuco Messenger
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AxiosConfiguration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import { type RequestArgs, BaseAPI } from '../base';
import type { DeleteMessageType } from '../model';
import type { MSFullMessage } from '../model';
import type { MSMessageList } from '../model';
import type { MSReadings } from '../model';
import type { SJBCreateMessage } from '../model';
import type { SJBDeleteMessages } from '../model';
import type { SJBForwardMessages } from '../model';
import type { SJBMessageSync } from '../model';
import type { SJBReadMessage } from '../model';
import type { SJBReplyMessage } from '../model';
import type { SJBUpdateMessage } from '../model';
/**
 * MessageApi - axios parameter creator
 * @export
 */
export declare const MessageApiAxiosParamCreator: (configuration?: AxiosConfiguration) => {
    /**
     *
     * @summary Create Message View
     * @param {SJBCreateMessage} sJBCreateMessage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createMessageViewPost: (sJBCreateMessage: SJBCreateMessage, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Create Reaction On Message
     * @param {string} reaction
     * @param {string} messageUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReactionOnMessagePost: (reaction: string, messageUuid: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete Message View
     * @param {SJBDeleteMessages} sJBDeleteMessages
     * @param {DeleteMessageType} [deleteType]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteMessageViewDelete: (sJBDeleteMessages: SJBDeleteMessages, deleteType?: DeleteMessageType, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Edit Message View
     * @param {string} messageUuid
     * @param {SJBUpdateMessage} sJBUpdateMessage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    editMessageViewPatch: (messageUuid: string, sJBUpdateMessage: SJBUpdateMessage, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Forward Messages View
     * @param {SJBForwardMessages} sJBForwardMessages
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    forwardMessagesViewPost: (sJBForwardMessages: SJBForwardMessages, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Messages View
     * @param {string} chatId
     * @param {number} [limit]
     * @param {string} [wsEndDate]
     * @param {string} [wsStartDate]
     * @param {boolean} [links]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMessagesViewGet: (chatId: string, limit?: number, wsEndDate?: string, wsStartDate?: string, links?: boolean, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Reactions On Message
     * @param {string} messageUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReactionsOnMessageGet: (messageUuid: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Readings On Message
     * @param {string} messageUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReadingsOnMessageGet: (messageUuid: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Sync Messages View
     * @param {SJBMessageSync} sJBMessageSync
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSyncMessagesViewPost: (sJBMessageSync: SJBMessageSync, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Pin Message View
     * @param {string} messageUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pinMessageViewPost: (messageUuid: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Read Messages View
     * @param {SJBReadMessage} sJBReadMessage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readMessagesViewPost: (sJBReadMessage: SJBReadMessage, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Remove Reaction On Message
     * @param {string} reaction
     * @param {string} messageUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeReactionOnMessageDelete: (reaction: string, messageUuid: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Reply Message View
     * @param {SJBReplyMessage} sJBReplyMessage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    replyMessageViewPost: (sJBReplyMessage: SJBReplyMessage, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Unpin Message View
     * @param {string} messageUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unpinMessageViewPost: (messageUuid: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * MessageApi - functional programming interface
 * @export
 */
export declare const MessageApiFp: (configuration?: AxiosConfiguration) => {
    /**
     *
     * @summary Create Message View
     * @param {SJBCreateMessage} sJBCreateMessage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createMessageViewPost(sJBCreateMessage: SJBCreateMessage, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MSFullMessage>>;
    /**
     *
     * @summary Create Reaction On Message
     * @param {string} reaction
     * @param {string} messageUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createReactionOnMessagePost(reaction: string, messageUuid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     *
     * @summary Delete Message View
     * @param {SJBDeleteMessages} sJBDeleteMessages
     * @param {DeleteMessageType} [deleteType]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteMessageViewDelete(sJBDeleteMessages: SJBDeleteMessages, deleteType?: DeleteMessageType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Edit Message View
     * @param {string} messageUuid
     * @param {SJBUpdateMessage} sJBUpdateMessage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    editMessageViewPatch(messageUuid: string, sJBUpdateMessage: SJBUpdateMessage, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MSFullMessage>>;
    /**
     *
     * @summary Forward Messages View
     * @param {SJBForwardMessages} sJBForwardMessages
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    forwardMessagesViewPost(sJBForwardMessages: SJBForwardMessages, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<MSFullMessage>>>;
    /**
     *
     * @summary Get Messages View
     * @param {string} chatId
     * @param {number} [limit]
     * @param {string} [wsEndDate]
     * @param {string} [wsStartDate]
     * @param {boolean} [links]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMessagesViewGet(chatId: string, limit?: number, wsEndDate?: string, wsStartDate?: string, links?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MSMessageList>>;
    /**
     *
     * @summary Get Reactions On Message
     * @param {string} messageUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReactionsOnMessageGet(messageUuid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<{
        [key: string]: string;
    }[]>>;
    /**
     *
     * @summary Get Readings On Message
     * @param {string} messageUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReadingsOnMessageGet(messageUuid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MSReadings>>;
    /**
     *
     * @summary Get Sync Messages View
     * @param {SJBMessageSync} sJBMessageSync
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSyncMessagesViewPost(sJBMessageSync: SJBMessageSync, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     *
     * @summary Pin Message View
     * @param {string} messageUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pinMessageViewPost(messageUuid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     *
     * @summary Read Messages View
     * @param {SJBReadMessage} sJBReadMessage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    readMessagesViewPost(sJBReadMessage: SJBReadMessage, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Remove Reaction On Message
     * @param {string} reaction
     * @param {string} messageUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    removeReactionOnMessageDelete(reaction: string, messageUuid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     *
     * @summary Reply Message View
     * @param {SJBReplyMessage} sJBReplyMessage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    replyMessageViewPost(sJBReplyMessage: SJBReplyMessage, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MSFullMessage>>;
    /**
     *
     * @summary Unpin Message View
     * @param {string} messageUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    unpinMessageViewPost(messageUuid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
/**
 * Request parameters for createMessageViewPost operation in MessageApi.
 * @export
 * @interface MessageApiCreateMessageViewPostRequest
 */
export interface MessageApiCreateMessageViewPostRequest {
    /**
     *
     * @type {SJBCreateMessage}
     * @memberof MessageApiCreateMessageViewPost
     */
    readonly sJBCreateMessage: SJBCreateMessage;
}
/**
 * Request parameters for createReactionOnMessagePost operation in MessageApi.
 * @export
 * @interface MessageApiCreateReactionOnMessagePostRequest
 */
export interface MessageApiCreateReactionOnMessagePostRequest {
    /**
     *
     * @type {string}
     * @memberof MessageApiCreateReactionOnMessagePost
     */
    readonly reaction: string;
    /**
     *
     * @type {string}
     * @memberof MessageApiCreateReactionOnMessagePost
     */
    readonly messageUuid: string;
}
/**
 * Request parameters for deleteMessageViewDelete operation in MessageApi.
 * @export
 * @interface MessageApiDeleteMessageViewDeleteRequest
 */
export interface MessageApiDeleteMessageViewDeleteRequest {
    /**
     *
     * @type {SJBDeleteMessages}
     * @memberof MessageApiDeleteMessageViewDelete
     */
    readonly sJBDeleteMessages: SJBDeleteMessages;
    /**
     *
     * @type {DeleteMessageType}
     * @memberof MessageApiDeleteMessageViewDelete
     */
    readonly deleteType?: DeleteMessageType;
}
/**
 * Request parameters for editMessageViewPatch operation in MessageApi.
 * @export
 * @interface MessageApiEditMessageViewPatchRequest
 */
export interface MessageApiEditMessageViewPatchRequest {
    /**
     *
     * @type {string}
     * @memberof MessageApiEditMessageViewPatch
     */
    readonly messageUuid: string;
    /**
     *
     * @type {SJBUpdateMessage}
     * @memberof MessageApiEditMessageViewPatch
     */
    readonly sJBUpdateMessage: SJBUpdateMessage;
}
/**
 * Request parameters for forwardMessagesViewPost operation in MessageApi.
 * @export
 * @interface MessageApiForwardMessagesViewPostRequest
 */
export interface MessageApiForwardMessagesViewPostRequest {
    /**
     *
     * @type {SJBForwardMessages}
     * @memberof MessageApiForwardMessagesViewPost
     */
    readonly sJBForwardMessages: SJBForwardMessages;
}
/**
 * Request parameters for getMessagesViewGet operation in MessageApi.
 * @export
 * @interface MessageApiGetMessagesViewGetRequest
 */
export interface MessageApiGetMessagesViewGetRequest {
    /**
     *
     * @type {string}
     * @memberof MessageApiGetMessagesViewGet
     */
    readonly chatId: string;
    /**
     *
     * @type {number}
     * @memberof MessageApiGetMessagesViewGet
     */
    readonly limit?: number;
    /**
     *
     * @type {string}
     * @memberof MessageApiGetMessagesViewGet
     */
    readonly wsEndDate?: string;
    /**
     *
     * @type {string}
     * @memberof MessageApiGetMessagesViewGet
     */
    readonly wsStartDate?: string;
    /**
     *
     * @type {boolean}
     * @memberof MessageApiGetMessagesViewGet
     */
    readonly links?: boolean;
}
/**
 * Request parameters for getReactionsOnMessageGet operation in MessageApi.
 * @export
 * @interface MessageApiGetReactionsOnMessageGetRequest
 */
export interface MessageApiGetReactionsOnMessageGetRequest {
    /**
     *
     * @type {string}
     * @memberof MessageApiGetReactionsOnMessageGet
     */
    readonly messageUuid: string;
}
/**
 * Request parameters for getReadingsOnMessageGet operation in MessageApi.
 * @export
 * @interface MessageApiGetReadingsOnMessageGetRequest
 */
export interface MessageApiGetReadingsOnMessageGetRequest {
    /**
     *
     * @type {string}
     * @memberof MessageApiGetReadingsOnMessageGet
     */
    readonly messageUuid: string;
}
/**
 * Request parameters for getSyncMessagesViewPost operation in MessageApi.
 * @export
 * @interface MessageApiGetSyncMessagesViewPostRequest
 */
export interface MessageApiGetSyncMessagesViewPostRequest {
    /**
     *
     * @type {SJBMessageSync}
     * @memberof MessageApiGetSyncMessagesViewPost
     */
    readonly sJBMessageSync: SJBMessageSync;
}
/**
 * Request parameters for pinMessageViewPost operation in MessageApi.
 * @export
 * @interface MessageApiPinMessageViewPostRequest
 */
export interface MessageApiPinMessageViewPostRequest {
    /**
     *
     * @type {string}
     * @memberof MessageApiPinMessageViewPost
     */
    readonly messageUuid: string;
}
/**
 * Request parameters for readMessagesViewPost operation in MessageApi.
 * @export
 * @interface MessageApiReadMessagesViewPostRequest
 */
export interface MessageApiReadMessagesViewPostRequest {
    /**
     *
     * @type {SJBReadMessage}
     * @memberof MessageApiReadMessagesViewPost
     */
    readonly sJBReadMessage: SJBReadMessage;
}
/**
 * Request parameters for removeReactionOnMessageDelete operation in MessageApi.
 * @export
 * @interface MessageApiRemoveReactionOnMessageDeleteRequest
 */
export interface MessageApiRemoveReactionOnMessageDeleteRequest {
    /**
     *
     * @type {string}
     * @memberof MessageApiRemoveReactionOnMessageDelete
     */
    readonly reaction: string;
    /**
     *
     * @type {string}
     * @memberof MessageApiRemoveReactionOnMessageDelete
     */
    readonly messageUuid: string;
}
/**
 * Request parameters for replyMessageViewPost operation in MessageApi.
 * @export
 * @interface MessageApiReplyMessageViewPostRequest
 */
export interface MessageApiReplyMessageViewPostRequest {
    /**
     *
     * @type {SJBReplyMessage}
     * @memberof MessageApiReplyMessageViewPost
     */
    readonly sJBReplyMessage: SJBReplyMessage;
}
/**
 * Request parameters for unpinMessageViewPost operation in MessageApi.
 * @export
 * @interface MessageApiUnpinMessageViewPostRequest
 */
export interface MessageApiUnpinMessageViewPostRequest {
    /**
     *
     * @type {string}
     * @memberof MessageApiUnpinMessageViewPost
     */
    readonly messageUuid: string;
}
/**
 * MessageApi - interface
 * @export
 * @interface MessageApi
 */
export interface MessageApiInterface {
    /**
     *
     * @summary Create Message View
     * @param {SJBCreateMessage} sJBCreateMessage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApiInterface
     */
    createMessageViewPost(requestParameters: MessageApiCreateMessageViewPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<MSFullMessage>;
    /**
     *
     * @summary Create Reaction On Message
     * @param {string} reaction
     * @param {string} messageUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApiInterface
     */
    createReactionOnMessagePost(requestParameters: MessageApiCreateReactionOnMessagePostRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     *
     * @summary Delete Message View
     * @param {SJBDeleteMessages} sJBDeleteMessages
     * @param {DeleteMessageType} [deleteType]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApiInterface
     */
    deleteMessageViewDelete(requestParameters: MessageApiDeleteMessageViewDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<any>;
    /**
     *
     * @summary Edit Message View
     * @param {string} messageUuid
     * @param {SJBUpdateMessage} sJBUpdateMessage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApiInterface
     */
    editMessageViewPatch(requestParameters: MessageApiEditMessageViewPatchRequest, options?: RawAxiosRequestConfig): AxiosPromise<MSFullMessage>;
    /**
     *
     * @summary Forward Messages View
     * @param {SJBForwardMessages} sJBForwardMessages
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApiInterface
     */
    forwardMessagesViewPost(requestParameters: MessageApiForwardMessagesViewPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<MSFullMessage>>;
    /**
     *
     * @summary Get Messages View
     * @param {string} chatId
     * @param {number} [limit]
     * @param {string} [wsEndDate]
     * @param {string} [wsStartDate]
     * @param {boolean} [links]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApiInterface
     */
    getMessagesViewGet(requestParameters: MessageApiGetMessagesViewGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<MSMessageList>;
    /**
     *
     * @summary Get Reactions On Message
     * @param {string} messageUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApiInterface
     */
    getReactionsOnMessageGet(requestParameters: MessageApiGetReactionsOnMessageGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<{
        [key: string]: string;
    }>>;
    /**
     *
     * @summary Get Readings On Message
     * @param {string} messageUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApiInterface
     */
    getReadingsOnMessageGet(requestParameters: MessageApiGetReadingsOnMessageGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<MSReadings>;
    /**
     *
     * @summary Get Sync Messages View
     * @param {SJBMessageSync} sJBMessageSync
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApiInterface
     */
    getSyncMessagesViewPost(requestParameters: MessageApiGetSyncMessagesViewPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     *
     * @summary Pin Message View
     * @param {string} messageUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApiInterface
     */
    pinMessageViewPost(requestParameters: MessageApiPinMessageViewPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     *
     * @summary Read Messages View
     * @param {SJBReadMessage} sJBReadMessage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApiInterface
     */
    readMessagesViewPost(requestParameters: MessageApiReadMessagesViewPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<any>;
    /**
     *
     * @summary Remove Reaction On Message
     * @param {string} reaction
     * @param {string} messageUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApiInterface
     */
    removeReactionOnMessageDelete(requestParameters: MessageApiRemoveReactionOnMessageDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     *
     * @summary Reply Message View
     * @param {SJBReplyMessage} sJBReplyMessage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApiInterface
     */
    replyMessageViewPost(requestParameters: MessageApiReplyMessageViewPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<MSFullMessage>;
    /**
     *
     * @summary Unpin Message View
     * @param {string} messageUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApiInterface
     */
    unpinMessageViewPost(requestParameters: MessageApiUnpinMessageViewPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
}
/**
 * MessageApi - object-oriented interface
 * @export
 * @class MessageApi
 * @extends {BaseAPI}
 */
export declare class MessageApi extends BaseAPI implements MessageApiInterface {
    /**
     *
     * @summary Create Message View
     * @param {MessageApiCreateMessageViewPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApi
     */
    createMessageViewPost(requestParameters: MessageApiCreateMessageViewPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<MSFullMessage, any>>;
    /**
     *
     * @summary Create Reaction On Message
     * @param {MessageApiCreateReactionOnMessagePostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApi
     */
    createReactionOnMessagePost(requestParameters: MessageApiCreateReactionOnMessagePostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @summary Delete Message View
     * @param {MessageApiDeleteMessageViewDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApi
     */
    deleteMessageViewDelete(requestParameters: MessageApiDeleteMessageViewDeleteRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Edit Message View
     * @param {MessageApiEditMessageViewPatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApi
     */
    editMessageViewPatch(requestParameters: MessageApiEditMessageViewPatchRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<MSFullMessage, any>>;
    /**
     *
     * @summary Forward Messages View
     * @param {MessageApiForwardMessagesViewPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApi
     */
    forwardMessagesViewPost(requestParameters: MessageApiForwardMessagesViewPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<MSFullMessage[], any>>;
    /**
     *
     * @summary Get Messages View
     * @param {MessageApiGetMessagesViewGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApi
     */
    getMessagesViewGet(requestParameters: MessageApiGetMessagesViewGetRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<MSMessageList, any>>;
    /**
     *
     * @summary Get Reactions On Message
     * @param {MessageApiGetReactionsOnMessageGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApi
     */
    getReactionsOnMessageGet(requestParameters: MessageApiGetReactionsOnMessageGetRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<{
        [key: string]: string;
    }[], any>>;
    /**
     *
     * @summary Get Readings On Message
     * @param {MessageApiGetReadingsOnMessageGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApi
     */
    getReadingsOnMessageGet(requestParameters: MessageApiGetReadingsOnMessageGetRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<MSReadings, any>>;
    /**
     *
     * @summary Get Sync Messages View
     * @param {MessageApiGetSyncMessagesViewPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApi
     */
    getSyncMessagesViewPost(requestParameters: MessageApiGetSyncMessagesViewPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @summary Pin Message View
     * @param {MessageApiPinMessageViewPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApi
     */
    pinMessageViewPost(requestParameters: MessageApiPinMessageViewPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @summary Read Messages View
     * @param {MessageApiReadMessagesViewPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApi
     */
    readMessagesViewPost(requestParameters: MessageApiReadMessagesViewPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Remove Reaction On Message
     * @param {MessageApiRemoveReactionOnMessageDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApi
     */
    removeReactionOnMessageDelete(requestParameters: MessageApiRemoveReactionOnMessageDeleteRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @summary Reply Message View
     * @param {MessageApiReplyMessageViewPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApi
     */
    replyMessageViewPost(requestParameters: MessageApiReplyMessageViewPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<MSFullMessage, any>>;
    /**
     *
     * @summary Unpin Message View
     * @param {MessageApiUnpinMessageViewPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageApi
     */
    unpinMessageViewPost(requestParameters: MessageApiUnpinMessageViewPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
}
