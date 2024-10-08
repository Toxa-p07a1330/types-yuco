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
import type { AdType } from './ad-type';
import type { ContentCreateSchema } from './content-create-schema';
/**
 *
 * @export
 * @interface AdTemplateUpdateSchema
 */
export interface AdTemplateUpdateSchema {
    /**
     *
     * @type {string}
     * @memberof AdTemplateUpdateSchema
     */
    name?: string;
    /**
     *
     * @type {AdType}
     * @memberof AdTemplateUpdateSchema
     */
    ad_type: AdType;
    /**
     *
     * @type {Array<ContentCreateSchema>}
     * @memberof AdTemplateUpdateSchema
     */
    ad_contents?: Array<ContentCreateSchema>;
    /**
     *
     * @type {string}
     * @memberof AdTemplateUpdateSchema
     */
    ad_text?: string;
    /**
     *
     * @type {string}
     * @memberof AdTemplateUpdateSchema
     */
    landing_link?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof AdTemplateUpdateSchema
     */
    tags?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof AdTemplateUpdateSchema
     */
    impression_limit?: number;
    /**
     *
     * @type {number}
     * @memberof AdTemplateUpdateSchema
     */
    impression_limit_for_one_user?: number;
}
