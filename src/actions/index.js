export const REQUEST_ADMIN_LOGIN = 'requestAdminLogin';
export const SUCCESS_ADMIN_LOGIN = 'successAdminLogin';
// export const FAILURE_ADMIN_LOGIN = 'failureAdminLogin';

export const REQUEST_LOGOUT = 'requestLogout';
export const SUCCESS_LOGOUT = 'successLogout';

export const REQUEST_DAILY_STAT = 'requestDailyStat';
export const SUCCESS_DAILY_STAT = 'successDailyStat';
// export const FAILURE_DAILY_STAT = 'failureDailyStat';

export const requestAdminLogin = ({ userid, pwd }) => ({
    type: REQUEST_ADMIN_LOGIN,
    payload: {
        userid,
        pwd,
    },
});

export const successAdminLogin = (data) => ({
    type: SUCCESS_ADMIN_LOGIN,
    payload: data,
});
export const requestLogout = () => ({
    type: REQUEST_LOGOUT,
});

export const successLogout = () => ({
    type: SUCCESS_LOGOUT,
});

export const requestDailyStat = () => ({
    type: REQUEST_DAILY_STAT,
    // payload:
});

export const successDailyStat = (data) => ({
    type: SUCCESS_DAILY_STAT,
    payload: data,
});
