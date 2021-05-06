/*
*
* SignupUser selecters
* make by huyro1212
*/
import rootReducer from "redux/root-reducers";

export const selectSignupUserStore = ((state: ReturnType<typeof rootReducer>) => state.SignupUser)