const ACCESS_TOKEN_KEY = 'freelando:access_token';
const REFRESH_TOKEN_KEY = 'freelando:refresh_token';

export class ArmazenadorToken {
    static definirTokens(accessToken, refreshToken) {
        sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    }

    static efetuarLogout() {
        sessionStorage.removeItem(ACCESS_TOKEN_KEY);
        sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    }

    static get accessToken() {
        return sessionStorage.getItem(ACCESS_TOKEN_KEY);
    }

    static get refreshToken() {
        return sessionStorage.getItem(REFRESH_TOKEN_KEY);
    }
}