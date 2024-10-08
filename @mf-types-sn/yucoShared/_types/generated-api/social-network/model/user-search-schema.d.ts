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
import type { ContentSchemaWithoutThumbnail } from './content-schema-without-thumbnail';
/**
 *
 * @export
 * @interface UserSearchSchema
 */
export interface UserSearchSchema {
    /**
     *
     * @type {number}
     * @memberof UserSearchSchema
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof UserSearchSchema
     */
    account_id: string;
    /**
     *
     * @type {string}
     * @memberof UserSearchSchema
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof UserSearchSchema
     */
    username: string;
    /**
     *
     * @type {number}
     * @memberof UserSearchSchema
     */
    followers_count: number;
    /**
     *
     * @type {number}
     * @memberof UserSearchSchema
     */
    score: number;
    /**
     *
     * @type {ContentSchemaWithoutThumbnail}
     * @memberof UserSearchSchema
     */
    profile_photo?: ContentSchemaWithoutThumbnail;
}
