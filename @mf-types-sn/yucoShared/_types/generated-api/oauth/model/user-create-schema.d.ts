/**
 * YUCO Auth
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
 * @interface UserCreateSchema
 */
export interface UserCreateSchema {
    /**
     * email or phone number
     * @type {string}
     * @memberof UserCreateSchema
     */
    login: string;
    /**
     *
     * @type {string}
     * @memberof UserCreateSchema
     */
    code?: string;
    /**
     *
     * @type {string}
     * @memberof UserCreateSchema
     */
    password?: string;
    /**
     *
     * @type {string}
     * @memberof UserCreateSchema
     */
    username?: string;
}
