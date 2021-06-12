import { combineReducers } from "redux";
import { packageReducer, passwordRegisterReducer, authReducer , destinationListReducer, destinationDetailReducer, destinationListFilterReducer, destinationDescendingListFilterReducer, destinationPopularityFilterReducer, userProfileReducer, destinationEstimatedCostListFilterReducer, destinationThemeListFilterReducer, destinationStateListFilterReducer} from './reducer';

export default combineReducers({
    package: packageReducer,
    userProfile: userProfileReducer,
    passwordRegister: passwordRegisterReducer, 
    auth:authReducer,
    destination: destinationListReducer,
    destinationDetail: destinationDetailReducer,
    destinationPopularity: destinationPopularityFilterReducer,
    destinationFilter: destinationListFilterReducer,
    destinationDescendingFilter: destinationDescendingListFilterReducer,
    estimatedCostFilter: destinationEstimatedCostListFilterReducer,
    themeFilter: destinationThemeListFilterReducer,
    stateFilter: destinationStateListFilterReducer,
    });