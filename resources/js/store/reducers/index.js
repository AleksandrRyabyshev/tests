import { combineReducers } from 'redux'

import {
    loginIsLoading,
    loginSuccess,
    loginError,
    isLogged
} from './auth'

export default combineReducers({
    loginIsLoading,
    loginSuccess,
    loginError,
    isLogged
});
