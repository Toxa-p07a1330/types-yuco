import { ReactNode } from 'react';
export declare const useUpdateLayout: (initialLeftAction: () => ReactNode, initialRightAction: () => ReactNode) => {
    withRightAction: ReactNode;
    withLeftAction: ReactNode;
};
