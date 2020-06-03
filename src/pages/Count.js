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
const TableWrap = styled.div`
    /* font-weight: bold; */
`;
const StyledContent = styled(Content)`
    background-color: #ffffff;
    padding: 24px;
    margin: 0;
    min-height: 280px;
    overflow: auto;
`;
const StyledCard = styled(Card)`
    width: 300px;
    text-align: center;
    margin-bottom: 50px;
    border-radius: 10px;
    box-shadow: 3px 3px 10px gray;
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
        key: 'date',
        align: 'center',
        render: (date) => <p style={{ fontSize: '18px', paddingTop: '11px' }}>{date}</p>,
    },
    {
        title: '접속자 수',
        dataIndex: 'counter',
        align: 'center',
        render: (counter) => <p style={{ fontSize: '18px', paddingTop: '11px' }}>{counter}</p>,
        sorter: {
            compare: (a, b) => a.counter - b.counter,
            multiple: 5,
        },
    },
    {
        title: '실 참여자 수',
        dataIndex: 'participants',
        align: 'center',
        render: (participants) => (
            <p style={{ fontSize: '18px', paddingTop: '11px' }}>{participants}</p>
        ),
        sorter: {
            compare: (a, b) => a.participants - b.participants,
            multiple: 4,
        },
    },
    {
        title: 'SNS',
        children: [
            {
                title: '페이스북',
                dataIndex: 'facebook',
                align: 'center',
                render: (facebook) => (
                    <p style={{ fontSize: '18px', paddingTop: '11px' }}>{facebook}</p>
                ),
                key: 'age',
                sorter: {
                    compare: (a, b) => a.facebook - b.facebook,
                    multiple: 3,
                },
            },
            {
                title: '트위터',
                dataIndex: 'twitter',
                align: 'center',
                render: (twitter) => (
                    <p style={{ fontSize: '18px', paddingTop: '11px' }}>{twitter}</p>
                ),
                sorter: {
                    compare: (a, b) => a.twitter - b.twitter,
                    multiple: 2,
                },
            },
            {
                title: '카카오톡',
                dataIndex: 'kakao',
                align: 'center',
                render: (kakao) => <p style={{ fontSize: '18px', paddingTop: '11px' }}>{kakao}</p>,
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
        counter: 150,
        participants: 98,
        facebook: 30,
        twitter: 50,
        kakao: 18,
    },
    {
        key: '2',
        date: '2020-05-29',
        counter: 980,
        participants: 500,
        facebook: 250,
        twitter: 103,
        kakao: 77,
    },
    {
        key: '3',
        date: '2020-05-30',
        counter: 1204,
        participants: 258,
        facebook: 12,
        twitter: 200,
        kakao: 30,
    },
    {
        key: '4',
        date: '2020-05-31',
        counter: 3250,
        participants: 1500,
        facebook: 525,
        twitter: 600,
        kakao: 350,
    },
];

const Count = () => {
    // const Table = (prop) => {
    //     console.log(prop.columns[0].title);
    // };

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
                        <StyledCard title="오늘 방문자 수 " bordered={false}>
                            <p>
                                <span>50</span>명
                            </p>
                        </StyledCard>
                        <StyledCard title=" 이모티콘 잔여 수량 " bordered={false}>
                            <p>
                                <span>5050</span>개
                            </p>
                        </StyledCard>
                    </CardWrapp>

                    <TableWrap>
                        <Table
                            columns={columns}
                            dataSource={data}
                            onChange={onChange}
                            size="small"
                        ></Table>
                    </TableWrap>
                </StyledContent>
            </Layout>
        </Layout>
    );
};
export default Count;
