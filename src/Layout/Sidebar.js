import React from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import { BarChartOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const StyledSider = styled(Sider)`
    width: 400;
    height: 100vh;
`;
const Logo = styled.div`
    color: #ffffff;
    text-align: center;
    margin: 30px 0;
`;

const Sidebar = () => {
    return (
        <StyledSider width="250">
            <Logo>관리자 페이지</Logo>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<BarChartOutlined />}>
                    <Link to="/">일일 방문자 수</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<UserOutlined />}>
                    <Link to="/users">이벤트 응모자 정보</Link>
                </Menu.Item>
            </Menu>
        </StyledSider>
    );
};
export default Sidebar;
