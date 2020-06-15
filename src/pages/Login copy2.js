import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { requestLogin, requestAdminLogin } from '../actions';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const AdminLogin = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state=>state.auth);
    const [userid, setUserid] = useState('');
    const [pwd, setPwd] = useState('');
    const history = useHistory();
    useEffect(()=>{
        if(auth !== null){
            history.push('/');  //count
        }
    },[auth, history]);

    const onClick=()=>{
        dispatch(requestAdminLogin({userid, pwd}));
    }
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                value={userid}
                onChange={e=> setUserid(e.target.value)}
                autoFocus
                rules={[
                    {
                        required: true,
                        message: '아이디를 입력해주세요!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                value={pwd}
                onChange={e=>setPwd(e.target.value)}
                rules={[
                    {
                        required: true,
                        message: '비밀번호를 입력해주세요!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" onClick={onClick} >
                    로그인
                </Button>
            </Form.Item>
        </Form>
    );
};
export default AdminLogin();
