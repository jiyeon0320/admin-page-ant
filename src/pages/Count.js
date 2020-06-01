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
        title: '날짜',
        dataIndex: 'date',
    },
    {
        title: '접속자 수',
        dataIndex: 'counter',
        sorter: {
            compare: (a, b) => a.counter - b.counter,
            multiple: 4,
        },
    },
    {
        title: '페이스북',
        dataIndex: 'facebook',
        sorter: {
            compare: (a, b) => a.facebook - b.facebook,
            multiple: 3,
        },
    },
    {
        title: '트위터',
        dataIndex: 'twitter',
        sorter: {
            compare: (a, b) => a.twitter - b.twitter,
            multiple: 2,
        },
    },
    {
        title: '카카오톡',
        dataIndex: 'kakao',
        sorter: {
            compare: (a, b) => a.kakao - b.kakao,
            multiple: 1,
        },
    },
];

const data = [
    {
        key: '1',
        date: '2020-05-28',
        counter: 98,
        facebook: 30,
        twitter: 50,
        kakao: 18,
    },
    {
        key: '2',
        date: '2020-05-29',
        counter: 500,
        facebook: 250,
        twitter: 103,
        kakao: 77,
    },
    {
        key: '3',
        date: '2020-05-30',
        counter: 258,
        facebook: 12,
        twitter: 200,
        kakao: 30,
    },
    {
        key: '4',
        date: '2020-05-31',
        counter: 1500,
        facebook: 525,
        twitter: 600,
        kakao: 350,
    },
];

const Count = () => {
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <Layout>
            <Sidebar />
            <Layout>
                <StyledHeader>일일 방문자 수</StyledHeader>
                {/* <StyledContent>{content}</StyledContent> */}
                <StyledContent>
                    <Table columns={columns} dataSource={data} onChange={onChange}></Table>
                </StyledContent>
            </Layout>
        </Layout>
    );
};
export default Count;
