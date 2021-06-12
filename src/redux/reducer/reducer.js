import { PACKAGE_DATA, PASSWORD_REGISTER_FAIL, PASSWORD_REGISTER_START, PASSWORD_REGISTER_SUCCESS, SAVE_PASSWORD_REGISTER,
    AUTH_FAIL, AUTH_START, AUTH_SUCCESS, AUTH_LOGOUT, DESTINATION_LIST_DATA, DESTINATION_DETAIL_DATA, GET_DESTINATION_FILTER,
     GET_DESTINATION_DESCENDING_FILTER, GET_DESTINATION_POPULARITY_FILTER, GET_USER_PROFILE, GET_ESTIMATED_COST, GET_THEME, GET_STATE } from '../action/types';

//------------>>>>USER PROFILE  ------<<<<<<<---------//
const userProfileState = {
  userProfileData: [],
  }
  function userProfileReducer(state = userProfileState  , action) {
  switch (action.type) {
      case GET_USER_PROFILE:
          return {
              ...state,
              userProfileData: action.payload
          };
      default:
          return state;
  }
}
//password register reducers
const pris = {
    loading: false,
    status: "",
    error: null,
  };
  
  function passwordRegisterReducer(state = pris, action) {
    console.log(action);
  
    switch (action.type) {
      case PASSWORD_REGISTER_START:
        return {
          ...state,
          loading: true,
        };
      case PASSWORD_REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          status: true,
        };
      case PASSWORD_REGISTER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
        case SAVE_PASSWORD_REGISTER:
          return {
            ...state,
            loading: false,
            error: action.error,
          };
      default:
        return state;
    }
  }

//------------>>>>LOGIN  ------<<<<<<<---------//
const iState ={
    token:null,
    error:null,
    loading:false
  }
  
const authReducer = (state = iState, action) => {
console.log(action);

switch (action.type) {
    case AUTH_START:
    return {
        ...state,
        loading: true,
        error:null
    };
    case AUTH_SUCCESS:
    return {
        ...state,
        token:action.token,
        loading: false,
    error:null
    };
    case AUTH_FAIL:
    return {
        ...state,
        loading: false,
        error: action.error,
    };
    case AUTH_LOGOUT:
    return{...state,
    token:null}
    default:
    return state;
}
}
  
/*<<<<<<<<<<<<<<<----- PACKAGE ----->>>>>>>>>>>>>>>*/
const packageState = {
    packageData: [],
}
function packageReducer(state = packageState, action) {
    switch (action.type) {
        case PACKAGE_DATA:
            return {
                ...state,
                packageData: action.payload
            };
        default:
            return state;
    }
}

/*<<<<<<<<<<<<<<<----- SEARCH ----->>>>>>>>>>>>>>>*/
const destinationListState = {
  destinationListData: [],
}
function destinationListReducer(state = destinationListState  , action) {
  switch (action.type) {
      case DESTINATION_LIST_DATA:
          return {
              ...state,
              destinationListData: action.payload
          };
      default:
          return state;
  }
}
/*<<<<<<<<<<<<<<<----- DESTINATION DETAIL ----->>>>>>>>>>>>>>>*/
const destinationDetailState = {
  destinationDetailData: [],
}
function destinationDetailReducer(state = destinationDetailState  , action) {
  switch (action.type) {
      case DESTINATION_DETAIL_DATA:
          return {
              ...state,
              destinationDetailData: action.payload
          };
      default:
          return state;
  }
}
/*<<<<<<<<<<<<<<<-----Descending Filter ----->>>>>>>>>>>>>>>*/
const destinationPopularityListFilterState = {
  destinationPopularityListFilterData: [],
}
function destinationPopularityFilterReducer(state = destinationPopularityListFilterState  , action) {
  switch (action.type) {
      case GET_DESTINATION_POPULARITY_FILTER:
          return {
              ...state,
              destinationPopularityListFilterData: action.payload
          };
      default:
          return state;
  }
}
/*<<<<<<<<<<<<<<<-----Ascending Filter ----->>>>>>>>>>>>>>>*/
const destinationListFilterState = {
  destinationListFilterData: [],
}
function destinationListFilterReducer(state = destinationListFilterState  , action) {
  switch (action.type) {
      case GET_DESTINATION_FILTER:
          return {
              ...state,
              destinationListFilterData: action.payload
          };
      default:
          return state;
  }
}
/*<<<<<<<<<<<<<<<-----Descending Filter ----->>>>>>>>>>>>>>>*/
const destinationDescendingListFilterState = {
  destinationDescendingListFilterData: [],
}
function destinationDescendingListFilterReducer(state = destinationDescendingListFilterState  , action) {
  switch (action.type) {
      case GET_DESTINATION_DESCENDING_FILTER:
          return {
              ...state,
              destinationDescendingListFilterData: action.payload
          };
      default:
          return state;
  }
}
/*<<<<<<<<<<<<<<<-----COST Filter ----->>>>>>>>>>>>>>>*/
const destinationEstimatedCostListFilterState = {
  destinationEstimatedCostListFilterData: [],
}
function destinationEstimatedCostListFilterReducer(state = destinationEstimatedCostListFilterState  , action) {
  switch (action.type) {
      case GET_ESTIMATED_COST:
          return {
              ...state,
              destinationEstimatedCostListFilterData: action.payload
          };
      default:
          return state;
  }
}
/*<<<<<<<<<<<<<<<-----THEME Filter ----->>>>>>>>>>>>>>>*/
const destinationThemeListFilterState = {
  destinationThemeListFilterData: [],
}
function destinationThemeListFilterReducer(state = destinationThemeListFilterState  , action) {
  switch (action.type) {
      case GET_THEME:
          return {
              ...state,
              destinationThemeListFilterData: action.payload
          };
      default:
          return state;
  }
}
/*<<<<<<<<<<<<<<<-----STATE Filter ----->>>>>>>>>>>>>>>*/
const destinationStateListFilterState = {
  destinationStateListFilterData: [],
}
function destinationStateListFilterReducer(state = destinationStateListFilterState  , action) {
  switch (action.type) {
      case GET_STATE:
          return {
              ...state,
              destinationStateListFilterData: action.payload
          };
      default:
          return state;
  }
}
export { userProfileReducer, packageReducer, passwordRegisterReducer, authReducer, destinationListReducer, destinationDetailReducer,
           destinationListFilterReducer, destinationDescendingListFilterReducer, destinationPopularityFilterReducer,
           destinationEstimatedCostListFilterReducer, destinationThemeListFilterReducer , destinationStateListFilterReducer };