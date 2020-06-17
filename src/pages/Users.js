import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Table } from 'antd';
import { requestEventUsers } from '../actions';
import styled from 'styled-components';
import Sidebar from '../layouts/Sidebar';
import { ExportCSV } from './ExportCSV';

// import { VerticalAlignBottomOutlined } from '@ant-design/icons';
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
        key: 'name',
        title: '이름',
        dataIndex: 'name',
        render: (name) => <p style={{ fontSize: '18px', paddingTop: '11px' }}>{name}</p>,
    },
    {
        title: '연락처',
        dataIndex: 'phone',
        align: 'center',
        render: (phone) => <p style={{ fontSize: '18px', paddingTop: '11px' }}>{phone}</p>,
    },
    {
        title: '응모날짜',
        dataIndex: 'reqdate',
        align: 'center',
        render: (reqdate) => <p style={{ fontSize: '18px', paddingTop: '11px' }}>{reqdate}</p>,
    },
    {
        title: '쿠폰번호',
        dataIndex: 'coupon',
        align: 'center',
        render: (coupon) => <p style={{ fontSize: '18px', paddingTop: '11px' }}>{coupon}</p>,
    },

    {
        title: '이벤트1 참여',
        dataIndex: 'event1',
        align: 'center',
        render: (event1) => <p style={{ fontSize: '18px', paddingTop: '11px' }}>{event1}</p>,
    },

    {
        title: '이벤트2 참여',
        dataIndex: 'event2',
        align: 'center',
        render: (event2) => <p style={{ fontSize: '18px', paddingTop: '11px' }}>{event2}</p>,
    },
];

const Users = () => {
    const user = useSelector((state) => state.auth.userid);
    const usersData = useSelector((state) => state.usersData);
    const dispatch = useDispatch();
    const filename = 'userData';
    console.log(usersData);
    useEffect(() => {
        dispatch(requestEventUsers({ user }));
    }, [user, dispatch]);

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <Layout>
            <Sidebar />
            <Layout style={{ overflow: 'visible ' }}>
                <StyledHeader>이벤트 당첨자 정보</StyledHeader>
                <StyledContent>
                    <StyledTable
                        columns={columns}
                        dataSource={usersData}
                        onChange={onChange}
                        size="small"
                    ></StyledTable>
                    <ExportCSV csvData={usersData} fileName={filename} />
                </StyledContent>
            </Layout>
        </Layout>
    );
};
export default Users;
