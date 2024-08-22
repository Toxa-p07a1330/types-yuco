import { AxiosResponse } from 'axios';
export type ExtractedType<T> = T extends AxiosResponse<infer R, any> ? R : never;
