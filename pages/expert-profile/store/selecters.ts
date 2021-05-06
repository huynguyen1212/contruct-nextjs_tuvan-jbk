/*
*
* ExpertProfile selecters
* make by huyro1212
*/
import rootReducer from "redux/root-reducers";

export const selectExpertProfileStore = ((state: ReturnType<typeof rootReducer>) => state.ExpertProfile)