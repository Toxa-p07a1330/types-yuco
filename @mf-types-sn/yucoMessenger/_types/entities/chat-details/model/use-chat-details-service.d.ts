import { FriendlyRole } from 'mf-types/yucoShared/_types/generated-api/messenger/model';
import { IMember } from 'shared/types';
export declare const useChatDetailsService: () => {
    getMembers: (uuid: string, offset: number, limit?: number) => Promise<IMember[]>;
    deleteMembers: (uuid: string, members: string[]) => Promise<import("axios").AxiosResponse<void, any>>;
    addMembers: (uuid: string, members: string[]) => Promise<import("axios").AxiosResponse<void, any>>;
    adjustRole: (uuid: string, account_id: string, role: FriendlyRole) => Promise<import("axios").AxiosResponse<void, any>>;
    getInvitationalLink: (uuid: string) => Promise<import("mf-types/yucoShared/_types/generated-api/messenger/model").MSInvitation>;
    updateChat: (uuid: string, data: {
        title?: string;
        icon_hashname?: string;
    }) => Promise<import("axios").AxiosResponse<import("mf-types/yucoShared/_types/generated-api/messenger/model").MSFullChat, any>>;
    getAttachments: (uuid: string, offset: number, limit: number, is_file?: boolean) => Promise<import("mf-types/yucoShared/_types/generated-api/messenger/model").MSAttachmentWithUrls[]>;
};
