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
/**
 *
 * @export
 * @interface ContentCreateSchemaWithoutThumbnail
 */
export interface ContentCreateSchemaWithoutThumbnail {
    /**
     *
     * @type {string}
     * @memberof ContentCreateSchemaWithoutThumbnail
     */
    'content_type'?: string;
    /**
     *
     * @type {string}
     * @memberof ContentCreateSchemaWithoutThumbnail
     */
    'hash_name': string;
    /**
     * Content settings.
     * @type {object}
     * @memberof ContentCreateSchemaWithoutThumbnail
     */
    'configuration'?: object;
}
