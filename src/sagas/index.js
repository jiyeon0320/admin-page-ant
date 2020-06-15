import { takeLatest, put, call, fork, select, take } from 'redux-saga/effects';
import * as Api from '../apis';
import * as Actions from '../actions/index';

function* authenticationWorkflow() {
    while (true) {
        let auth = yield select((state) => state.auth);
        let waitLogin = !auth;

        while (waitLogin) {
            try {
                const {
                    payload: { userid, pwd },
                } = yield TrackEvent(Actions.REQUEST_ADMIN_LOGIN);

                const { result, account } = yield call(Api.postAdminLogin, { userid, pwd });
                console.log(result);
                if (result === 1) {
                    waitLogin = false;
                    sessionStorage.setItem(
                        'auth',
                        JSON.stringify({
                            ...account,
                        }),
                    );
                    yield put(Actions.successAdminLogin({ ...account }));
                } else {
                    console.log('Login Failed!');
                    alert('아이디와 비밀번호를 다시 입력해주세요.');
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
    const { result, data } = yield call(Api.postDailyStat, action.payload);
    if (result === 0) {
        yield put(Actions.successDailyStat([]));
    } else {
        yield put(Actions.successDailyStat(data));
    }
}

export default function* () {
    yield fork(authenticationWorkflow);
    yield takeLatest(Actions.REQUEST_DAILY_STAT, requsetDailyStatFlow);
}
