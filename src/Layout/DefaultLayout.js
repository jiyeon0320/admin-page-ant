import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import { BarChartOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;

const DefaultLayout = ({ content }) => {
    return (
        <Layout>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    width: '',
                    position: 'fixed',
                    left: 0,
                }}
            >
                <div
                    className="logo"
                    style={{ color: '#fff', textAlign: 'center', padding: '20px' }}
                >
                    관리자 페이지
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<BarChartOutlined />}>
                        <Link to="/count">일일 방문자 수</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        <Link to="/users">이벤트 응모자 정보</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header>헤더</Header>
                {/* <Content style={{ width: '100%', margin: '24px 16px 0' }}> */}
                <Content>content</Content>
                <Footer>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};
DefaultLayout.propTypes = {
    children: PropTypes.node,
};
export default DefaultLayout;
