import {  PACKAGE_DATA, PASSWORD_REGISTER_FAIL, PASSWORD_REGISTER_START, 
          PASSWORD_REGISTER_SUCCESS, SAVE_PASSWORD_REGISTER, AUTH_FAIL, AUTH_START, AUTH_SUCCESS, AUTH_LOGOUT,
          DESTINATION_LIST_DATA, DESTINATION_DETAIL_DATA, PACKAGE_DATA_START, PACKAGE_DATA_SUCCESS, PACKAGE_DATA_SAVE,
          DESTINATION_DATA_START, DESTINATION_DATA_SUCCESS, DESTINATION_DATA_SAVE, GET_DESTINATION_FILTER, GET_DESTINATION_DESCENDING_FILTER,
          GET_DESTINATION_POPULARITY_FILTER, GET_USER_PROFILE, GET_ESTIMATED_COST, GET_THEME, GET_STATE
           } from './types';
import axios from "axios";
import url from "./url";

/*<<<<<<<<<<<<<<<-----USER PROFILE ----->>>>>>>>>>>>>>>*/
const getUserProfile = (email) => (dispatch) =>{
  axios.get(`${url.apiUrl}/accounts/user/?email=${email}`)
  .then((resp)=>{
      dispatch({
          type: GET_USER_PROFILE,
          payload: resp.data,
      })
  })
  .catch((err) =>  {
      console.log(err.request.response)
      alert(err.request.response)
      })
    }
