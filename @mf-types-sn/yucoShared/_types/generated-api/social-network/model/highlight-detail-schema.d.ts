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
import type { ContentModelDetailSchema } from './content-model-detail-schema';
/**
 *
 * @export
 * @interface HighlightDetailSchema
 */
export interface HighlightDetailSchema {
    /**
     *
     * @type {number}
     * @memberof HighlightDetailSchema
     */
    'id': number;
    /**
     *
     * @type {string}
     * @memberof HighlightDetailSchema
     */
    'name': string;
    /**
     *
     * @type {string}
     * @memberof HighlightDetailSchema
     */
    'created_at': string;
    /**
     *
     * @type {ContentModelDetailSchema}
     * @memberof HighlightDetailSchema
     */
    'content'?: ContentModelDetailSchema;
}
