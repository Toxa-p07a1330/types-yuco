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
 * @interface AdvertisementProfileNotifySettingsSchema
 */
export interface AdvertisementProfileNotifySettingsSchema {
    /**
     *
     * @type {boolean}
     * @memberof AdvertisementProfileNotifySettingsSchema
     */
    notify_passed_moderation: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AdvertisementProfileNotifySettingsSchema
     */
    daily_limit_reached: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AdvertisementProfileNotifySettingsSchema
     */
    ad_completed: boolean;
}
