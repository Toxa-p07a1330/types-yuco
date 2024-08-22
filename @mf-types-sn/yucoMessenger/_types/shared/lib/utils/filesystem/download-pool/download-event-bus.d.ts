export declare const DownloadEventBus: {
    channels: {};
    subscribe(channelName: string, eventHandler: (data: any) => void): void;
    publish(channelName: string, data: any): void;
    unsubscribe(channelName: string, eventHandler: (data: any) => void): void;
};
