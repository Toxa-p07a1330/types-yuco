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
 * @interface AdTemplateCreateSchema
 */
export interface AdTemplateCreateSchema {
    /**
     *
     * @type {string}
     * @memberof AdTemplateCreateSchema
     */
    name?: string;
    /**
     *
     * @type {AdType}
     * @memberof AdTemplateCreateSchema
     */
    ad_type: AdType;
    /**
     *
     * @type {Array<ContentCreateSchema>}
     * @memberof AdTemplateCreateSchema
     */
    ad_contents?: Array<ContentCreateSchema>;
    /**
     *
     * @type {string}
     * @memberof AdTemplateCreateSchema
     */
    ad_text?: string;
    /**
     *
     * @type {string}
     * @memberof AdTemplateCreateSchema
     */
    landing_link?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof AdTemplateCreateSchema
     */
    tags?: Array<string>;
    /**
     *
     * @type {number}
     * @memberof AdTemplateCreateSchema
     */
    impression_limit?: number;
    /**
     *
     * @type {number}
     * @memberof AdTemplateCreateSchema
     */
    impression_limit_for_one_user?: number;
}
