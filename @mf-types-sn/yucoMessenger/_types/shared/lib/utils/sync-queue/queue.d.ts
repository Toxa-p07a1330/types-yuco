import { IRequestPoolCreateTubeProps, IRequestPoolDisableTubeProps, IRequestPoolEnableTubeProps, IRequestPoolInitialProps, IRequestPoolJob, IRequestPoolPushProps, IRequestPoolRemoveProps, IRequestPoolRemoveTubeProps, IRequestPoolTube } from "./types";
export declare class ConcurrentRequestPool {
    private readonly limit;
    private readonly type;
    private counter;
    private tubes;
    constructor({ limit, type, }?: IRequestPoolInitialProps);
    get state(): {
        tubes: {
            [x: string]: IRequestPoolTube;
        };
        limit: number;
        type: 'pop' | 'shift';
        counter: number;
    };
    push: ({ tube, action, key, }: IRequestPoolPushProps) => number | false;
    remove: ({ tube, id, }: IRequestPoolRemoveProps) => boolean;
    createTube: ({ name, limit, type, }: IRequestPoolCreateTubeProps) => boolean;
    removeTube: ({ name, }: IRequestPoolRemoveTubeProps) => IRequestPoolJob[] | false;
    enableTube: ({ name }: IRequestPoolEnableTubeProps) => boolean;
    disableTube: ({ name, }: IRequestPoolDisableTubeProps) => boolean;
    private processTube;
    private processQueue;
}
export declare const yucoRequestPool: ConcurrentRequestPool;
