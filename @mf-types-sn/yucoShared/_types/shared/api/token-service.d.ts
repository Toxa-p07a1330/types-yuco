export declare const TokenService: {
    getLocalRefreshToken: () => {
        refreshToken: string;
        refreshTokenEndDate: number;
    };
    getLocalAccessToken: () => string;
    updateLocalAccessToken: (token: string) => void;
    updateLocalRefreshToken: (token: string) => void;
    clearAllTokens: () => void;
};
