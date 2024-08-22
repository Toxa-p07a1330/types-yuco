import { IMember } from 'shared/types';
import { SearchbarChangeEventDetail } from '@ionic/react/dist/types/components';
import { IonSearchbarCustomEvent } from '@ionic/core/dist/types/components';
export declare const UseNewChat: () => {
    goNewGroupPage: () => void;
    getFollowersCallback: (rewrite?: boolean, body?: any) => Promise<void>;
    onClickHandler: (user: IMember) => Promise<void>;
    goToChat: (uuid: string) => void;
    user: any;
    usersList: never[];
    isLoading: boolean;
    searchUser: any;
    searchUserHandler: (event: IonSearchbarCustomEvent<SearchbarChangeEventDetail>) => void;
};
