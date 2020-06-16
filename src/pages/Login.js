import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestAdminLogin } from '../actions';
import { useHistory } from 'react-router-dom';
const Login = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const [userid, setUserid] = useState('cjhetbahn_event');
    const [pwd, setPwd] = useState('gotqks1wkqrhrqkq');
    const history = useHistory();

    useEffect(() => {
        if (auth !== null) {
            history.push('/');
        }
    }, [auth, history]);

    return (
        <div>
            <input type="text" value={userid} onChange={(e) => setUserid(e.target.value)} />
            <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} />
            <button onClick={() => dispatch(requestAdminLogin({ userid, pwd }))}>로그인</button>
        </div>
    );
};

export default Login;
