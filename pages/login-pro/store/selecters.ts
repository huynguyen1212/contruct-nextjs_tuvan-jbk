/*
*
* LoginPro selecters
* make by huyro1212
*/
import rootReducer from "redux/root-reducers";

export const selectLoginProStore = ((state: ReturnType<typeof rootReducer>) => state.LoginPro)