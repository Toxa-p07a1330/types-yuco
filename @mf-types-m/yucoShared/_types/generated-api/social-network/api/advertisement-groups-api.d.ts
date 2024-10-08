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
import type { AdvertisementGroupCreateSchema } from '../model';
import type { AdvertisementGroupDetailSchema } from '../model';
import type { AdvertisementGroupUpdateSchema } from '../model';
import type { AdvertisementGroupUpdateStatusSchema } from '../model';
import type { GroupPositionListSchema } from '../model';
import type { PriceTypeListSchema } from '../model';
/**
 * AdvertisementGroupsApi - axios parameter creator
 * @export
 */
export declare const AdvertisementGroupsApiAxiosParamCreator: (configuration?: AxiosConfiguration) => {
    /**
     *
     * @summary Create Advertisement Group View
     * @param {AdvertisementGroupCreateSchema} advertisementGroupCreateSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAdvertisementGroupViewPost: (advertisementGroupCreateSchema: AdvertisementGroupCreateSchema, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Delete Advertisement Group View
     * @param {number} groupId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAdvertisementGroupViewDelete: (groupId: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Ad Positions View
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAdPositionsViewGet: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Get Payment Models View
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPaymentModelsViewGet: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update Advertisement Group View
     * @param {number} groupId
     * @param {AdvertisementGroupUpdateSchema} advertisementGroupUpdateSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAdvertisementGroupViewPatch: (groupId: number, advertisementGroupUpdateSchema: AdvertisementGroupUpdateSchema, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update Group Status View
     * @param {number} groupId
     * @param {AdvertisementGroupUpdateStatusSchema} advertisementGroupUpdateStatusSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateGroupStatusViewPatch: (groupId: number, advertisementGroupUpdateStatusSchema: AdvertisementGroupUpdateStatusSchema, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * AdvertisementGroupsApi - functional programming interface
 * @export
 */
export declare const AdvertisementGroupsApiFp: (configuration?: AxiosConfiguration) => {
    /**
     *
     * @summary Create Advertisement Group View
     * @param {AdvertisementGroupCreateSchema} advertisementGroupCreateSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createAdvertisementGroupViewPost(advertisementGroupCreateSchema: AdvertisementGroupCreateSchema, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdvertisementGroupDetailSchema>>;
    /**
     *
     * @summary Delete Advertisement Group View
     * @param {number} groupId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteAdvertisementGroupViewDelete(groupId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Get Ad Positions View
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAdPositionsViewGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupPositionListSchema>>;
    /**
     *
     * @summary Get Payment Models View
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getPaymentModelsViewGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PriceTypeListSchema>>;
    /**
     *
     * @summary Update Advertisement Group View
     * @param {number} groupId
     * @param {AdvertisementGroupUpdateSchema} advertisementGroupUpdateSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateAdvertisementGroupViewPatch(groupId: number, advertisementGroupUpdateSchema: AdvertisementGroupUpdateSchema, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdvertisementGroupDetailSchema>>;
    /**
     *
     * @summary Update Group Status View
     * @param {number} groupId
     * @param {AdvertisementGroupUpdateStatusSchema} advertisementGroupUpdateStatusSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateGroupStatusViewPatch(groupId: number, advertisementGroupUpdateStatusSchema: AdvertisementGroupUpdateStatusSchema, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdvertisementGroupDetailSchema>>;
};
/**
 * Request parameters for createAdvertisementGroupViewPost operation in AdvertisementGroupsApi.
 * @export
 * @interface AdvertisementGroupsApiCreateAdvertisementGroupViewPostRequest
 */
export interface AdvertisementGroupsApiCreateAdvertisementGroupViewPostRequest {
    /**
     *
     * @type {AdvertisementGroupCreateSchema}
     * @memberof AdvertisementGroupsApiCreateAdvertisementGroupViewPost
     */
    readonly advertisementGroupCreateSchema: AdvertisementGroupCreateSchema;
}
/**
 * Request parameters for deleteAdvertisementGroupViewDelete operation in AdvertisementGroupsApi.
 * @export
 * @interface AdvertisementGroupsApiDeleteAdvertisementGroupViewDeleteRequest
 */
export interface AdvertisementGroupsApiDeleteAdvertisementGroupViewDeleteRequest {
    /**
     *
     * @type {number}
     * @memberof AdvertisementGroupsApiDeleteAdvertisementGroupViewDelete
     */
    readonly groupId: number;
}
/**
 * Request parameters for updateAdvertisementGroupViewPatch operation in AdvertisementGroupsApi.
 * @export
 * @interface AdvertisementGroupsApiUpdateAdvertisementGroupViewPatchRequest
 */
export interface AdvertisementGroupsApiUpdateAdvertisementGroupViewPatchRequest {
    /**
     *
     * @type {number}
     * @memberof AdvertisementGroupsApiUpdateAdvertisementGroupViewPatch
     */
    readonly groupId: number;
    /**
     *
     * @type {AdvertisementGroupUpdateSchema}
     * @memberof AdvertisementGroupsApiUpdateAdvertisementGroupViewPatch
     */
    readonly advertisementGroupUpdateSchema: AdvertisementGroupUpdateSchema;
}
/**
 * Request parameters for updateGroupStatusViewPatch operation in AdvertisementGroupsApi.
 * @export
 * @interface AdvertisementGroupsApiUpdateGroupStatusViewPatchRequest
 */
export interface AdvertisementGroupsApiUpdateGroupStatusViewPatchRequest {
    /**
     *
     * @type {number}
     * @memberof AdvertisementGroupsApiUpdateGroupStatusViewPatch
     */
    readonly groupId: number;
    /**
     *
     * @type {AdvertisementGroupUpdateStatusSchema}
     * @memberof AdvertisementGroupsApiUpdateGroupStatusViewPatch
     */
    readonly advertisementGroupUpdateStatusSchema: AdvertisementGroupUpdateStatusSchema;
}
/**
 * AdvertisementGroupsApi - interface
 * @export
 * @interface AdvertisementGroupsApi
 */
export interface AdvertisementGroupsApiInterface {
    /**
     *
     * @summary Create Advertisement Group View
     * @param {AdvertisementGroupCreateSchema} advertisementGroupCreateSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementGroupsApiInterface
     */
    createAdvertisementGroupViewPost(requestParameters: AdvertisementGroupsApiCreateAdvertisementGroupViewPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<AdvertisementGroupDetailSchema>;
    /**
     *
     * @summary Delete Advertisement Group View
     * @param {number} groupId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementGroupsApiInterface
     */
    deleteAdvertisementGroupViewDelete(requestParameters: AdvertisementGroupsApiDeleteAdvertisementGroupViewDeleteRequest, options?: RawAxiosRequestConfig): AxiosPromise<any>;
    /**
     *
     * @summary Get Ad Positions View
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementGroupsApiInterface
     */
    getAdPositionsViewGet(options?: RawAxiosRequestConfig): AxiosPromise<GroupPositionListSchema>;
    /**
     *
     * @summary Get Payment Models View
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementGroupsApiInterface
     */
    getPaymentModelsViewGet(options?: RawAxiosRequestConfig): AxiosPromise<PriceTypeListSchema>;
    /**
     *
     * @summary Update Advertisement Group View
     * @param {number} groupId
     * @param {AdvertisementGroupUpdateSchema} advertisementGroupUpdateSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementGroupsApiInterface
     */
    updateAdvertisementGroupViewPatch(requestParameters: AdvertisementGroupsApiUpdateAdvertisementGroupViewPatchRequest, options?: RawAxiosRequestConfig): AxiosPromise<AdvertisementGroupDetailSchema>;
    /**
     *
     * @summary Update Group Status View
     * @param {number} groupId
     * @param {AdvertisementGroupUpdateStatusSchema} advertisementGroupUpdateStatusSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementGroupsApiInterface
     */
    updateGroupStatusViewPatch(requestParameters: AdvertisementGroupsApiUpdateGroupStatusViewPatchRequest, options?: RawAxiosRequestConfig): AxiosPromise<AdvertisementGroupDetailSchema>;
}
/**
 * AdvertisementGroupsApi - object-oriented interface
 * @export
 * @class AdvertisementGroupsApi
 * @extends {BaseAPI}
 */
export declare class AdvertisementGroupsApi extends BaseAPI implements AdvertisementGroupsApiInterface {
    /**
     *
     * @summary Create Advertisement Group View
     * @param {AdvertisementGroupsApiCreateAdvertisementGroupViewPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementGroupsApi
     */
    createAdvertisementGroupViewPost(requestParameters: AdvertisementGroupsApiCreateAdvertisementGroupViewPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<AdvertisementGroupDetailSchema, any>>;
    /**
     *
     * @summary Delete Advertisement Group View
     * @param {AdvertisementGroupsApiDeleteAdvertisementGroupViewDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementGroupsApi
     */
    deleteAdvertisementGroupViewDelete(requestParameters: AdvertisementGroupsApiDeleteAdvertisementGroupViewDeleteRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Get Ad Positions View
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementGroupsApi
     */
    getAdPositionsViewGet(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<GroupPositionListSchema, any>>;
    /**
     *
     * @summary Get Payment Models View
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementGroupsApi
     */
    getPaymentModelsViewGet(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<PriceTypeListSchema, any>>;
    /**
     *
     * @summary Update Advertisement Group View
     * @param {AdvertisementGroupsApiUpdateAdvertisementGroupViewPatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementGroupsApi
     */
    updateAdvertisementGroupViewPatch(requestParameters: AdvertisementGroupsApiUpdateAdvertisementGroupViewPatchRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<AdvertisementGroupDetailSchema, any>>;
    /**
     *
     * @summary Update Group Status View
     * @param {AdvertisementGroupsApiUpdateGroupStatusViewPatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdvertisementGroupsApi
     */
    updateGroupStatusViewPatch(requestParameters: AdvertisementGroupsApiUpdateGroupStatusViewPatchRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<AdvertisementGroupDetailSchema, any>>;
}
