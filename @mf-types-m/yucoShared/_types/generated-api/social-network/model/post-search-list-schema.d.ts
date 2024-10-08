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
import type { PostSearchSchema } from './post-search-schema';
/**
 *
 * @export
 * @interface PostSearchListSchema
 */
export interface PostSearchListSchema {
    /**
     *
     * @type {Array<PostSearchSchema>}
     * @memberof PostSearchListSchema
     */
    data: Array<PostSearchSchema>;
    /**
     *
     * @type {{ [key: string]: number; }}
     * @memberof PostSearchListSchema
     */
    mentioned_users?: {
        [key: string]: number;
    };
}
