interface IUpdateInterface {
    dy: number;
    y: number;
    v: number;
    dv: number;
}
export declare const Inertia: ({ velocity, acceleration, onUpdate, onCancel, onComplete }: {
    velocity: number;
    acceleration: number;
    onUpdate: (pos: IUpdateInterface) => any;
    onCancel?: (() => any) | undefined;
    onComplete?: (() => any) | undefined;
}) => {
    cancelInertia: () => void;
    pauseInertia: () => void;
    resumeInertia: () => void;
};
export {};
