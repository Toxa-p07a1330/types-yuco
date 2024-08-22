import { AxiosInstance, AxiosResponse } from 'axios';
import { YucoBackendApiGetterInterface } from '../../../generated-api/social-network';
import { YucoMessengerApiGetterInterface } from '../../../generated-api/messenger';
import { YucoNotificationsApiGetterInterface } from '../../../generated-api/notifications';
import { YUCOAuthApiGetterInterface } from '../../../generated-api/oauth';
type TYucoAxios<T> = {
    auth: T;
    ntf: T;
    soNet: T;
    messenger: T;
};
type TYucoAxiosInstances = TYucoAxios<AxiosInstance | null>;
export declare const AxiosManager: {
    init: (callback: () => void) => void;
    getInstance: (instanceType: keyof TYucoAxiosInstances) => AxiosInstance;
    refreshToken: () => Promise<AxiosResponse<any>>;
    api: {
        socialNet: YucoBackendApiGetterInterface;
        messenger: YucoMessengerApiGetterInterface;
        notifications: YucoNotificationsApiGetterInterface;
        oAuth: YUCOAuthApiGetterInterface;
    };
};
export {};
