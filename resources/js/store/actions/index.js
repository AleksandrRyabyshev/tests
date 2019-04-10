import { IS_LOGGED, SET_TOKEN } from '../types';

export const isLogged = (payload) => {
    return {
        type: IS_LOGGED,
        payload : payload
    }
};

export const setToken = (payload) => {
    return {
        type: SET_TOKEN,
        payload : payload
    }
};
