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
 * An enum that represents the implemented types of chats in the messenger.
 * @export
 * @enum {string}
 */
export declare const Chat: {
    readonly Private: "private";
    readonly GroupOpen: "group_open";
    readonly GroupPrivate: "group_private";
};
export type Chat = typeof Chat[keyof typeof Chat];
