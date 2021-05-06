/*
 *
 * LoginUser selecters
 * make by huyro1212
 */
import rootReducer from 'src/redux/root-reducers'

export const selectLoginUserStore = (state: ReturnType<typeof rootReducer>) => state.LoginUser
