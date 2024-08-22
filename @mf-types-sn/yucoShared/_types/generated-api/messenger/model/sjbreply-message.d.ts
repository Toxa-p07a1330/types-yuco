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
import type { ContentCreateSchema } from './content-create-schema';
/**
 *
 * @export
 * @interface SJBReplyMessage
 */
export interface SJBReplyMessage {
    /**
     *
     * @type {string}
     * @memberof SJBReplyMessage
     */
    message: string;
    /**
     *
     * @type {string}
     * @memberof SJBReplyMessage
     */
    message_uuid: string;
    /**
     *
     * @type {string}
     * @memberof SJBReplyMessage
     */
    cache_id: string;
    /**
     *
     * @type {Array<ContentCreateSchema>}
     * @memberof SJBReplyMessage
     */
    attachments?: Array<ContentCreateSchema>;
}
