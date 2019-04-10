import { SET_TOKEN } from '@/store/types'

export default (state = null, action) => {
    switch (action.type) {
        case SET_TOKEN:
            localStorage.setItem('token', action.payload);
            return state = action.payload;
        default:
            return state;
    }
};
