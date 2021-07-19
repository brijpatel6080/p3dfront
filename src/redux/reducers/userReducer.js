
// import { GET_USER_REQUEST, GET_USER_SUCCESS, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, USER_LOGIN, USER_LOGOUT, API_ERROR, SET_USER } from '../actionType/userActions';

import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    USER_LOGIN, USER_LOGOUT,
    API_ERROR, SET_USER,
  }
    from '../actionType/userActions';


const initialState = {
    loading: false,
    isUpdating: false,
    updateStatus: {},
    user: {},
    token: 'empty',
    error: '',
};

const userReducer = (state = initialState, action) => {
    console.log('actio111n', action);
    switch (action.type) {
        case GET_USER_REQUEST: return {
            ...state,
            loading: true,
        };
        case GET_USER_SUCCESS: return {
            ...state,
            loading: false,
            user: action.payload,
            error: '',
        };
        case UPDATE_USER_REQUEST: return {
            ...state,
            isUpdating: true,
        };
        case UPDATE_USER_SUCCESS: return {
            ...state,
            isUpdating: false,
            updateStatus: action.payload,
            error: '',
        };
        case USER_LOGIN: return {
            ...state,
            token: action.payload.token,
        };
        case USER_LOGOUT: return {
            loading: false,
            isUpdating: false,
            updateStatus: {},
            user: {},
            token: '',
            error: '',
        };
        case API_ERROR: return {
            ...state,
            loading: false,
            error: action.payload,
        };
        case SET_USER: return {
            ...state,
            user: action.payload,
        };
        default: return state;
    }
};

export default userReducer;
