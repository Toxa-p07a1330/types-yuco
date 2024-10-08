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
import type { FilenamesSchema } from '../model';
import type { ReadURL } from '../model';
import type { ReadUrlAllSizes } from '../model';
import type { ResponseReadUrl } from '../model';
import type { UploadUrls } from '../model';
/**
 * IOFilesApi - axios parameter creator
 * @export
 */
export declare const IOFilesApiAxiosParamCreator: (configuration?: AxiosConfiguration) => {
    /**
     *
     * @summary Generate Uploaded Urls View
     * @param {FilenamesSchema} filenamesSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generateUploadedUrlsViewPost: (filenamesSchema: FilenamesSchema, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * ## Get list of url for read file in all available sizes from object storage  Send file hash in body
     * @summary Get Read Url All Sizes View
     * @param {ReadURL} readURL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReadUrlAllSizesViewPost: (readURL: ReadURL, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * ## Get url for read file from object storage  Send file hash in body
     * @summary Get Read Url View
     * @param {ReadURL} readURL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReadUrlViewPost: (readURL: ReadURL, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * IOFilesApi - functional programming interface
 * @export
 */
export declare const IOFilesApiFp: (configuration?: AxiosConfiguration) => {
    /**
     *
     * @summary Generate Uploaded Urls View
     * @param {FilenamesSchema} filenamesSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generateUploadedUrlsViewPost(filenamesSchema: FilenamesSchema, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UploadUrls>>;
    /**
     * ## Get list of url for read file in all available sizes from object storage  Send file hash in body
     * @summary Get Read Url All Sizes View
     * @param {ReadURL} readURL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReadUrlAllSizesViewPost(readURL: ReadURL, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReadUrlAllSizes>>;
    /**
     * ## Get url for read file from object storage  Send file hash in body
     * @summary Get Read Url View
     * @param {ReadURL} readURL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReadUrlViewPost(readURL: ReadURL, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseReadUrl>>;
};
/**
 * Request parameters for generateUploadedUrlsViewPost operation in IOFilesApi.
 * @export
 * @interface IOFilesApiGenerateUploadedUrlsViewPostRequest
 */
export interface IOFilesApiGenerateUploadedUrlsViewPostRequest {
    /**
     *
     * @type {FilenamesSchema}
     * @memberof IOFilesApiGenerateUploadedUrlsViewPost
     */
    readonly filenamesSchema: FilenamesSchema;
}
/**
 * Request parameters for getReadUrlAllSizesViewPost operation in IOFilesApi.
 * @export
 * @interface IOFilesApiGetReadUrlAllSizesViewPostRequest
 */
export interface IOFilesApiGetReadUrlAllSizesViewPostRequest {
    /**
     *
     * @type {ReadURL}
     * @memberof IOFilesApiGetReadUrlAllSizesViewPost
     */
    readonly readURL: ReadURL;
}
/**
 * Request parameters for getReadUrlViewPost operation in IOFilesApi.
 * @export
 * @interface IOFilesApiGetReadUrlViewPostRequest
 */
export interface IOFilesApiGetReadUrlViewPostRequest {
    /**
     *
     * @type {ReadURL}
     * @memberof IOFilesApiGetReadUrlViewPost
     */
    readonly readURL: ReadURL;
}
/**
 * IOFilesApi - interface
 * @export
 * @interface IOFilesApi
 */
export interface IOFilesApiInterface {
    /**
     *
     * @summary Generate Uploaded Urls View
     * @param {FilenamesSchema} filenamesSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IOFilesApiInterface
     */
    generateUploadedUrlsViewPost(requestParameters: IOFilesApiGenerateUploadedUrlsViewPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<UploadUrls>;
    /**
     * ## Get list of url for read file in all available sizes from object storage  Send file hash in body
     * @summary Get Read Url All Sizes View
     * @param {ReadURL} readURL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IOFilesApiInterface
     */
    getReadUrlAllSizesViewPost(requestParameters: IOFilesApiGetReadUrlAllSizesViewPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<ReadUrlAllSizes>;
    /**
     * ## Get url for read file from object storage  Send file hash in body
     * @summary Get Read Url View
     * @param {ReadURL} readURL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IOFilesApiInterface
     */
    getReadUrlViewPost(requestParameters: IOFilesApiGetReadUrlViewPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<ResponseReadUrl>;
}
/**
 * IOFilesApi - object-oriented interface
 * @export
 * @class IOFilesApi
 * @extends {BaseAPI}
 */
export declare class IOFilesApi extends BaseAPI implements IOFilesApiInterface {
    /**
     *
     * @summary Generate Uploaded Urls View
     * @param {IOFilesApiGenerateUploadedUrlsViewPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IOFilesApi
     */
    generateUploadedUrlsViewPost(requestParameters: IOFilesApiGenerateUploadedUrlsViewPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<UploadUrls, any>>;
    /**
     * ## Get list of url for read file in all available sizes from object storage  Send file hash in body
     * @summary Get Read Url All Sizes View
     * @param {IOFilesApiGetReadUrlAllSizesViewPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IOFilesApi
     */
    getReadUrlAllSizesViewPost(requestParameters: IOFilesApiGetReadUrlAllSizesViewPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<ReadUrlAllSizes, any>>;
    /**
     * ## Get url for read file from object storage  Send file hash in body
     * @summary Get Read Url View
     * @param {IOFilesApiGetReadUrlViewPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IOFilesApi
     */
    getReadUrlViewPost(requestParameters: IOFilesApiGetReadUrlViewPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<ResponseReadUrl, any>>;
}
