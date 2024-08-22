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
 * @interface AdTemplateDetailSchema
 */
export interface AdTemplateDetailSchema {
    /**
     *
     * @type {number}
     * @memberof AdTemplateDetailSchema
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof AdTemplateDetailSchema
     */
    name: string;
    /**
     * VIDEO: video<br/>IMAGE: image<br/>CAROUSEL: carousel
     * @type {string}
     * @memberof AdTemplateDetailSchema
     */
    ad_type: string;
    /**
     *
     * @type {string}
     * @memberof AdTemplateDetailSchema
     */
    ad_text?: string | null;
    /**
     *
     * @type {string}
     * @memberof AdTemplateDetailSchema
     */
    landing_link?: string | null;
    /**
     *
     * @type {Array<any>}
     * @memberof AdTemplateDetailSchema
     */
    tags?: Array<any> | null;
    /**
     *
     * @type {number}
     * @memberof AdTemplateDetailSchema
     */
    impression_limit?: number | null;
    /**
     *
     * @type {number}
     * @memberof AdTemplateDetailSchema
     */
    impression_limit_for_one_user?: number | null;
    /**
     *
     * @type {Array<ContentModelDetailSchema>}
     * @memberof AdTemplateDetailSchema
     */
    ad_contents: Array<ContentModelDetailSchema>;
}
