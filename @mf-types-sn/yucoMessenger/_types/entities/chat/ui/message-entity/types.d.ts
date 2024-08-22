import { TUserAccount } from '../../model';
export type EmojiType = {
    id: string;
    badge: string;
};
export type CurrentEmojiType = {
    emoji: EmojiType;
    marks: number | TUserAccount[];
};
