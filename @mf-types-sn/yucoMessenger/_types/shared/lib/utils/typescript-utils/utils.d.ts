import { AxiosResponse } from 'axios';
export type IsAny<T> = 0 extends 1 & T ? true : false;
export type IsUnknown<T> = IsAny<T> extends never ? (unknown extends T ? true : never) : never;
export type IsAnyConditional<T, K> = 0 extends 1 & T ? any : K;
export type ExtractedType<T> = IsAny<T> extends true ? any : T extends AxiosResponse<infer R, any> ? R : never;
