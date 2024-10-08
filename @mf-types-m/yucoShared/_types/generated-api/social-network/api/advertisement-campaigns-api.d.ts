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
import type { AdvertisementCampaign } from '../model';
import type { AdvertisementCampaignCreateSchema } from '../model';
import type { AdvertisementCampaignListSchema } from '../model';
import type { AdvertisementCampaignUpdateSchema } from '../model';
import type { AdvertisementCampaignUpdateStatusSchema } from '../model';
import type { AdvertisingObjectListSchema } from '../model';
import type { CampaignGoalListSchema } from '../model';
/**
 * AdvertisementCampaignsApi - axios parameter creator
 * @export
 */
export declare const AdvertisementCampaignsApiAxiosParamCreator: (configuration?: AxiosConfiguration) => {
    /**
     *
     * @summary Archive Advertisement Campaign View
     * @param {number} campaignId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    archiveAdvertisementCampaignViewPut: (campaignId: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Create Advertisement Campaign View
     * @param {AdvertisementCampaignCreateSchema} advertisementCampaignCreateSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAdvertisementCampaignViewPost: (advertisementCampaignCreateSchema: AdvertisementCampaignCreateSchema, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete Advertisement Campaign View
     * @param {number} campaignId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAdvertisementCampaignViewDelete: (campaignId: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * ## Available fields for *sort* and *offset*:  - id: int - name: str
     * @summary Get Advertisement Campaings View
     * @param {boolean} isArchived
     * @param {string} [sort] Fields for ordering without spaces and separated by commas.Can be used for ASC and DESC (\&#39;-\&#39; added to the beggining of the field).Example: &amp;sort&#x3D;-username,created_at
     * @param {string} [offset] Values of last received row which used in sort. Example with sort: sort&#x3D;username,-id&amp;offset&#x3D;username123,987
     * @param {number} [limit] Limit of rows count in the response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAdvertisementCampaingsViewGet: (isArchived: boolean, sort?: string, offset?: string, limit?: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Advertising Objects View
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAdvertisingObjectsViewGet: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Campaign Goals View
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCampaignGoalsViewGet: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update Advertisement Campaign Status View
     * @param {number} campaignId
     * @param {AdvertisementCampaignUpdateStatusSchema} advertisementCampaignUpdateStatusSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAdvertisementCampaignStatusViewPatch: (campaignId: number, advertisementCampaignUpdateStatusSchema: AdvertisementCampaignUpdateStatusSchema, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update Advertisement Campaign View
     * @param {number} campaignId
     * @param {AdvertisementCampaignUpdateSchema} advertisementCampaignUpdateSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAdvertisementCampaignViewPatch: (campaignId: number, advertisementCampaignUpdateSchema: AdvertisementCampaignUpdateSchema, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * AdvertisementCampaignsApi - functional programming interface
 * @export
 */
export declare const AdvertisementCampaignsApiFp: (configuration?: AxiosConfiguration) => {
    /**
     *
     * @summary Archive Advertisement Campaign View
     * @param {number} campaignId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    archiveAdvertisementCampaignViewPut(campaignId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     *
     * @summary Create Advertisement Campaign View
     * @param {AdvertisementCampaignCreateSchema} advertisementCampaignCreateSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAdvertisementCampaignViewPost(advertisementCampaignCreateSchema: AdvertisementCampaignCreateSchema, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdvertisementCampaign>>;
    /**
     *
     * @summary Delete Advertisement Campaign View
     * @param {number} campaignId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAdvertisementCampaignViewDelete(campaignId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * ## Available fields for *sort* and *offset*:  - id: int - name: str
     * @summary Get Advertisement Campaings View
     * @param {boolean} isArchived
     * @param {string} [sort] Fields for ordering without spaces and separated by commas.Can be used for ASC and DESC (\&#39;-\&#39; added to the beggining of the field).Example: &amp;sort&#x3D;-username,created_at
     * @param {string} [offset] Values of last received row which used in sort. Example with sort: sort&#x3D;username,-id&amp;offset&#x3D;username123,987
     * @param {number} [limit] Limit of rows count in the response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAdvertisementCampaingsViewGet(isArchived: boolean, sort?: string, offset?: string, limit?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdvertisementCampaignListSchema>>;
    /**
     *
     * @summary Get Advertising Objects View
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAdvertisingObjectsViewGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdvertisingObjectListSchema>>;
    /**
     *
     * @summary Get Campaign Goals View
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCampaignGoalsViewGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CampaignGoalListSchema>>;
    /**
     *
     * @summary Update Advertisement Campaign Status View
     * @param {number} campaignId
     * @param {AdvertisementCampaignUpdateStatusSchema} advertisementCampaignUpdateStatusSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAdvertisementCampaignStatusViewPatch(campaignId: number, advertisementCampaignUpdateStatusSchema: AdvertisementCampaignUpdateStatusSchema, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdvertisementCampaign>>;
    /**
     *
     * @summary Update Advertisement Campaign View
     * @param {number} campaignId
     * @param {AdvertisementCampaignUpdateSchema} advertisementCampaignUpdateSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAdvertisementCampaignViewPatch(campaignId: number, advertisementCampaignUpdateSchema: AdvertisementCampaignUpdateSchema, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdvertisementCampaign>>;
};
/**
 * Request parameters for archiveAdvertisementCampaignViewPut operation in AdvertisementCampaignsApi.
 * @export
 * @interface AdvertisementCampaignsApiArchiveAdvertisementCampaignViewPutRequest
 */
export interface AdvertisementCampaignsApiArchiveAdvertisementCampaignViewPutRequest {
    /**
     *
     * @type {number}
     * @memberof AdvertisementCampaignsApiArchiveAdvertisementCampaignViewPut
     */
    readonly campaignId: number;
}
/**
 * Request parameters for createAdvertisementCampaignViewPost operation in AdvertisementCampaignsApi.
 * @export
 * @interface AdvertisementCampaignsApiCreateAdvertisementCampaignViewPostRequest
 */
export interface AdvertisementCampaignsApiCreateAdvertisementCampaignViewPostRequest {
    /**
     *
     * @type {AdvertisementCampaignCreateSchema}
     * @memberof AdvertisementCampaignsApiCreateAdvertisementCampaignViewPost
     */
    readonly advertisementCampaignCreateSchema: AdvertisementCampaignCreateSchema;
}
/**
 * Request parameters for deleteAdvertisementCampaignViewDelete operation in AdvertisementCampaignsApi.
 * @export
 * @interface AdvertisementCampaignsApiDeleteAdvertisementCampaignViewDeleteRequest
 */
export interface AdvertisementCampaignsApiDeleteAdvertisementCampaignViewDeleteRequest {
    /**
     *
     * @type {number}
     * @memberof AdvertisementCampaignsApiDeleteAdvertisementCampaignViewDelete
     */
    readonly campaignId: number;
}
/**
 * Request parameters for getAdvertisementCampaingsViewGet operation in AdvertisementCampaignsApi.
 * @export
 * @interface AdvertisementCampaignsApiGetAdvertisementCampaingsViewGetRequest
 */
export interface AdvertisementCampaignsApiGetAdvertisementCampaingsViewGetRequest {
    /**
     *
     * @type {boolean}
     * @memberof AdvertisementCampaignsApiGetAdvertisementCampaingsViewGet
     */
    readonly isArchived: boolean;
    /**
     * Fields for ordering without spaces and separated by commas.Can be used for ASC and DESC (\&#39;-\&#39; added to the beggining of the field).Example: &amp;sort&#x3D;-username,created_at
     * @type {string}
     * @memberof AdvertisementCampaignsApiGetAdvertisementCampaingsViewGet
     */
    readonly sort?: string;
    /**
     * Values of last received row which used in sort. Example with sort: sort&#x3D;username,-id&amp;offset&#x3D;username123,987
     * @type {string}
     * @memberof AdvertisementCampaignsApiGetAdvertisementCampaingsViewGet
     */
    readonly offset?: string;
    /**
     * Limit of rows count in the response
     * @type {number}
     * @memberof AdvertisementCampaignsApiGetAdvertisementCampaingsViewGet
     */
    readonly limit?: number;
}
/**
 * Request parameters for updateAdvertisementCampaignStatusViewPatch operation in AdvertisementCampaignsApi.
 * @export
 * @interface AdvertisementCampaignsApiUpdateAdvertisementCampaignStatusViewPatchRequest
 */
export interface AdvertisementCampaignsApiUpdateAdvertisementCampaignStatusViewPatchRequest {
    /**
     *
     * @type {number}
     * @memberof AdvertisementCampaignsApiUpdateAdvertisementCampaignStatusViewPatch
     */
    readonly campaignId: number;
    /**
     *
     * @type {AdvertisementCampaignUpdateStatusSchema}
     * @memberof AdvertisementCampaignsApiUpdateAdvertisementCampaignStatusViewPatch
     */
    readonly advertisementCampaignUpdateStatusSchema: AdvertisementCampaignUpdateStatusSchema;
}
/**
 * Request parameters for updateAdvertisementCampaignViewPatch operation in AdvertisementCampaignsApi.
 * @export
 * @interface AdvertisementCampaignsApiUpdateAdvertisementCampaignViewPatchRequest
 */
export interface AdvertisementCampaignsApiUpdateAdvertisementCampaignViewPatchRequest {
    /**
     *
     * @type {number}
     * @memberof AdvertisementCampaignsApiUpdateAdvertisementCampaignViewPatch
     */
    readonly campaignId: number;
    /**
     *
     * @type {AdvertisementCampaignUpdateSchema}
     * @memberof AdvertisementCampaignsApiUpdateAdvertisementCampaignViewPatch
     */
    readonly advertisementCampaignUpdateSchema: AdvertisementCampaignUpdateSchema;
}
/**
 * AdvertisementCampaignsApi - interface
 * @export
 * @interface AdvertisementCampaignsApi
 */
export interface AdvertisementCampaignsApiInterface {
    /**
     *
     * @summary Archive Advertisement Campaign View
     * @param {number} campaignId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementCampaignsApiInterface
     */
    archiveAdvertisementCampaignViewPut(requestParameters: AdvertisementCampaignsApiArchiveAdvertisementCampaignViewPutRequest, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     *
     * @summary Create Advertisement Campaign View
     * @param {AdvertisementCampaignCreateSchema} advertisementCampaignCreateSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementCampaignsApiInterface
     */
    createAdvertisementCampaignViewPost(requestParameters: AdvertisementCampaignsApiCreateAdvertisementCampaignViewPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<AdvertisementCampaign>;
    /**
     *
     * @summary Delete Advertisement Campaign View
     * @param {number} campaignId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementCampaignsApiInterface
     */
    deleteAdvertisementCampaignViewDelete(requestParameters: AdvertisementCampaignsApiDeleteAdvertisementCampaignViewDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<any>;
    /**
     * ## Available fields for *sort* and *offset*:  - id: int - name: str
     * @summary Get Advertisement Campaings View
     * @param {boolean} isArchived
     * @param {string} [sort] Fields for ordering without spaces and separated by commas.Can be used for ASC and DESC (\&#39;-\&#39; added to the beggining of the field).Example: &amp;sort&#x3D;-username,created_at
     * @param {string} [offset] Values of last received row which used in sort. Example with sort: sort&#x3D;username,-id&amp;offset&#x3D;username123,987
     * @param {number} [limit] Limit of rows count in the response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementCampaignsApiInterface
     */
    getAdvertisementCampaingsViewGet(requestParameters: AdvertisementCampaignsApiGetAdvertisementCampaingsViewGetRequest, options?: RawAxiosRequestConfig): AxiosPromise<AdvertisementCampaignListSchema>;
    /**
     *
     * @summary Get Advertising Objects View
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementCampaignsApiInterface
     */
    getAdvertisingObjectsViewGet(options?: RawAxiosRequestConfig): AxiosPromise<AdvertisingObjectListSchema>;
    /**
     *
     * @summary Get Campaign Goals View
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementCampaignsApiInterface
     */
    getCampaignGoalsViewGet(options?: RawAxiosRequestConfig): AxiosPromise<CampaignGoalListSchema>;
    /**
     *
     * @summary Update Advertisement Campaign Status View
     * @param {number} campaignId
     * @param {AdvertisementCampaignUpdateStatusSchema} advertisementCampaignUpdateStatusSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementCampaignsApiInterface
     */
    updateAdvertisementCampaignStatusViewPatch(requestParameters: AdvertisementCampaignsApiUpdateAdvertisementCampaignStatusViewPatchRequest, options?: RawAxiosRequestConfig): AxiosPromise<AdvertisementCampaign>;
    /**
     *
     * @summary Update Advertisement Campaign View
     * @param {number} campaignId
     * @param {AdvertisementCampaignUpdateSchema} advertisementCampaignUpdateSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementCampaignsApiInterface
     */
    updateAdvertisementCampaignViewPatch(requestParameters: AdvertisementCampaignsApiUpdateAdvertisementCampaignViewPatchRequest, options?: RawAxiosRequestConfig): AxiosPromise<AdvertisementCampaign>;
}
/**
 * AdvertisementCampaignsApi - object-oriented interface
 * @export
 * @class AdvertisementCampaignsApi
 * @extends {BaseAPI}
 */
export declare class AdvertisementCampaignsApi extends BaseAPI implements AdvertisementCampaignsApiInterface {
    /**
     *
     * @summary Archive Advertisement Campaign View
     * @param {AdvertisementCampaignsApiArchiveAdvertisementCampaignViewPutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementCampaignsApi
     */
    archiveAdvertisementCampaignViewPut(requestParameters: AdvertisementCampaignsApiArchiveAdvertisementCampaignViewPutRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     *
     * @summary Create Advertisement Campaign View
     * @param {AdvertisementCampaignsApiCreateAdvertisementCampaignViewPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementCampaignsApi
     */
    createAdvertisementCampaignViewPost(requestParameters: AdvertisementCampaignsApiCreateAdvertisementCampaignViewPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<AdvertisementCampaign, any>>;
    /**
     *
     * @summary Delete Advertisement Campaign View
     * @param {AdvertisementCampaignsApiDeleteAdvertisementCampaignViewDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementCampaignsApi
     */
    deleteAdvertisementCampaignViewDelete(requestParameters: AdvertisementCampaignsApiDeleteAdvertisementCampaignViewDeleteRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * ## Available fields for *sort* and *offset*:  - id: int - name: str
     * @summary Get Advertisement Campaings View
     * @param {AdvertisementCampaignsApiGetAdvertisementCampaingsViewGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementCampaignsApi
     */
    getAdvertisementCampaingsViewGet(requestParameters: AdvertisementCampaignsApiGetAdvertisementCampaingsViewGetRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<AdvertisementCampaignListSchema, any>>;
    /**
     *
     * @summary Get Advertising Objects View
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementCampaignsApi
     */
    getAdvertisingObjectsViewGet(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<AdvertisingObjectListSchema, any>>;
    /**
     *
     * @summary Get Campaign Goals View
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementCampaignsApi
     */
    getCampaignGoalsViewGet(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<CampaignGoalListSchema, any>>;
    /**
     *
     * @summary Update Advertisement Campaign Status View
     * @param {AdvertisementCampaignsApiUpdateAdvertisementCampaignStatusViewPatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementCampaignsApi
     */
    updateAdvertisementCampaignStatusViewPatch(requestParameters: AdvertisementCampaignsApiUpdateAdvertisementCampaignStatusViewPatchRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<AdvertisementCampaign, any>>;
    /**
     *
     * @summary Update Advertisement Campaign View
     * @param {AdvertisementCampaignsApiUpdateAdvertisementCampaignViewPatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementCampaignsApi
     */
    updateAdvertisementCampaignViewPatch(requestParameters: AdvertisementCampaignsApiUpdateAdvertisementCampaignViewPatchRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<AdvertisementCampaign, any>>;
}
