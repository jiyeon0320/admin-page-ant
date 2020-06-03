import React from 'react';
import { Layout, Table } from 'antd';
import styled from 'styled-components';
import Sidebar from '../Layout/Sidebar';
import { VerticalAlignBottomOutlined } from '@ant-design/icons';
// import './Users.css';
const { Header, Content } = Layout;

const StyledHeader = styled(Header)`
    background-color: #ffffff;
    font-size: 30px;
    font-weight: bold;
`;
const StyledContent = styled(Content)`
    background-color: #ffffff;
    padding: 24px;
    margin: 0;
    min-height: 280px;
    overflow: auto;
`;
const StyledTable = styled(Table)`
    color: red;
`;
// const StyledTable = styled(Table)`
//     font-size: 30%;

// `;
const columns = [
    {
        title: '이름',
        dataIndex: 'name',
        render: (name) => <p style={{ fontSize: '18px', paddingTop: '11px' }}>{name}</p>,
    },
    {
        title: '연락처',
        dataIndex: 'phone',
        align: 'center',
        render: (name) => <p style={{ fontSize: '18px', paddingTop: '11px' }}>{name}</p>,
    },
    {
        title: '이벤트1 참여',
        dataIndex: 'event1',
        align: 'center',
        render: (name) => <p style={{ fontSize: '18px', paddingTop: '11px' }}>{name}</p>,
    },
    {
        title: '이벤트2 참여',
        dataIndex: 'event2',
        align: 'center',
        render: (name) => <p style={{ fontSize: '18px', paddingTop: '11px' }}>{name}</p>,
    },
    {
        title: '이벤트2 코드',
        dataIndex: 'event2code',
        align: 'center',
        render: (name) => <p style={{ fontSize: '18px', paddingTop: '11px' }}>{name}</p>,
        sorter: {
            compare: (a, b) => a.event2code - b.event2code,
            multiple: 2,
        },
    },
    {
        title: '이모티콘 수령 유무',
        dataIndex: 'emoticon',
        align: 'center',
        render: (name) => <p style={{ fontSize: '18px', paddingTop: '11px' }}>{name}</p>,
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        phone: '010-0000-0000',
        event1: 'Y',
        event2: 'Y',
        event2code: 'X532-ABCD-13FD',
        emoticon: 'Y',
    },
    {
        key: '2',
        name: 'Jim Green',
        phone: '010-1111-1111',
        event1: 'Y',
        event2: 'Y',
        event2code: 'Y5Z3-ABCD-16GS',
        emoticon: 'N',
    },
    {
        key: '3',
        name: 'Joe Black',
        phone: '010-2222-2222',
        event1: 'N',
        event2: 'Y',
        event2code: 'FH54-ABCD-QE45',
        emoticon: 'N',
    },
    {
        key: '4',
        name: 'Jim Red',
        phone: '010-3333-3333',
        event1: 'Y',
        event2: 'N',
        event2code: '546G-ABCD-545A',
        emoticon: 'Y',
    },
    {
        key: '5',
        name: 'Amie Jule',
        phone: '010-4444-5555',
        event1: 'Y',
        event2: 'N',
        event2code: 'AD53-ABCD-1DF5',
        emoticon: 'N',
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
                <StyledHeader>이벤트 당첨자 정보</StyledHeader>
                <StyledContent>
                    <StyledTable
                        columns={columns}
                        dataSource={data}
                        onChange={onChange}
                        size="small"
                    ></StyledTable>
                </StyledContent>
            </Layout>
        </Layout>
    );
};
export default Users;
