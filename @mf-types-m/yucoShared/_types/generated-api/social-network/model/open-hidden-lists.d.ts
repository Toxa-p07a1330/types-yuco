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
 * @interface OpenHiddenLists
 */
export interface OpenHiddenLists {
    /**
     * Список ID пользователей для которых нужно открыть историю
     * @type {Array<number>}
     * @memberof OpenHiddenLists
     */
    'open_list'?: Array<number>;
    /**
     * Список ID пользователей от которых нужно скрыть историю
     * @type {Array<number>}
     * @memberof OpenHiddenLists
     */
    'hidden_list'?: Array<number>;
}
