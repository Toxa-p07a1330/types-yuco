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
import type { AdvertisementGroup } from './advertisement-group';
import type { Country } from './country';
import type { PostDetailSchema } from './post-detail-schema';
import type { Region } from './region';
import type { StoryModelSchemaDetail } from './story-model-schema-detail';
import type { Town } from './town';
/**
 *
 * @export
 * @interface AdDetailSchema
 */
export interface AdDetailSchema {
    /**
     *
     * @type {number}
     * @memberof AdDetailSchema
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof AdDetailSchema
     */
    title: string;
    /**
     *
     * @type {string}
     * @memberof AdDetailSchema
     */
    ad_text?: string | null;
    /**
     *
     * @type {string}
     * @memberof AdDetailSchema
     */
    landing_link?: string | null;
    /**
     *
     * @type {Array<any>}
     * @memberof AdDetailSchema
     */
    tags?: Array<any> | null;
    /**
     *
     * @type {number}
     * @memberof AdDetailSchema
     */
    impression_limit?: number | null;
    /**
     *
     * @type {number}
     * @memberof AdDetailSchema
     */
    impression_limit_for_one_user?: number | null;
    /**
     * NEW: new<br/>PAUSE: pause<br/>ACTIVE: active<br/>REJECTED: rejected<br/>MODERATED: moderated<br/>COMPLETED: completed<br/>SCHEDULED: scheduled
     * @type {string}
     * @memberof AdDetailSchema
     */
    status: string;
    /**
     *
     * @type {boolean}
     * @memberof AdDetailSchema
     */
    is_archived?: boolean;
    /**
     *
     * @type {string}
     * @memberof AdDetailSchema
     */
    start_date: string;
    /**
     *
     * @type {string}
     * @memberof AdDetailSchema
     */
    end_date: string;
    /**
     * STORY: story<br/>POST: post
     * @type {string}
     * @memberof AdDetailSchema
     */
    variation: string;
    /**
     * INTERACTIONS: interactions<br/>VIEWS: views
     * @type {string}
     * @memberof AdDetailSchema
     */
    target: string;
    /**
     *
     * @type {AdvertisementGroup}
     * @memberof AdDetailSchema
     */
    advertisement_group?: AdvertisementGroup;
    /**
     *
     * @type {Array<Town>}
     * @memberof AdDetailSchema
     */
    cities: Array<Town>;
    /**
     *
     * @type {Array<Region>}
     * @memberof AdDetailSchema
     */
    regions: Array<Region>;
    /**
     *
     * @type {Array<Country>}
     * @memberof AdDetailSchema
     */
    countries: Array<Country>;
    /**
     *
     * @type {PostDetailSchema}
     * @memberof AdDetailSchema
     */
    post?: PostDetailSchema;
    /**
     *
     * @type {StoryModelSchemaDetail}
     * @memberof AdDetailSchema
     */
    story?: StoryModelSchemaDetail;
}
