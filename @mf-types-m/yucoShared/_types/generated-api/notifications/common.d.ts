/**
 * Yuco Notifications
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AxiosConfiguration } from './configuration';
import type { RequestArgs } from './base';
import type { AxiosInstance, AxiosResponse } from 'axios';
/**
 *
 * @export
 */
export declare const DUMMY_BASE_URL = "https://example.com";
/**
 *
 * @throws {RequiredError}
 * @export
 */
export declare const assertParamExists: (functionName: string, paramName: string, paramValue: unknown) => void;
/**
 *
 * @export
 */
export declare const setApiKeyToObject: (object: any, keyParamName: string, configuration?: AxiosConfiguration) => Promise<void>;
/**
 *
 * @export
 */
export declare const setBasicAuthToObject: (object: any, configuration?: AxiosConfiguration) => void;
/**
 *
 * @export
 */
export declare const setBearerAuthToObject: (object: any, configuration?: AxiosConfiguration) => Promise<void>;
/**
 *
 * @export
 */
export declare const setOAuthToObject: (object: any, name: string, scopes: string[], configuration?: AxiosConfiguration) => Promise<void>;
/**
 *
 * @export
 */
export declare const setSearchParams: (url: URL, ...objects: any[]) => void;
/**
 *
 * @export
 */
export declare const serializeDataIfNeeded: (value: any, requestOptions: any, configuration?: AxiosConfiguration) => any;
/**
 *
 * @export
 */
export declare const toPathString: (url: URL) => string;
/**
 *
 * @export
 */
export declare const createRequestFunction: (axiosArgs: RequestArgs, globalAxios: AxiosInstance, BASE_PATH: string, configuration?: AxiosConfiguration) => <T = unknown, R = AxiosResponse<T, any>>(axios?: AxiosInstance, basePath?: string) => Promise<R>;
