export const REQUEST_ADMIN_LOGIN = 'requestAdminLogin';
export const SUCCESS_ADMIN_LOGIN = 'successAdminLogin';
// export const FAILURE_ADMIN_LOGIN = 'failureAdminLogin';

export const REQUEST_LOGOUT = 'requestLogout';
export const SUCCESS_LOGOUT = 'successLogout';

export const REQUEST_DAILY_STAT = 'requestDailyStat';
export const SUCCESS_DAILY_STAT = 'successDailyStat';

export const REQUEST_COUNT_STAT = 'requestCountStat';
export const SUCCESS_COUNT_STAT = 'successCountStat';

export const REQUEST_EVENT_USERS = 'requestEventUsers';
export const SUCCESS_EVENT_USERS = 'successEventUsers';

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
});

export const successDailyStat = (data) => ({
    type: SUCCESS_DAILY_STAT,
    payload: data,
});
export const requestCountStat = () => ({
    type: REQUEST_COUNT_STAT,
});
export const successCountStat = ({ today_visit, remain_event1, remain_event2 }) => ({
    type: SUCCESS_COUNT_STAT,
    payload: { today_visit, remain_event1, remain_event2 },
});

export const requestEventUsers = () => ({
    type: REQUEST_EVENT_USERS,
});
export const successEventUsers = (data) => ({
    type: SUCCESS_EVENT_USERS,
    payload: data,
});
