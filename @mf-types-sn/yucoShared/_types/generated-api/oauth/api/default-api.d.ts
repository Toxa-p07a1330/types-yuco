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
import type { AxiosConfiguration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import { type RequestArgs, BaseAPI } from '../base';
import type { ChangeLoginSchema } from '../model';
import type { ChangePasswordSchema } from '../model';
import type { JwtTokenSchema } from '../model';
import type { LoginSchema } from '../model';
import type { OAuthSchema } from '../model';
import type { RecoveryPasswordSchema } from '../model';
import type { RefreshToken } from '../model';
import type { TokensWithDetail } from '../model';
import type { UserCreateSchema } from '../model';
import type { UserInfoSchema } from '../model';
import type { UserModelSchema } from '../model';
import type { UserUpdateSchema } from '../model';
import type { UserWithTokens } from '../model';
/**
 * DefaultApi - axios parameter creator
 * @export
 */
export declare const DefaultApiAxiosParamCreator: (configuration?: AxiosConfiguration) => {
    /**
     *
     * @summary Apple Auth
     * @param {OAuthSchema} oAuthSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    appleAuthV1AuthApplePost: (oAuthSchema: OAuthSchema, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Auth
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authV1AuthGet: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * ## Change login (phone or email) is divided into four stages:  1 step: send only empty request. ```     Example Request {      } ```  2 step: send **code** ```     Example Request {         \"code\": \"222222\"     } ```   3 step: send **new_login** abd **code** ```     Example Request {         \"code\": \"222222\",         \"new_login\": \"new_mail@gmail.com\"     } ```   4 step: send **code**,  **new_login** and **code_new_device** ```     Example Request {         \"code\": \"222222\",         \"code_new_device\": \"222222\",         \"new_login\": \"new_mail@gmail.com\"     } ```
     * @summary Change Login
     * @param {ChangeLoginSchema} changeLoginSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    changeLoginV1UserChangeLoginPost: (changeLoginSchema: ChangeLoginSchema, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Change Password
     * @param {ChangePasswordSchema} changePasswordSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    changePasswordV1UserChangePasswordPost: (changePasswordSchema: ChangePasswordSchema, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * ## User registration is divided into three stages:  1 step: send only **login**. ```     Example Request {         \"login\": \"+13445234565\"     } ```  After that, a confirmation code will be sent  2 step: send **login** and **code** ```     Example Request {         \"login\": \"+13445234565\",         \"code\": \"222222\"     } ```  3 step: send **login**, **code**, **username** and **password** ```     Example Request {         \"login\": \"+13445234565\",         \"code\": \"222222\",         \"username\": \"some-user\",         \"password\": \"password\"     } ```
     * @summary Create User
     * @param {UserCreateSchema} userCreateSchema
     * @param {boolean} [create]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserV1UserPost: (userCreateSchema: UserCreateSchema, create?: boolean, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Deactivate User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deactivateUserV1UserDelete: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Returns user data by his access token.
     * @summary Get User Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserInfoV1UserInfoGet: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Google Auth
     * @param {OAuthSchema} oAuthSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    googleAuthV1AuthGooglePost: (oAuthSchema: OAuthSchema, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Login
     * @param {LoginSchema} loginSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    loginV1AuthLoginPost: (loginSchema: LoginSchema, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Logout
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    logoutV1AuthLogoutPost: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * ## Recovery password is divided into three stages:  1 step: send only **login**. ```     Example Request {         \"login\": \"+13445234565\"     } ```  After that, a confirmation code will be sent  2 step: send  **login** and **code**. ```     Example Request {         \"login\": \"+13445234565\",         \"code\": \"222222\",     } ```  3 step: send **login**, **code** and **new_password** ```     Example Request {         \"login\": \"+13445234565\",         \"code\": \"222222\",         \"new_password\": \"new password\"     } ```
     * @summary Recovery Password
     * @param {RecoveryPasswordSchema} recoveryPasswordSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    recoveryPasswordV1UserRecoveryPasswordPost: (recoveryPasswordSchema: RecoveryPasswordSchema, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Refresh Token
     * @param {RefreshToken} refreshToken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    refreshTokenV1AuthRefreshTokenPost: (refreshToken: RefreshToken, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     *
     * @summary Update User
     * @param {UserUpdateSchema} userUpdateSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUserV1UserPatch: (userUpdateSchema: UserUpdateSchema, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * DefaultApi - functional programming interface
 * @export
 */
export declare const DefaultApiFp: (configuration?: AxiosConfiguration) => {
    /**
     *
     * @summary Apple Auth
     * @param {OAuthSchema} oAuthSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    appleAuthV1AuthApplePost(oAuthSchema: OAuthSchema, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserWithTokens>>;
    /**
     *
     * @summary Auth
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authV1AuthGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * ## Change login (phone or email) is divided into four stages:  1 step: send only empty request. ```     Example Request {      } ```  2 step: send **code** ```     Example Request {         \"code\": \"222222\"     } ```   3 step: send **new_login** abd **code** ```     Example Request {         \"code\": \"222222\",         \"new_login\": \"new_mail@gmail.com\"     } ```   4 step: send **code**,  **new_login** and **code_new_device** ```     Example Request {         \"code\": \"222222\",         \"code_new_device\": \"222222\",         \"new_login\": \"new_mail@gmail.com\"     } ```
     * @summary Change Login
     * @param {ChangeLoginSchema} changeLoginSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    changeLoginV1UserChangeLoginPost(changeLoginSchema: ChangeLoginSchema, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Change Password
     * @param {ChangePasswordSchema} changePasswordSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    changePasswordV1UserChangePasswordPost(changePasswordSchema: ChangePasswordSchema, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokensWithDetail>>;
    /**
     * ## User registration is divided into three stages:  1 step: send only **login**. ```     Example Request {         \"login\": \"+13445234565\"     } ```  After that, a confirmation code will be sent  2 step: send **login** and **code** ```     Example Request {         \"login\": \"+13445234565\",         \"code\": \"222222\"     } ```  3 step: send **login**, **code**, **username** and **password** ```     Example Request {         \"login\": \"+13445234565\",         \"code\": \"222222\",         \"username\": \"some-user\",         \"password\": \"password\"     } ```
     * @summary Create User
     * @param {UserCreateSchema} userCreateSchema
     * @param {boolean} [create]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createUserV1UserPost(userCreateSchema: UserCreateSchema, create?: boolean, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Deactivate User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deactivateUserV1UserDelete(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Returns user data by his access token.
     * @summary Get User Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserInfoV1UserInfoGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserInfoSchema>>;
    /**
     *
     * @summary Google Auth
     * @param {OAuthSchema} oAuthSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    googleAuthV1AuthGooglePost(oAuthSchema: OAuthSchema, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserWithTokens>>;
    /**
     *
     * @summary Login
     * @param {LoginSchema} loginSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    loginV1AuthLoginPost(loginSchema: LoginSchema, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserWithTokens>>;
    /**
     *
     * @summary Logout
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    logoutV1AuthLogoutPost(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     * ## Recovery password is divided into three stages:  1 step: send only **login**. ```     Example Request {         \"login\": \"+13445234565\"     } ```  After that, a confirmation code will be sent  2 step: send  **login** and **code**. ```     Example Request {         \"login\": \"+13445234565\",         \"code\": \"222222\",     } ```  3 step: send **login**, **code** and **new_password** ```     Example Request {         \"login\": \"+13445234565\",         \"code\": \"222222\",         \"new_password\": \"new password\"     } ```
     * @summary Recovery Password
     * @param {RecoveryPasswordSchema} recoveryPasswordSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    recoveryPasswordV1UserRecoveryPasswordPost(recoveryPasswordSchema: RecoveryPasswordSchema, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>>;
    /**
     *
     * @summary Refresh Token
     * @param {RefreshToken} refreshToken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    refreshTokenV1AuthRefreshTokenPost(refreshToken: RefreshToken, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JwtTokenSchema>>;
    /**
     *
     * @summary Update User
     * @param {UserUpdateSchema} userUpdateSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUserV1UserPatch(userUpdateSchema: UserUpdateSchema, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserModelSchema>>;
};
/**
 * Request parameters for appleAuthV1AuthApplePost operation in DefaultApi.
 * @export
 * @interface DefaultApiAppleAuthV1AuthApplePostRequest
 */
export interface DefaultApiAppleAuthV1AuthApplePostRequest {
    /**
     *
     * @type {OAuthSchema}
     * @memberof DefaultApiAppleAuthV1AuthApplePost
     */
    readonly oAuthSchema: OAuthSchema;
}
/**
 * Request parameters for changeLoginV1UserChangeLoginPost operation in DefaultApi.
 * @export
 * @interface DefaultApiChangeLoginV1UserChangeLoginPostRequest
 */
export interface DefaultApiChangeLoginV1UserChangeLoginPostRequest {
    /**
     *
     * @type {ChangeLoginSchema}
     * @memberof DefaultApiChangeLoginV1UserChangeLoginPost
     */
    readonly changeLoginSchema: ChangeLoginSchema;
}
/**
 * Request parameters for changePasswordV1UserChangePasswordPost operation in DefaultApi.
 * @export
 * @interface DefaultApiChangePasswordV1UserChangePasswordPostRequest
 */
export interface DefaultApiChangePasswordV1UserChangePasswordPostRequest {
    /**
     *
     * @type {ChangePasswordSchema}
     * @memberof DefaultApiChangePasswordV1UserChangePasswordPost
     */
    readonly changePasswordSchema: ChangePasswordSchema;
}
/**
 * Request parameters for createUserV1UserPost operation in DefaultApi.
 * @export
 * @interface DefaultApiCreateUserV1UserPostRequest
 */
export interface DefaultApiCreateUserV1UserPostRequest {
    /**
     *
     * @type {UserCreateSchema}
     * @memberof DefaultApiCreateUserV1UserPost
     */
    readonly userCreateSchema: UserCreateSchema;
    /**
     *
     * @type {boolean}
     * @memberof DefaultApiCreateUserV1UserPost
     */
    readonly create?: boolean;
}
/**
 * Request parameters for googleAuthV1AuthGooglePost operation in DefaultApi.
 * @export
 * @interface DefaultApiGoogleAuthV1AuthGooglePostRequest
 */
export interface DefaultApiGoogleAuthV1AuthGooglePostRequest {
    /**
     *
     * @type {OAuthSchema}
     * @memberof DefaultApiGoogleAuthV1AuthGooglePost
     */
    readonly oAuthSchema: OAuthSchema;
}
/**
 * Request parameters for loginV1AuthLoginPost operation in DefaultApi.
 * @export
 * @interface DefaultApiLoginV1AuthLoginPostRequest
 */
export interface DefaultApiLoginV1AuthLoginPostRequest {
    /**
     *
     * @type {LoginSchema}
     * @memberof DefaultApiLoginV1AuthLoginPost
     */
    readonly loginSchema: LoginSchema;
}
/**
 * Request parameters for recoveryPasswordV1UserRecoveryPasswordPost operation in DefaultApi.
 * @export
 * @interface DefaultApiRecoveryPasswordV1UserRecoveryPasswordPostRequest
 */
export interface DefaultApiRecoveryPasswordV1UserRecoveryPasswordPostRequest {
    /**
     *
     * @type {RecoveryPasswordSchema}
     * @memberof DefaultApiRecoveryPasswordV1UserRecoveryPasswordPost
     */
    readonly recoveryPasswordSchema: RecoveryPasswordSchema;
}
/**
 * Request parameters for refreshTokenV1AuthRefreshTokenPost operation in DefaultApi.
 * @export
 * @interface DefaultApiRefreshTokenV1AuthRefreshTokenPostRequest
 */
export interface DefaultApiRefreshTokenV1AuthRefreshTokenPostRequest {
    /**
     *
     * @type {RefreshToken}
     * @memberof DefaultApiRefreshTokenV1AuthRefreshTokenPost
     */
    readonly refreshToken: RefreshToken;
}
/**
 * Request parameters for updateUserV1UserPatch operation in DefaultApi.
 * @export
 * @interface DefaultApiUpdateUserV1UserPatchRequest
 */
export interface DefaultApiUpdateUserV1UserPatchRequest {
    /**
     *
     * @type {UserUpdateSchema}
     * @memberof DefaultApiUpdateUserV1UserPatch
     */
    readonly userUpdateSchema: UserUpdateSchema;
}
/**
 * DefaultApi - interface
 * @export
 * @interface DefaultApi
 */
export interface DefaultApiInterface {
    /**
     *
     * @summary Apple Auth
     * @param {OAuthSchema} oAuthSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    appleAuthV1AuthApplePost(requestParameters: DefaultApiAppleAuthV1AuthApplePostRequest, options?: RawAxiosRequestConfig): AxiosPromise<UserWithTokens>;
    /**
     *
     * @summary Auth
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    authV1AuthGet(options?: RawAxiosRequestConfig): AxiosPromise<any>;
    /**
     * ## Change login (phone or email) is divided into four stages:  1 step: send only empty request. ```     Example Request {      } ```  2 step: send **code** ```     Example Request {         \"code\": \"222222\"     } ```   3 step: send **new_login** abd **code** ```     Example Request {         \"code\": \"222222\",         \"new_login\": \"new_mail@gmail.com\"     } ```   4 step: send **code**,  **new_login** and **code_new_device** ```     Example Request {         \"code\": \"222222\",         \"code_new_device\": \"222222\",         \"new_login\": \"new_mail@gmail.com\"     } ```
     * @summary Change Login
     * @param {ChangeLoginSchema} changeLoginSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    changeLoginV1UserChangeLoginPost(requestParameters: DefaultApiChangeLoginV1UserChangeLoginPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<any>;
    /**
     *
     * @summary Change Password
     * @param {ChangePasswordSchema} changePasswordSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    changePasswordV1UserChangePasswordPost(requestParameters: DefaultApiChangePasswordV1UserChangePasswordPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<TokensWithDetail>;
    /**
     * ## User registration is divided into three stages:  1 step: send only **login**. ```     Example Request {         \"login\": \"+13445234565\"     } ```  After that, a confirmation code will be sent  2 step: send **login** and **code** ```     Example Request {         \"login\": \"+13445234565\",         \"code\": \"222222\"     } ```  3 step: send **login**, **code**, **username** and **password** ```     Example Request {         \"login\": \"+13445234565\",         \"code\": \"222222\",         \"username\": \"some-user\",         \"password\": \"password\"     } ```
     * @summary Create User
     * @param {UserCreateSchema} userCreateSchema
     * @param {boolean} [create]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    createUserV1UserPost(requestParameters: DefaultApiCreateUserV1UserPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<any>;
    /**
     *
     * @summary Deactivate User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    deactivateUserV1UserDelete(options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     * Returns user data by his access token.
     * @summary Get User Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getUserInfoV1UserInfoGet(options?: RawAxiosRequestConfig): AxiosPromise<UserInfoSchema>;
    /**
     *
     * @summary Google Auth
     * @param {OAuthSchema} oAuthSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    googleAuthV1AuthGooglePost(requestParameters: DefaultApiGoogleAuthV1AuthGooglePostRequest, options?: RawAxiosRequestConfig): AxiosPromise<UserWithTokens>;
    /**
     *
     * @summary Login
     * @param {LoginSchema} loginSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    loginV1AuthLoginPost(requestParameters: DefaultApiLoginV1AuthLoginPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<UserWithTokens>;
    /**
     *
     * @summary Logout
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    logoutV1AuthLogoutPost(options?: RawAxiosRequestConfig): AxiosPromise<any>;
    /**
     * ## Recovery password is divided into three stages:  1 step: send only **login**. ```     Example Request {         \"login\": \"+13445234565\"     } ```  After that, a confirmation code will be sent  2 step: send  **login** and **code**. ```     Example Request {         \"login\": \"+13445234565\",         \"code\": \"222222\",     } ```  3 step: send **login**, **code** and **new_password** ```     Example Request {         \"login\": \"+13445234565\",         \"code\": \"222222\",         \"new_password\": \"new password\"     } ```
     * @summary Recovery Password
     * @param {RecoveryPasswordSchema} recoveryPasswordSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    recoveryPasswordV1UserRecoveryPasswordPost(requestParameters: DefaultApiRecoveryPasswordV1UserRecoveryPasswordPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<any>;
    /**
     *
     * @summary Refresh Token
     * @param {RefreshToken} refreshToken
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    refreshTokenV1AuthRefreshTokenPost(requestParameters: DefaultApiRefreshTokenV1AuthRefreshTokenPostRequest, options?: RawAxiosRequestConfig): AxiosPromise<JwtTokenSchema>;
    /**
     *
     * @summary Update User
     * @param {UserUpdateSchema} userUpdateSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    updateUserV1UserPatch(requestParameters: DefaultApiUpdateUserV1UserPatchRequest, options?: RawAxiosRequestConfig): AxiosPromise<UserModelSchema>;
}
/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export declare class DefaultApi extends BaseAPI implements DefaultApiInterface {
    /**
     *
     * @summary Apple Auth
     * @param {DefaultApiAppleAuthV1AuthApplePostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    appleAuthV1AuthApplePost(requestParameters: DefaultApiAppleAuthV1AuthApplePostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<UserWithTokens, any>>;
    /**
     *
     * @summary Auth
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    authV1AuthGet(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * ## Change login (phone or email) is divided into four stages:  1 step: send only empty request. ```     Example Request {      } ```  2 step: send **code** ```     Example Request {         \"code\": \"222222\"     } ```   3 step: send **new_login** abd **code** ```     Example Request {         \"code\": \"222222\",         \"new_login\": \"new_mail@gmail.com\"     } ```   4 step: send **code**,  **new_login** and **code_new_device** ```     Example Request {         \"code\": \"222222\",         \"code_new_device\": \"222222\",         \"new_login\": \"new_mail@gmail.com\"     } ```
     * @summary Change Login
     * @param {DefaultApiChangeLoginV1UserChangeLoginPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    changeLoginV1UserChangeLoginPost(requestParameters: DefaultApiChangeLoginV1UserChangeLoginPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Change Password
     * @param {DefaultApiChangePasswordV1UserChangePasswordPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    changePasswordV1UserChangePasswordPost(requestParameters: DefaultApiChangePasswordV1UserChangePasswordPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<TokensWithDetail, any>>;
    /**
     * ## User registration is divided into three stages:  1 step: send only **login**. ```     Example Request {         \"login\": \"+13445234565\"     } ```  After that, a confirmation code will be sent  2 step: send **login** and **code** ```     Example Request {         \"login\": \"+13445234565\",         \"code\": \"222222\"     } ```  3 step: send **login**, **code**, **username** and **password** ```     Example Request {         \"login\": \"+13445234565\",         \"code\": \"222222\",         \"username\": \"some-user\",         \"password\": \"password\"     } ```
     * @summary Create User
     * @param {DefaultApiCreateUserV1UserPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    createUserV1UserPost(requestParameters: DefaultApiCreateUserV1UserPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Deactivate User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    deactivateUserV1UserDelete(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<void, any>>;
    /**
     * Returns user data by his access token.
     * @summary Get User Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    getUserInfoV1UserInfoGet(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<UserInfoSchema, any>>;
    /**
     *
     * @summary Google Auth
     * @param {DefaultApiGoogleAuthV1AuthGooglePostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    googleAuthV1AuthGooglePost(requestParameters: DefaultApiGoogleAuthV1AuthGooglePostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<UserWithTokens, any>>;
    /**
     *
     * @summary Login
     * @param {DefaultApiLoginV1AuthLoginPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    loginV1AuthLoginPost(requestParameters: DefaultApiLoginV1AuthLoginPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<UserWithTokens, any>>;
    /**
     *
     * @summary Logout
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    logoutV1AuthLogoutPost(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * ## Recovery password is divided into three stages:  1 step: send only **login**. ```     Example Request {         \"login\": \"+13445234565\"     } ```  After that, a confirmation code will be sent  2 step: send  **login** and **code**. ```     Example Request {         \"login\": \"+13445234565\",         \"code\": \"222222\",     } ```  3 step: send **login**, **code** and **new_password** ```     Example Request {         \"login\": \"+13445234565\",         \"code\": \"222222\",         \"new_password\": \"new password\"     } ```
     * @summary Recovery Password
     * @param {DefaultApiRecoveryPasswordV1UserRecoveryPasswordPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    recoveryPasswordV1UserRecoveryPasswordPost(requestParameters: DefaultApiRecoveryPasswordV1UserRecoveryPasswordPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     *
     * @summary Refresh Token
     * @param {DefaultApiRefreshTokenV1AuthRefreshTokenPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    refreshTokenV1AuthRefreshTokenPost(requestParameters: DefaultApiRefreshTokenV1AuthRefreshTokenPostRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<JwtTokenSchema, any>>;
    /**
     *
     * @summary Update User
     * @param {DefaultApiUpdateUserV1UserPatchRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    updateUserV1UserPatch(requestParameters: DefaultApiUpdateUserV1UserPatchRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<UserModelSchema, any>>;
}
