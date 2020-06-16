import { takeLatest, put, call, fork, select, take } from 'redux-saga/effects';
import * as Api from '../apis';
import * as Actions from '../actions/index';

function* authenticationWorkFlow() {
    while (true) {
        let auth = yield select((state) => state.auth);
        let waitLogin = !auth;

        while (waitLogin) {
            try {
                const {
                    payload: { userid, pwd },
                } = yield take(Actions.REQUEST_ADMIN_LOGIN);

                const { result, data } = yield call(Api.postAdminLogin, {
                    userid,
                    pwd,
                });
                if (result && data.result === 1) {
                    waitLogin = false;
                    sessionStorage.setItem(
                        'auth',
                        JSON.stringify({
                            ...data,
                        }),
                    );
                    yield put(Actions.successAdminLogin({ ...data }));
                } else {
                    console.log('Login Failed!');
                    alert('아이디와 비밀번호를 다시 입력해주세요.');
                    return;
                }
            } catch (e) {
                console.error(e);
            }
        }
        yield take(Actions.REQUEST_LOGOUT);
        sessionStorage.removeItem('auth');

        yield put(Actions.successLogout());
    }
}

function* requsetDailyStatFlow(action) {
    // const response = yield call(Api.postDailyStat, action.payload);
    // yield put(Actions.successDailyStat({response.type1, response.type2}));

    const response = yield call(Api.postDailyStat);
    const { type1, type2 } = response;
    yield put(Actions.successDailyStat({ type1, type2 }));
}

function* requsetEventUsersFlow(action) {
    const { data } = yield call(Api.postEventUsers, action.payload);
    console.log(data);
    yield put(Actions.successEventUsers(data));
}
export default function* () {
    yield fork(authenticationWorkFlow);
    yield takeLatest(Actions.REQUEST_DAILY_STAT, requsetDailyStatFlow);
    yield takeLatest(Actions.REQUEST_EVENT_USERS, requsetEventUsersFlow);
}
