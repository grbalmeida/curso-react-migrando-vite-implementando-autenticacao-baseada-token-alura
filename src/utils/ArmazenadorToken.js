const ACCESS_TOKEN_KEY = 'freelando:access_token';
const REFRESH_TOKEN_KEY = 'freelando:refresh_token';

export class ArmazenadorToken {
    static definirTokens(accessToken, refreshToken) {
        sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    }

    static accessToken() {
        return sessionStorage.getItem(ACCESS_TOKEN_KEY);
    }

    static refreshToken() {
        return sessionStorage.getItem(REFRESH_TOKEN_KEY);
    }
}