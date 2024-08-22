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
import type { Configuration } from './configuration';
import type { ReadUrlSchema } from './read-url-schema';
import type { SubSchemaUser } from './sub-schema-user';
/**
 *
 * @export
 * @interface SJBGetStory
 */
export interface SJBGetStory {
    /**
     *
     * @type {number}
     * @memberof SJBGetStory
     */
    'id': number;
    /**
     *
     * @type {string}
     * @memberof SJBGetStory
     */
    'hash_name'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof SJBGetStory
     */
    'available_sizes'?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof SJBGetStory
     */
    'thumbnail_hash_name'?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof SJBGetStory
     */
    'thumbnail_available_sizes'?: Array<string>;
    /**
     *
     * @type {Array<ReadUrlSchema>}
     * @memberof SJBGetStory
     */
    'read_urls'?: Array<ReadUrlSchema>;
    /**
     *
     * @type {Array<ReadUrlSchema>}
     * @memberof SJBGetStory
     */
    'thumbnail_read_urls'?: Array<ReadUrlSchema>;
    /**
     *
     * @type {string}
     * @memberof SJBGetStory
     */
    'created_at': string;
    /**
     *
     * @type {boolean}
     * @memberof SJBGetStory
     */
    'reply_allowed': boolean;
    /**
     *
     * @type {Configuration}
     * @memberof SJBGetStory
     */
    'configuration'?: Configuration;
    /**
     * Реакции истории. (доступны только автору)
     * @type {{ [key: string]: number; }}
     * @memberof SJBGetStory
     */
    'reactions'?: {
        [key: string]: number;
    };
    /**
     *
     * @type {boolean}
     * @memberof SJBGetStory
     */
    'viewed'?: boolean;
    /**
     *
     * @type {SubSchemaUser}
     * @memberof SJBGetStory
     */
    'user'?: SubSchemaUser;
}
