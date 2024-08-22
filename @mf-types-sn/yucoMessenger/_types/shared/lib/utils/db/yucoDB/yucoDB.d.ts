import Dexie from 'dexie';
export declare abstract class AbstractYucoDB {
    db: any;
    constructor(db: Dexie);
    get getDB(): any;
    addMessage(message: any): void;
    updateMessage(message: any): void;
    deleteMessage(message: any): void;
    addMessages(messages: any): Promise<void>;
    editMessageByCacheId(cache_id: string, message: string): Promise<void>;
    getMessagesByChatId(uuid: number | string, offset: number, limit: number): Promise<void>;
    getQueueItem(id: number | string): Promise<void>;
    setQueueItem(item: any): Promise<any>;
    getQueueItemsPage(offset: number, limit: number): Promise<void>;
    getQueue(): Promise<void>;
    getQueueItemsAll(): Promise<void>;
    showEstimatedQuota(): Promise<void>;
}
