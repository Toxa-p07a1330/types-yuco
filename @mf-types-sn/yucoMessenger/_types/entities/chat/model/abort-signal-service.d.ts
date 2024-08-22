export interface IAbortSignal {
    id: string;
    controller: AbortController;
}
declare const AbortSignalsService: {
    getInstance: () => {
        addSignal: (signal: IAbortSignal) => void;
        abortSignal: (id: string) => void;
        removeSignal: (id: string) => void;
        isAborted: (id: string) => boolean | undefined;
    };
};
export default AbortSignalsService;
