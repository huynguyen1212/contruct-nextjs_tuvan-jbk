/*
*
* SignupPro selecters
* make by huyro1212
*/
import rootReducer from "redux/root-reducers";

export const selectSignupProStore = ((state: ReturnType<typeof rootReducer>) => state.SignupPro)