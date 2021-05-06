/*
*
* LoginUser selecters
* make by huyro1212
*/
import rootReducer from "redux/root-reducers";

export const selectLoginUserStore = ((state: ReturnType<typeof rootReducer>) => state.LoginUser)