//------------>>>>LOGIN  ------<<<<<<<---------//
const authStart = () => {
    return {
      type: AUTH_START,
    };
  };
  
  const authSuccess = (token) => {
    return {
      type: AUTH_SUCCESS,
      token: token,
    };
  };
  
  const authFail = (error) => {
    return {
      type: AUTH_FAIL,
      error: error,
    };
  };
  const authLogin=( { email, password }) =>{
      console.log(email)
      console.log(password)
      return(dispatch)=> {
        dispatch(authStart());
        // eslint-disable-next-line no-whitespace-before-property
        axios.post(`${url.apiUrl}/accounts/login/`,{ email, password })
        .then(async (res) => {
          console.log(res.data);
          const token=res.data.token;
          const id= res.data.id;
          const expirationDate = new Date(
            new Date().getTime() + 24*7*60*60 *1000 );
            localStorage.setItem("token",token);
            localStorage.setItem("id",id);
            localStorage.setItem("expirationDate",expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
            console.log(res.data)
          }
        )     .catch((err)=> {
              dispatch(authFail(err));
              console.log(err.response)
            })}}
/*<<<<<<<<<<<<<<<----- LOGOUT ----->>>>>>>>>>>>>>>*/  
const logout = ()=> {

localStorage.removeItem("token");
localStorage.removeItem("id");
localStorage.removeItem("expirationDate")

return{
    type:AUTH_LOGOUT,

    }}

const checkAuthTimeout = (expirationTime) => {
return(dispatch) => {
    setTimeout(() =>  {
    dispatch(logout());
    } , expirationTime * 1000)
}}
//------------>>>>SIGN UP ------<<<<<<<---------//
const passwordRegisterStart = () => {
  return {
    type: PASSWORD_REGISTER_START,
  };
};
const passwordRegisterSuccess = () => {
  return {
    type: PASSWORD_REGISTER_SUCCESS,
  };
};
const passwordRegisterFail = (err) => {
  return {
    type: PASSWORD_REGISTER_FAIL,
    error: err,
  };
};

const passwordSignUp = (form) => (dispatch) => {
  
  dispatch(passwordRegisterStart());
  axios
    .post(`${url.apiUrl}/accounts/user-register/`, (form))
    .then((res) => {
      dispatch({
        type: SAVE_PASSWORD_REGISTER,
        payload: res.data,
      });
      dispatch(passwordRegisterSuccess());
    })
    .catch((err) => {
      dispatch(passwordRegisterFail(err));
    });
};
/*<<<<<<<<<<<<<<<----- Package ----->>>>>>>>>>>>>>>*/
const getpackage = () => (dispatch) =>{
    axios.get(`${url.apiUrl}/package/package-list/`)
    .then((resp)=>{
        dispatch({
            type: PACKAGE_DATA,
            payload: resp.data,
        })
    })
    .catch((err) =>  {
        console.log(err.request.response)
        alert(err.request.response)
        })
}
/*<<<<<<<<<<<<<<<----- Search ----->>>>>>>>>>>>>>>*/
const getDestinationList = (search) => (dispatch) =>{
  axios.get(`${url.apiUrl}/destination/destination-list/?search=${search}`)
  .then((resp)=>{
      dispatch({
          type: DESTINATION_LIST_DATA,
          payload: resp.data,
      })
  })
  .catch((err) =>  {
      console.log(err.request.response)
      alert(err.request.response)
      })
    }
/*<<<<<<<<<<<<<<<----- Destination Detail ----->>>>>>>>>>>>>>>*/
const getDestinationDetail = (id) => (dispatch) =>{
  axios.get(`${url.apiUrl}/destination/destination-detail/?id=${id}`)
  .then((resp)=>{
      dispatch({
          type: DESTINATION_DETAIL_DATA,
          payload: resp.data,
      })
  })
  .catch((err) =>  {
      console.log(err.request.response)
      alert(err.request.response)
      })
    }
/*<<<<<<<<<<<<<<<----- PACKAGE DATA POST ----->>>>>>>>>>>>>>>*/
    const packageStart = () => {
      return{
          type : PACKAGE_DATA_START,
      }
  }
  const packageSuccess = () => {
      return{
          type : PACKAGE_DATA_SUCCESS,
      }
  }
  const packageSave = (form) =>(dispatch) => {
      console.log(...form)
      dispatch(packageStart());
      axios.post(`${url.apiUrl}/package/package-crud/`, form)
      .then(resp =>{
          dispatch({
              type : PACKAGE_DATA_SAVE,
              payload : resp.data,
          })
          dispatch(packageSuccess())
      })
      .catch((err)=>{
          console.log(err.request.response)
          alert(err.request.response)
      })
  }
  /*<<<<<<<<<<<<<<<----- DESTINATION DATA POST ----->>>>>>>>>>>>>>>*/
  const destinationStart = () => {
    return{
        type : DESTINATION_DATA_START,
    }
}
const destinationSuccess = () => {
    return{
        type : DESTINATION_DATA_SUCCESS,
    }
}
const destinationSave = (form) =>(dispatch) => {
    console.log(...form)
    dispatch(destinationStart());
    axios.post(`${url.apiUrl}/destination/destination-crud/`, form)
    .then(resp =>{
        dispatch({
            type : DESTINATION_DATA_SAVE,
            payload : resp.data,
        })
        dispatch(destinationSuccess())
    })
    .catch((err)=>{
        console.log(err.request.response)
        alert(err.request.response)
    })
}
/*<<<<<<<<<<<<<<<-----POPULARITY FILTER ----->>>>>>>>>>>>>>>*/
const getDestinationPopularityFilterList = () => (dispatch) =>{
  axios.get(`${url.apiUrl}/destination/destination-list/?ordering=-ratings`)
  .then((resp)=>{
      dispatch({
          type: GET_DESTINATION_POPULARITY_FILTER,
          payload: resp.data,
      })
  })
  .catch((err) =>  {
      console.log(err.request.response)
      alert(err.request.response)
      })
    }
/*<<<<<<<<<<<<<<<-----SORTING FILTER ----->>>>>>>>>>>>>>>*/
const getDestinationFilterList = () => (dispatch) =>{
  axios.get(`${url.apiUrl}/destination/destination-list/?ordering=estimated_cost`)
  .then((resp)=>{
      dispatch({
          type: GET_DESTINATION_FILTER,
          payload: resp.data,
      })
  })
  .catch((err) =>  {
      console.log(err.request.response)
      alert(err.request.response)
      })
    }
/*<<<<<<<<<<<<<<<-----DESCENDING FILTER ----->>>>>>>>>>>>>>>*/
const getDestinationDescendingFilterList = () => (dispatch) =>{
  axios.get(`${url.apiUrl}/destination/destination-list/?ordering=-estimated_cost`)
  .then((resp)=>{
      dispatch({
          type: GET_DESTINATION_DESCENDING_FILTER,
          payload: resp.data,
      })
  })
  .catch((err) =>  {
      console.log(err.request.response)
      alert(err.request.response)
      })
    }

/*<<<<<<<<<<<<<<<-----COST FILTER ----->>>>>>>>>>>>>>>*/
const getEstimatedCostFilterList = (estimated_cost_min, estimated_cost_max) => (dispatch) =>{
  axios.get(`${url.apiUrl}/destination/destination-list/?estimated_cost_min=${estimated_cost_min}&estimated_cost_max=${estimated_cost_max}`)
  .then((resp)=>{
      dispatch({
          type: GET_ESTIMATED_COST,
          payload: resp.data,
      })
  })
  .catch((err) =>  {
      console.log(err.request.response)
      alert(err.request.response)
      })
    }

/*<<<<<<<<<<<<<<<-----THEME FILTER ----->>>>>>>>>>>>>>>*/
const getThemeFilterList = (theme) => (dispatch) =>{
  axios.get(`${url.apiUrl}/destination/destination-list/?theme=${theme}`)
  .then((resp)=>{
      dispatch({
          type: GET_THEME,
          payload: resp.data,
      })
  })
  .catch((err) =>  {
      console.log(err.request.response)
      alert(err.request.response)
      })
    }

/*<<<<<<<<<<<<<<<-----THEME FILTER ----->>>>>>>>>>>>>>>*/
const getStateFilterList = (state) => (dispatch) =>{
  axios.get(`${url.apiUrl}/destination/destination-list/?state=${state}`)
  .then((resp)=>{
      dispatch({
          type: GET_STATE,
          payload: resp.data,
      })
  })
  .catch((err) =>  {
      console.log(err.request.response)
      alert(err.request.response)
      })
    }

export {getUserProfile, getpackage, passwordSignUp, authLogin, logout, getDestinationList, getDestinationDetail , packageSave,
         destinationSave, getDestinationFilterList, getDestinationDescendingFilterList, getDestinationPopularityFilterList, 
         getEstimatedCostFilterList, getThemeFilterList, getStateFilterList };