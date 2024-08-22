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
import type { SJBRPCRequest } from '../model';
/**
 * WebSocketCallbackApi - axios parameter creator
 * @export
 */
export declare const WebSocketCallbackApiAxiosParamCreator: (configuration?: AxiosConfiguration) => {
    /**
     *
     * @summary Ws Rpc
     * @param {SJBRPCRequest} sJBRPCRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    wsRpcPost: (sJBRPCRequest: SJBRPCRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Ws Wscn
     * @param {string} accountUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    wsWscnGet: (accountUuid: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * WebSocketCallbackApi - functional programming interface
 * @export
 */
export declare const WebSocketCallbackApiFp: (configuration?: AxiosConfiguration) => {
    /**
     *
     * @summary Ws Rpc
     * @param {SJBRPCRequest} sJBRPCRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    wsRpcPost(sJBRPCRequest: SJBRPCRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Ws Wscn
     * @param {string} accountUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    wsWscnGet(accountUuid: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
};
/**
 * Request parameters for wsRpcPost operation in WebSocketCallbackApi.
 * @export
 * @interface WebSocketCallbackApiWsRpcPostRequest
 */
export interface WebSocketCallbackApiWsRpcPostRequest {
    /**
     *
     * @type {SJBRPCRequest}
     * @memberof WebSocketCallbackApiWsRpcPost
     */
    readonly sJBRPCRequest: SJBRPCRequest;
}
/**
 * Request parameters for wsWscnGet operation in WebSocketCallbackApi.
 * @export
 * @interface WebSocketCallbackApiWsWscnGetRequest
 */
export interface WebSocketCallbackApiWsWscnGetRequest {
    /**
     *
     * @type {string}
     * @memberof WebSocketCallbackApiWsWscnGet
     */
    readonly accountUuid: string;
}
/**
 * WebSocketCallbackApi - interface
 * @export
 * @interface WebSocketCallbackApi
 */
export interface WebSocketCallbackApiInterface {
    /**
     *
     * @summary Ws Rpc
     * @param {SJBRPCRequest} sJBRPCRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSocketCallbackApiInterface
     */
    wsRpcPost(requestParameters: WebSocketCallbackApiWsRpcPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<any>;
    /**
     *
     * @summary Ws Wscn
     * @param {string} accountUuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSocketCallbackApiInterface
     */
    wsWscnGet(requestParameters: WebSocketCallbackApiWsWscnGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<any>;
}
/**
 * WebSocketCallbackApi - object-oriented interface
 * @export
 * @class WebSocketCallbackApi
 * @extends {BaseAPI}
 */
export declare class WebSocketCallbackApi extends BaseAPI implements WebSocketCallbackApiInterface {
    /**
     *
     * @summary Ws Rpc
     * @param {WebSocketCallbackApiWsRpcPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSocketCallbackApi
     */
    wsRpcPost(requestParameters: WebSocketCallbackApiWsRpcPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Ws Wscn
     * @param {WebSocketCallbackApiWsWscnGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebSocketCallbackApi
     */
    wsWscnGet(requestParameters: WebSocketCallbackApiWsWscnGetRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
}
