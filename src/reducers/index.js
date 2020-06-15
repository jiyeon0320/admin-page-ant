import { SUCCESS_ADMIN_LOGIN, SUCCESS_LOGOUT, SUCCESS_DAILY_STAT } from '../actions';

export const initializeState = {
    auth: null,
    data: [],
};

export default (state = initializeState, action) => {
    switch (action.type) {
        case SUCCESS_ADMIN_LOGIN:
            return { ...state, auth: action.payload };
        case SUCCESS_LOGOUT:
            return { ...state, auth: null };
        case SUCCESS_DAILY_STAT:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};
