import React from 'react';
import { Layout, Menu } from 'antd';
import { AppstoreOutlined, BarChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content, Table, Space } = Layout;

const DefaultLayout = () => {
    return (
        <Layout>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
            >
                <div className="logo"> 햇반 로고 </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1" icon={<BarChartOutlined />}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        Option 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<AppstoreOutlined />}>
                        Option 3
                    </Menu.Item>
                    <Menu.Item key="4" icon={<TeamOutlined />}>
                        Option 4
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>Content</Content>
                <Footer style={{ textAlign: 'center' }}>Footer</Footer>
            </Layout>
        </Layout>
    );
};
export default DefaultLayout;
