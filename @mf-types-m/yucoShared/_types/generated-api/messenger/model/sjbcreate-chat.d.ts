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
import type { Chat } from './chat';
import type { SubSchemaChatMember } from './sub-schema-chat-member';
/**
 *
 * @export
 * @interface SJBCreateChat
 */
export interface SJBCreateChat {
    /**
     * Chat title
     * @type {string}
     * @memberof SJBCreateChat
     */
    title?: string;
    /**
     *
     * @type {string}
     * @memberof SJBCreateChat
     */
    icon_hashname?: string;
    /**
     *
     * @type {Array<SubSchemaChatMember>}
     * @memberof SJBCreateChat
     */
    members: Array<SubSchemaChatMember>;
    /**
     *
     * @type {Chat}
     * @memberof SJBCreateChat
     */
    type: Chat;
}
