export declare const select: <K, T>(...func: ((value: T) => false | K)[]) => (value: T) => false | K;
export declare const when: <T extends V | ((args: V) => any), W, V>(test: T, wanted: W) => (value: V) => false | W;
