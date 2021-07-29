export const AUTHENTICATE = "AUTHENTICATE";
export const AUTHENTICATE_ERROR_AUTH = "AUTHENTICATE_ERROR_AUTH";
export const UPDATE_BLOGS_DATA = "UPDATE_BLOGS_DATA";
export const SET_USER_ERROR = "SET_USER_ERROR";

export function auth({ name, avatar }) {
  return {
    type: AUTHENTICATE,
    user: { name, avatar },
  };
}

export function authError(error) {
  return {
    type: AUTHENTICATE_ERROR_AUTH,
    error,
  };
}

export function blogsUpdate(error) {
  return {
    type: UPDATE_BLOGS_DATA,
  };
}

export function user_error_action(error) {
  return {
    type: SET_USER_ERROR,
    payload: error,
  };
}
