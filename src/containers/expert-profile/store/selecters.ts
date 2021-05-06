/*
 *
 * ExpertProfile selecters
 * make by huyro1212
 */
import rootReducer from 'src/redux/root-reducers'

export const selectExpertProfileStore = (state: ReturnType<typeof rootReducer>) =>
  state.ExpertProfile
