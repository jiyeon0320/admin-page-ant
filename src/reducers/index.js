import {
    SUCCESS_ADMIN_LOGIN,
    SUCCESS_LOGOUT,
    SUCCESS_DAILY_STAT,
    SUCCESS_EVENT_USERS,
} from '../actions';

export const initializeState = {
    auth: null,
    countData: [],
    usersData: [],
};

export default (state = initializeState, action) => {
    switch (action.type) {
        case SUCCESS_ADMIN_LOGIN:
            return { ...state, auth: action.payload };
        case SUCCESS_LOGOUT:
            return { ...state, auth: null };
        case SUCCESS_DAILY_STAT:
            return { ...state, countData: action.payload };
        case SUCCESS_EVENT_USERS:
            return { ...state, usersData: action.payload };
        default:
            return state;
    }
};
