/*
 *
 * Authentication selecters
 * make by huyro1212
 */
import rootReducer from 'src/redux/root-reducers'

export const selectAuthenticationStore = (state: ReturnType<typeof rootReducer>) =>
  state.Authentication
