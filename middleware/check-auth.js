import { getAccessToken, getAccessTokenFromCookie, getUsername, getUsernameFromCookie } from "../utils/auth";
import { AUTH } from "../utils/mutation-types";

export default async function ({ store, req, redirect, route }) {
    // If nuxt generate, pass this middleware
    // to serve before loading to page or next page, keep state

    const loggedToken = process.server ? getUsernameFromCookie(req) : getUsername();
    const loggedAccessToken = process.server ?
        getAccessTokenFromCookie(req) :
        getAccessToken();

    if (loggedToken) {
        store.commit(`auth/${AUTH.SET_ACCOUNT}`, loggedToken);
    } else {
        // logout/invalid token case
        store.commit(`auth/${AUTH.REMOVE_TOKEN}`);
    }
    if (loggedAccessToken) {
        store.commit(`auth/${AUTH.SET_ACCESS_TOKEN}`, loggedAccessToken);
    }
}