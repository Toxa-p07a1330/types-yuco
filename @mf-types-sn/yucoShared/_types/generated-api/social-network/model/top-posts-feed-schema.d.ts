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
import type { TopPostDetailSchema } from './top-post-detail-schema';
/**
 *
 * @export
 * @interface TopPostsFeedSchema
 */
export interface TopPostsFeedSchema {
    /**
     *
     * @type {Array<TopPostDetailSchema>}
     * @memberof TopPostsFeedSchema
     */
    data: Array<TopPostDetailSchema>;
    /**
     *
     * @type {{ [key: string]: number; }}
     * @memberof TopPostsFeedSchema
     */
    mentioned_users?: {
        [key: string]: number;
    };
}
