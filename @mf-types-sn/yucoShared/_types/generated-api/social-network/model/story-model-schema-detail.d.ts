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
 * @interface StoryModelSchemaDetail
 */
export interface StoryModelSchemaDetail {
    /**
     *
     * @type {number}
     * @memberof StoryModelSchemaDetail
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof StoryModelSchemaDetail
     */
    deleted_at?: string | null;
    /**
     *
     * @type {string}
     * @memberof StoryModelSchemaDetail
     */
    created_at: string;
    /**
     * Кому разрешено репостить сторис
     * @type {string}
     * @memberof StoryModelSchemaDetail
     */
    reply_permission?: string;
    /**
     *
     * @type {any}
     * @memberof StoryModelSchemaDetail
     */
    configuration?: any;
    /**
     *
     * @type {ContentModelDetailSchema}
     * @memberof StoryModelSchemaDetail
     */
    content: ContentModelDetailSchema;
    /**
     * Реакции истории. (доступны только автору)
     * @type {{ [key: string]: number; }}
     * @memberof StoryModelSchemaDetail
     */
    reactions?: {
        [key: string]: number;
    };
}
