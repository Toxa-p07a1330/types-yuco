import { TChatMutePeriod } from 'shared/types';
export declare const ChatControlsList: ({ showControls, state, callbacks }: {
    showControls: boolean;
    state: {
        muted: TChatMutePeriod | null;
        pined: any;
        archived: any;
    };
    callbacks: any;
}) => import("react/jsx-runtime").JSX.Element;
