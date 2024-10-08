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
import type { ObjectTypeChoices } from './object-type-choices';
/**
 *
 * @export
 * @interface CreateReactionSchema
 */
export interface CreateReactionSchema {
    /**
     *
     * @type {number}
     * @memberof CreateReactionSchema
     */
    object_id: number;
    /**
     *
     * @type {ObjectTypeChoices}
     * @memberof CreateReactionSchema
     */
    object_type: ObjectTypeChoices;
    /**
     * like | dislike | special emoji
     * @type {string}
     * @memberof CreateReactionSchema
     */
    action: string;
}
