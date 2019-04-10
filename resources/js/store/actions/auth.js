import api from '@/api'
import {
    LOGIN_IS_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    IS_LOGGED
} from '@/store/types'

export function login(payload) {
    return (dispatch) => {
        dispatch(loginIsLoading(true));

        api.post('/login', payload)
            .then((response) => {
                if (!response.statusText) {
                    throw Error(response.statusText);
                }
                dispatch(loginIsLoading(false));
                return response;
            })
            .then((response) => {
                return response.data
            })
            .then((token) => {
                localStorage.setItem('token', token.token);
                dispatch(isLogged(true));
                return dispatch(loginSuccess(token.token))

            })
            .catch(() => {
                return dispatch(loginError(true))
            });
    };
}

export function loginIsLoading(bool) {
    return {
        type: LOGIN_IS_LOADING,
        isLoading: bool
    };
}

export function loginError(bool) {
    return {
        type: LOGIN_ERROR,
        hasError: bool
    };
}

export function loginSuccess(token) {
    return {
        type: LOGIN_SUCCESS,
        loginSuccess: !!token
    };
}

export function isLogged(bool) {
    return {
        type: IS_LOGGED,
        logged: bool
    };
}
