/**
 * This file export all of type the Reducers
 * File is export only type, not the logic
 * phamthainb
 */

import { combineReducers } from 'redux'
import App from 'pages/index'
import Home from 'src/containers/home/store/reducers'
import Introduce from 'src/containers/introduce/store/reducers'
import LoginUser from 'src/containers/user/login-user/store/reducers'
import SignupUser from 'src/containers/user/signup-user/store/reducers'
import LoginPro from 'src/containers/pro/login-pro/store/reducers'
import SignupPro from 'src/containers/pro/signup-pro/store/reducers'
import Authentication from 'src/containers/authentication/store/reducers'
import ExpertProfile from 'src/containers/expert-profile/store/reducers'

// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

//pages
const rootReducer = combineReducers({
  App,
  Home,
  Introduce,
  LoginUser,
  SignupUser,
  LoginPro,
  SignupPro,
  Authentication,
  ExpertProfile,
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
})

export default rootReducer
