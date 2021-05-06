/**
 * This file export all of type the Reducers
 * File is export only type, not the logic
 * phamthainb
 */

import { combineReducers } from 'redux'
import App from 'pages/index'
import Home from 'pages/home/store/reducers'
import Introduce from 'pages/introduce/store/reducers'
import LoginUser from 'pages/user/login-user/store/reducers'
import SignupUser from 'pages/user/signup-user/store/reducers'
import LoginPro from 'pages/pro/login-pro/store/reducers'
import SignupPro from 'pages/pro/signup-pro/store/reducers'
import Authentication from 'pages/authentication/store/reducers'
import ExpertProfile from 'pages/expert-profile/store/reducers'

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
