export declare const useUsersSelection: ({ setUsers, getUsers, usersList, defaultBody }: {
    setUsers: (items: any) => void;
    getUsers: (data: any) => Promise<any>;
    usersList: any;
    defaultBody: any;
}) => {
    getUsersCallback: (rewrite?: boolean, body?: any) => Promise<void>;
    isLoading: boolean;
};
