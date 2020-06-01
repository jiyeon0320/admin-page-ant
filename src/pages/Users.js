import React from 'react';
import { Layout, Table } from 'antd';
import styled from 'styled-components';
import Sidebar from '../Layout/Sidebar';
const { Header, Content } = Layout;

const StyledHeader = styled(Header)`
    background-color: #ffffff;
`;
const StyledContent = styled(Content)`
    background-color: pink;
    padding: 24px;
    margin: 0;
    min-height: 280px;
    overflow: auto;
`;
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Chinese Score',
        dataIndex: 'chinese',
        sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
    {
        title: 'Math Score',
        dataIndex: 'math',
        sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
        },
    },
    {
        title: 'English Score',
        dataIndex: 'english',
        sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
        },
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        chinese: 98,
        math: 60,
        english: 70,
    },
    {
        key: '2',
        name: 'Jim Green',
        chinese: 98,
        math: 66,
        english: 89,
    },
    {
        key: '3',
        name: 'Joe Black',
        chinese: 98,
        math: 90,
        english: 70,
    },
    {
        key: '4',
        name: 'Jim Red',
        chinese: 88,
        math: 99,
        english: 89,
    },
];
const Users = () => {
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <Layout>
            <Sidebar />
            <Layout>
                <StyledHeader>이모티콘 당첨자 정보</StyledHeader>
                {/* <StyledContent>{content}</StyledContent> */}
                <StyledContent>
                    <Table columns={columns} dataSource={data} onChange={onChange}></Table>
                </StyledContent>
            </Layout>
        </Layout>
    );
};
export default Users;
