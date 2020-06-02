import React from 'react';
import { Layout, Table, Card } from 'antd';
import styled from 'styled-components';
import Sidebar from '../Layout/Sidebar';

const { Header, Content } = Layout;

const StyledHeader = styled(Header)`
    background-color: #ffffff;
    font-size: 30px;
    font-weight: bold;
`;
const StyledContent = styled(Content)`
    background-color: pink;
    padding: 24px;
    margin: 0;
    min-height: 280px;
    overflow: auto;
`;
const StyledCard = styled(Card)`
    text-align: center;
    margin-bottom: 50px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px gray;
    p > span {
        font-size: 50px;
        font-weight: bold;
    }
`;
const CardWrapp = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 300px;
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
            multiple: 5,
        },
    },
    {
        title: '실 참여자 수',
        dataIndex: 'Participants',
        sorter: {
            compare: (a, b) => a.counter - b.counter,
            multiple: 4,
        },
    },
    {
        title: 'SNS',
        children: [
            {
                title: '페이스북',
                dataIndex: 'facebook',
                key: 'age',
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
        ],
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
                <StyledContent>
                    <CardWrapp>
                        <StyledCard title="오늘 방문자 수 " bordered={false} style={{ width: 300 }}>
                            <p>
                                <span>50</span>명
                            </p>
                        </StyledCard>
                        <StyledCard
                            title=" 이모티콘 잔여 수량 "
                            bordered={false}
                            style={{ width: 300 }}
                        >
                            <p>
                                <span>5050</span>개
                            </p>
                        </StyledCard>
                    </CardWrapp>
                    <Table
                        style={{ fontSize: '60px' }}
                        columns={columns}
                        dataSource={data}
                        onChange={onChange}
                    ></Table>
                </StyledContent>
            </Layout>
        </Layout>
    );
};
export default Count;
