import {
    LOGIN_IS_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    IS_LOGGED
} from '@/store/types'

export function loginError(state = false, action) {
    switch (action.type) {
        case LOGIN_ERROR:
            return action.hasError;

        default:
            return state;
    }
}

export function loginIsLoading(state = false, action) {
    switch (action.type) {
        case LOGIN_IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export function loginSuccess(state = false, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return action.loginSuccess;

        default:
            return state;
    }
}

export function isLogged(state = false, action) {
    switch (action.type) {
        case IS_LOGGED:
            return action.logged;

        default:
            return state;
    }
}
