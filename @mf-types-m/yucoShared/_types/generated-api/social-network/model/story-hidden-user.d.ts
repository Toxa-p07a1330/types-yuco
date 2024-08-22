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
 * @interface StoryHiddenUser
 */
export interface StoryHiddenUser {
    /**
     * ID пользователя
     * @type {number}
     * @memberof StoryHiddenUser
     */
    'id': number;
    /**
     * Имя пользователя
     * @type {string}
     * @memberof StoryHiddenUser
     */
    'name': string;
    /**
     * Никнейм
     * @type {string}
     * @memberof StoryHiddenUser
     */
    'username': string;
    /**
     * Аватар
     * @type {string}
     * @memberof StoryHiddenUser
     */
    'profile_photo': string;
    /**
     * Подписан на текущего пользователя
     * @type {boolean}
     * @memberof StoryHiddenUser
     */
    'is_follower': boolean;
    /**
     * Скрыта ли история от данного пользователя
     * @type {boolean}
     * @memberof StoryHiddenUser
     */
    'is_hidden': boolean;
}
