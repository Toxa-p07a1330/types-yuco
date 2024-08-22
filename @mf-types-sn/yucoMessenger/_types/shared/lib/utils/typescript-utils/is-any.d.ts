export type IsAny<T, K> = 0 extends 1 & T ? any : K;
