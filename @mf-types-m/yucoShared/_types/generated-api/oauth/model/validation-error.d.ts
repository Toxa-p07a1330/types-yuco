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
import type { ValidationErrorLocInner } from './validation-error-loc-inner';
/**
 *
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     *
     * @type {Array<ValidationErrorLocInner>}
     * @memberof ValidationError
     */
    'loc': Array<ValidationErrorLocInner>;
    /**
     *
     * @type {string}
     * @memberof ValidationError
     */
    'msg': string;
    /**
     *
     * @type {string}
     * @memberof ValidationError
     */
    'type': string;
}
