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
import type { FriendlyRole } from './friendly-role';
/**
 *
 * @export
 * @interface SubSchemaChatMember
 */
export interface SubSchemaChatMember {
    /**
     *
     * @type {string}
     * @memberof SubSchemaChatMember
     */
    account_id: string;
    /**
     *
     * @type {FriendlyRole}
     * @memberof SubSchemaChatMember
     */
    role?: FriendlyRole;
}
