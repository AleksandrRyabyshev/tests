import { IS_LOGGED } from '@/store/types'

export default (state = false, action) => {
    switch (action.type) {
        case IS_LOGGED:
            return state = action.payload;
        default:
            return state;
    }
};
