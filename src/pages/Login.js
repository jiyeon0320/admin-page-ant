import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestAdminLogin } from '../actions';
import { useHistory } from 'react-router-dom';
import { Input, Button, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledSpace = styled(Space)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 300px;

    /* transform: translate(50%); */
    text-align: center;
`;
const StyledTitle = styled.div`
    font-size: 20px;
    margin-bottom: 25px;
`;

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

    const onClick = () => {
        dispatch(requestAdminLogin({ userid, pwd }));
    };

    return (
        <StyledSpace direction="vertical">
            <StyledTitle> 관리자 페이지 </StyledTitle>
            <Input
                placeholder="아이디"
                value={userid}
                onChange={(e) => setUserid(e.target.value)}
                prefix={<UserOutlined />}
            />
            <Input.Password
                placeholder="비밀번호"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
            <Button type="primary" htmlType="submit" onClick={onClick}>
                로그인
            </Button>
        </StyledSpace>
    );
};
export default Login;
