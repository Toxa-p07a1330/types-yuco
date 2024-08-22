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
import type { ContentModelDetailWithoutThumbnail } from './content-model-detail-without-thumbnail';
/**
 *
 * @export
 * @interface UserDetailWithFlags
 */
export interface UserDetailWithFlags {
    /**
     *
     * @type {string}
     * @memberof UserDetailWithFlags
     */
    deleted_at?: string | null;
    /**
     *
     * @type {string}
     * @memberof UserDetailWithFlags
     */
    updated_at?: string | null;
    /**
     *
     * @type {string}
     * @memberof UserDetailWithFlags
     */
    created_at: string;
    /**
     *
     * @type {number}
     * @memberof UserDetailWithFlags
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof UserDetailWithFlags
     */
    name?: string | null;
    /**
     *
     * @type {string}
     * @memberof UserDetailWithFlags
     */
    username: string;
    /**
     *
     * @type {string}
     * @memberof UserDetailWithFlags
     */
    birthday?: string | null;
    /**
     *
     * @type {string}
     * @memberof UserDetailWithFlags
     */
    sex?: string | null;
    /**
     *
     * @type {string}
     * @memberof UserDetailWithFlags
     */
    bio?: string | null;
    /**
     *
     * @type {string}
     * @memberof UserDetailWithFlags
     */
    link?: string | null;
    /**
     *
     * @type {string}
     * @memberof UserDetailWithFlags
     */
    user_type: string;
    /**
     *
     * @type {boolean}
     * @memberof UserDetailWithFlags
     */
    is_active?: boolean;
    /**
     *
     * @type {string}
     * @memberof UserDetailWithFlags
     */
    profession?: string | null;
    /**
     * Account if private (for followers only)
     * @type {boolean}
     * @memberof UserDetailWithFlags
     */
    is_private?: boolean;
    /**
     * Uuid of user in auth service.
     * @type {string}
     * @memberof UserDetailWithFlags
     */
    account_id?: string | null;
    /**
     * Verified badge
     * @type {boolean}
     * @memberof UserDetailWithFlags
     */
    verified?: boolean;
    /**
     *
     * @type {number}
     * @memberof UserDetailWithFlags
     */
    posts_count?: number;
    /**
     *
     * @type {number}
     * @memberof UserDetailWithFlags
     */
    likes_count?: number;
    /**
     *
     * @type {number}
     * @memberof UserDetailWithFlags
     */
    count_followers?: number;
    /**
     *
     * @type {number}
     * @memberof UserDetailWithFlags
     */
    count_following?: number;
    /**
     *
     * @type {number}
     * @memberof UserDetailWithFlags
     */
    count_friends?: number;
    /**
     *
     * @type {number}
     * @memberof UserDetailWithFlags
     */
    following_hashtags_count?: number;
    /**
     *
     * @type {boolean}
     * @memberof UserDetailWithFlags
     */
    is_follow: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserDetailWithFlags
     */
    is_follower: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserDetailWithFlags
     */
    is_follow_request_sent: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserDetailWithFlags
     */
    blocked: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserDetailWithFlags
     */
    in_blacklist: boolean;
    /**
     *
     * @type {ContentModelDetailWithoutThumbnail}
     * @memberof UserDetailWithFlags
     */
    profile_photo?: ContentModelDetailWithoutThumbnail;
    /**
     * All actual stories was viewed.
     * @type {boolean}
     * @memberof UserDetailWithFlags
     */
    actual_stories_viewed?: boolean;
    /**
     *
     * @type {{ [key: string]: number; }}
     * @memberof UserDetailWithFlags
     */
    mentioned_users_in_bio?: {
        [key: string]: number;
    };
}
