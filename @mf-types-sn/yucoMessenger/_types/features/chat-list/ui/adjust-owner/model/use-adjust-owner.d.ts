import { IMember } from 'shared/types';
import { SearchbarChangeEventDetail } from '@ionic/react/dist/types/components';
import { IonSearchbarCustomEvent } from '@ionic/core/dist/types/components';
export declare const UseAdjustOwner: () => {
    onClickHandler: (user: IMember) => () => void;
    user: any;
    isLoading: boolean;
    searchUser: any;
    searchUserHandler: (event: IonSearchbarCustomEvent<SearchbarChangeEventDetail>) => void;
    potentialOwners: import("shared/types").TUserSelectionCard[];
    getMembersCallback: () => Promise<void>;
};
