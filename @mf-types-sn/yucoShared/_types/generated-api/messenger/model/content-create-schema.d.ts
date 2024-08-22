/**
 * Yuco Messenger
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
 * @interface ContentCreateSchema
 */
export interface ContentCreateSchema {
    /**
     * id файла
     * @type {string}
     * @memberof ContentCreateSchema
     */
    'hashname': string;
    /**
     * отправить как файл
     * @type {boolean}
     * @memberof ContentCreateSchema
     */
    'is_file'?: boolean;
    /**
     * id thumbnail файла для video
     * @type {string}
     * @memberof ContentCreateSchema
     */
    'thumbnail_hashname'?: string;
}
