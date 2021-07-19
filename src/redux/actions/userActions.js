import axios from 'axios';
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  USER_LOGIN, USER_LOGOUT,
  API_ERROR, SET_USER,
}
  from '../actionType/userActions';


const apiError = (error) => {
  const apiObj = {
    type: API_ERROR,
    payload: error,
  };
  return apiObj;
};

const getUserRequest = () => {
  const userobj = { type: GET_USER_REQUEST };
  return userobj;
};

const getUserSuccess = (user) => {
  const getUsrObj = {
    type: GET_USER_SUCCESS,
    payload: user,
  };
  return getUsrObj;
};

const updateUserRequest = () => {
  const updateUserObj = {
    type: UPDATE_USER_REQUEST,
  };
  return updateUserObj;
};

const updateUserSuccess = (status) => {
  const updateUserObj = {
    type: UPDATE_USER_SUCCESS,
    payload: status,
  };
  return updateUserObj;
};

const logOutUser = () => {
  const logOutObj = {
    type: USER_LOGOUT,
  };
  return logOutObj;
};

const logInUser = (userDetails) => {
  console.log('userDetails1', userDetails, USER_LOGIN);
  const logInUserObj = {
    type: USER_LOGIN,
    payload: userDetails,
  };
  return logInUserObj;
};

export const setUser = (user) => {
  const setUserObj = {
    type: SET_USER,
    payload: user,
  };
  return setUserObj;
};

export const getUserDetails = () => {
  const getUserDetailsDispatch = async (dispatch) => {
    dispatch(getUserRequest());
    const token = localStorage.getItem('token');
    const requestHeaders = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get('/me', requestHeaders);
      const userData = response.data.data;
      dispatch(getUserSuccess(userData));
    } catch (error) {
      console.log('Error in Getting User data: ', error);
      dispatch(apiError(error.message));
    }
  };
  return getUserDetailsDispatch();
};



export const updateUserDetails = (userDetails) => {
  const updateUserDetailsdispatch = async (dispatch) => {
    dispatch(updateUserRequest());
    const token = localStorage.getItem('token');
    const requestHeaders = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.put('patient/complete-info', userDetails, requestHeaders);
      dispatch(updateUserSuccess(response.data));
      getUserDetails();
    } catch (error) {
      dispatch(apiError(error.message));
    }
  };
  return updateUserDetailsdispatch();
};

export const logIn = (userDetails) => {
  const logIndispatch = async (dispatch) => {
    const newuserDetails = userDetails;
    /* User starts the app, userDetails is an empty object */
    console.log('newuserDetails', newuserDetails);
    if (!newuserDetails.token) {
      const token = localStorage.getItem('token');
      const id = localStorage.getItem('id');
      if (token) {
        newuserDetails.token = token;
        newuserDetails.id = id;
      }
    } else {
      localStorage.setItem('token', newuserDetails.token);
      localStorage.setItem('id', newuserDetails.id);
    }
    dispatch(logInUser(newuserDetails));
  };
  return logIndispatch;
};

export const logOut = () => {
  const logOutdispatch = async (dispatch) => {
    localStorage.setItem('token', '');
    localStorage.setItem('id', '');
    dispatch(logOutUser());
  };
  return logOutdispatch();
};



