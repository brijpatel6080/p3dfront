// import {
//   AUTHENTICATE,
//   AUTHENTICATE_ERROR_AUTH,
// } from '../actions/authActions';

// const initialState = {
//   fullName: 'Roman Johanson',
//   avatar: '',
// };

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case AUTHENTICATE:
//       return { fullName: action.user.name, avatar: action.user.avatar };
//     case AUTHENTICATE_ERROR_AUTH:
//       return { error: action.error };
//     default:
//       return state;
//   }
// };

// export default authReducer;

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

export const API_ERROR = "API_ERROR";
export const SET_USER = "SET_USER";
export const UPDATE_BLOGS_DATA = "UPDATE_BLOGS_DATA";
export const SET_USER_ERROR = "SET_USER_ERROR";

const initialState = {
  loading: false,
  isUpdating: false,
  updateStatus: {},
  user: {},
  token: "empty",
  error: "",
  blogs: false,
  user_error_notification: {
    show: false,
    msg: "",
    type: "danger",
  },
};

const authReducer = (state = initialState, action) => {
  console.log("actio111n", action);
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        isUpdating: true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        updateStatus: action.payload,
        error: "",
      };
    case USER_LOGIN:
      return {
        ...state,
        token: action.payload.token,
      };
    case USER_LOGOUT:
      return {
        loading: false,
        isUpdating: false,
        updateStatus: {},
        user: {},
        token: "",
        error: "",
      };
    case API_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USER_ERROR:
      return {
        ...state,
        user_error_notification: action.payload,
      };
    case UPDATE_BLOGS_DATA:
      return {
        ...state,
        blogs: !state.blogs,
      };
    default:
      return state;
  }
};

export default authReducer;
