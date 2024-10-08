/**
 * Yuco Backend
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
import type { PhoneCodeList } from '../model';
/**
 * PhoneCodesApi - axios parameter creator
 * @export
 */
export declare const PhoneCodesApiAxiosParamCreator: (configuration?: AxiosConfiguration) => {
    /**
     * ## Available fields for *sort* and *offset*:  - id: int - name: str - mask: str - index: str - cc: str - flag: str
     * @summary List Codes View
     * @param {string} [sort] Fields for ordering without spaces and separated by commas.Can be used for ASC and DESC (\&#39;-\&#39; added to the beggining of the field).Example: &amp;sort&#x3D;-username,created_at
     * @param {string} [offset] Values of last received row which used in sort. Example with sort: sort&#x3D;username,-id&amp;offset&#x3D;username123,987
     * @param {number} [limit] Limit of rows count in the response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCodesViewGet: (sort?: string, offset?: string, limit?: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * PhoneCodesApi - functional programming interface
 * @export
 */
export declare const PhoneCodesApiFp: (configuration?: AxiosConfiguration) => {
    /**
     * ## Available fields for *sort* and *offset*:  - id: int - name: str - mask: str - index: str - cc: str - flag: str
     * @summary List Codes View
     * @param {string} [sort] Fields for ordering without spaces and separated by commas.Can be used for ASC and DESC (\&#39;-\&#39; added to the beggining of the field).Example: &amp;sort&#x3D;-username,created_at
     * @param {string} [offset] Values of last received row which used in sort. Example with sort: sort&#x3D;username,-id&amp;offset&#x3D;username123,987
     * @param {number} [limit] Limit of rows count in the response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCodesViewGet(sort?: string, offset?: string, limit?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PhoneCodeList>>;
};
/**
 * Request parameters for listCodesViewGet operation in PhoneCodesApi.
 * @export
 * @interface PhoneCodesApiListCodesViewGetRequest
 */
export interface PhoneCodesApiListCodesViewGetRequest {
    /**
     * Fields for ordering without spaces and separated by commas.Can be used for ASC and DESC (\&#39;-\&#39; added to the beggining of the field).Example: &amp;sort&#x3D;-username,created_at
     * @type {string}
     * @memberof PhoneCodesApiListCodesViewGet
     */
    readonly sort?: string;
    /**
     * Values of last received row which used in sort. Example with sort: sort&#x3D;username,-id&amp;offset&#x3D;username123,987
     * @type {string}
     * @memberof PhoneCodesApiListCodesViewGet
     */
    readonly offset?: string;
    /**
     * Limit of rows count in the response
     * @type {number}
     * @memberof PhoneCodesApiListCodesViewGet
     */
    readonly limit?: number;
}
/**
 * PhoneCodesApi - interface
 * @export
 * @interface PhoneCodesApi
 */
export interface PhoneCodesApiInterface {
    /**
     * ## Available fields for *sort* and *offset*:  - id: int - name: str - mask: str - index: str - cc: str - flag: str
     * @summary List Codes View
     * @param {string} [sort] Fields for ordering without spaces and separated by commas.Can be used for ASC and DESC (\&#39;-\&#39; added to the beggining of the field).Example: &amp;sort&#x3D;-username,created_at
     * @param {string} [offset] Values of last received row which used in sort. Example with sort: sort&#x3D;username,-id&amp;offset&#x3D;username123,987
     * @param {number} [limit] Limit of rows count in the response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhoneCodesApiInterface
     */
    listCodesViewGet(requestParameters: PhoneCodesApiListCodesViewGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<PhoneCodeList>;
}
/**
 * PhoneCodesApi - object-oriented interface
 * @export
 * @class PhoneCodesApi
 * @extends {BaseAPI}
 */
export declare class PhoneCodesApi extends BaseAPI implements PhoneCodesApiInterface {
    /**
     * ## Available fields for *sort* and *offset*:  - id: int - name: str - mask: str - index: str - cc: str - flag: str
     * @summary List Codes View
     * @param {PhoneCodesApiListCodesViewGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PhoneCodesApi
     */
    listCodesViewGet(requestParameters?: PhoneCodesApiListCodesViewGetRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<PhoneCodeList, any>>;
}
