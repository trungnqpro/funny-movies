import Cookie from 'js-cookie';
import { ACCESS_TOKEN, TOKEN_USER } from './constants';

/**
 * get access_token from local storage
 */
export const getAccessToken = () => {
  if (process.server) return;
  return window.localStorage.getItem(ACCESS_TOKEN);
};

/**
 * get bearer token from local storage
 */
export const getUsername = () => {
  if (process.server) return;
  const username = window.localStorage.getItem(TOKEN_USER);
  return username;
};

/**
 * set bearer token after login success
 */
export const setAccessToken = accessToken => {
  if (!accessToken) return;
  Cookie.set(ACCESS_TOKEN, accessToken, { expires: parseInt(process.env.SESSION_EXPIRES) });
  if (process.server) return;
  window.localStorage.setItem(ACCESS_TOKEN, accessToken);
};

export const setUserName = _username => {
  if (!_username) return;
  Cookie.set(TOKEN_USER, _username);
  if (process.server) return;
  window.localStorage.setItem(TOKEN_USER, _username);
};

export const removeToken = () => {
  Cookie.remove(ACCESS_TOKEN);
  Cookie.remove(TOKEN_USER);
  if (process.server) return;
  window.localStorage.removeItem(ACCESS_TOKEN);
  window.localStorage.removeItem(TOKEN_USER);
};

export const isAuthenticated = () => {
  return !!getToken();
};

/**
 * Get raw jwt token from cookie
 */
export const getUsernameFromCookie = (req) => {
  if (!req || !req.headers || !req.headers.cookie) return
  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(TOKEN_USER))
  if (!jwtCookie) return null;
  const userCookie = (jwtCookie.split('=')[1])
  return userCookie;
}

/**
 * get access_token from cookie
 */
export const getAccessTokenFromCookie = (req) => {
  if (!req || !req.headers || !req.headers.cookie) return
  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(ACCESS_TOKEN))
  if (!jwtCookie) return null;
  const userCookie = (jwtCookie.split('=')[1])
  return userCookie;
}