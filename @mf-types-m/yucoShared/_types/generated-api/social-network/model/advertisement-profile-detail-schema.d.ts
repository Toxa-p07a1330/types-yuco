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
import type { Country } from './country';
import type { Currency } from './currency';
import type { Timezone } from './timezone';
/**
 *
 * @export
 * @interface AdvertisementProfileDetailSchema
 */
export interface AdvertisementProfileDetailSchema {
    /**
     *
     * @type {number}
     * @memberof AdvertisementProfileDetailSchema
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof AdvertisementProfileDetailSchema
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof AdvertisementProfileDetailSchema
     */
    surname: string;
    /**
     *
     * @type {string}
     * @memberof AdvertisementProfileDetailSchema
     */
    patronymic?: string | null;
    /**
     *
     * @type {string}
     * @memberof AdvertisementProfileDetailSchema
     */
    email: string;
    /**
     *
     * @type {string}
     * @memberof AdvertisementProfileDetailSchema
     */
    company?: string | null;
    /**
     * LEGAL: legal<br/>PHYSICAL: physical
     * @type {string}
     * @memberof AdvertisementProfileDetailSchema
     */
    legal_status: string;
    /**
     *
     * @type {boolean}
     * @memberof AdvertisementProfileDetailSchema
     */
    notify_passed_moderation?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AdvertisementProfileDetailSchema
     */
    daily_limit_reached?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AdvertisementProfileDetailSchema
     */
    ad_completed?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AdvertisementProfileDetailSchema
     */
    user_agreement_accepted?: boolean;
    /**
     * BUSINESS: business<br/>PROFESSIONAL: professional
     * @type {string}
     * @memberof AdvertisementProfileDetailSchema
     */
    type: string;
    /**
     *
     * @type {boolean}
     * @memberof AdvertisementProfileDetailSchema
     */
    connect_ord?: boolean;
    /**
     *
     * @type {string}
     * @memberof AdvertisementProfileDetailSchema
     */
    tin: string;
    /**
     *
     * @type {Country}
     * @memberof AdvertisementProfileDetailSchema
     */
    country: Country;
    /**
     *
     * @type {Currency}
     * @memberof AdvertisementProfileDetailSchema
     */
    currency: Currency;
    /**
     *
     * @type {Timezone}
     * @memberof AdvertisementProfileDetailSchema
     */
    timezone: Timezone;
}
