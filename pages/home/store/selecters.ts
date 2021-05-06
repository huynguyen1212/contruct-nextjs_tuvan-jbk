/*
*
* Home selecters
* make by huyro1212
*/
import rootReducer from "redux/root-reducers";

export const selectHomeStore = ((state: ReturnType<typeof rootReducer>) => state.Home)