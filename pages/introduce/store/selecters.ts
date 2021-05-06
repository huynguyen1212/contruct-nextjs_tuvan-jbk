/*
 *
 * Introduce selecters
 * make by huyro1212
 */
import rootReducer from 'src/redux/root-reducers'

export const selectIntroduceStore = (state: ReturnType<typeof rootReducer>) => state.Introduce
