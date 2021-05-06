/*
 *
 * SignupUser selecters
 * make by huyro1212
 */
import rootReducer from 'src/redux/root-reducers'

export const selectSignupUserStore = (state: ReturnType<typeof rootReducer>) => state.SignupUser
