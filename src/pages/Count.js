import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestDailyStat } from '../actions';
import { Layout, Table, Card } from 'antd';
import styled from 'styled-components';
import Sidebar from '../layouts/Sidebar';

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
        key: 'trim_date',
        align: 'center',
        render: (trim_date) => <p style={{ fontSize: '18px', paddingTop: '11px' }}>{trim_date}</p>,
    },
    {
        title: '접속자 수',
        dataIndex: 'visitor',
        align: 'center',
        render: (visitor) => <p style={{ fontSize: '18px', paddingTop: '11px' }}>{visitor}</p>,
        sorter: {
            compare: (a, b) => a.visitor - b.visitor,
            multiple: 5,
        },
    },
    {
        title: '실 참여자 수',
        dataIndex: 'joiner',
        align: 'center',
        render: (joiner) => <p style={{ fontSize: '18px', paddingTop: '11px' }}>{joiner}</p>,
        sorter: {
            compare: (a, b) => a.joiner - b.joiner,
            multiple: 4,
        },
    },
    {
        title: '유입 경로',
        children: [
            {
                title: '카카오톡',
                dataIndex: 'channel_kakao',
                align: 'center',
                render: (channel_kakao) => (
                    <p style={{ fontSize: '18px', paddingTop: '11px' }}>{channel_kakao}</p>
                ),
                sorter: {
                    compare: (a, b) => a.channel_kakao - b.channel_kakao,
                    multiple: 1,
                },
            },
            {
                title: '페이스북',
                dataIndex: 'channel_fb',
                align: 'center',
                render: (channel_fb) => (
                    <p style={{ fontSize: '18px', paddingTop: '11px' }}>{channel_fb}</p>
                ),
                sorter: {
                    compare: (a, b) => a.channel_fb - b.channel_fb,
                    multiple: 3,
                },
            },
            {
                title: '트위터',
                dataIndex: 'channel_tw',
                align: 'center',
                render: (channel_tw) => (
                    <p style={{ fontSize: '18px', paddingTop: '11px' }}>{channel_tw}</p>
                ),
                sorter: {
                    compare: (a, b) => a.channel_tw - b.channel_tw,
                    multiple: 2,
                },
            },
        ],
    },
    {
        title: 'SNS',
        children: [
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
        ],
    },
];

const Count = () => {
    // const [data, setData] = useState('');
    const user = useSelector((state) => state.auth.userid);
    const countData = useSelector((state) => state.countData);
    const dispatch = useDispatch();
    console.log(countData);
    useEffect(() => {
        dispatch(requestDailyStat({ user }));
    }, [user, dispatch]);

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
                            <p>{/* <span>{countData.type2.today_visit}</span>명 */}</p>
                        </StyledCard>
                        <StyledCard title=" 이벤트 1 참여자 수 " bordered={false}>
                            <p>
                                <span>5050</span>개
                            </p>
                        </StyledCard>
                        <StyledCard title=" 이벤트 2 참여자 수 " bordered={false}>
                            <p>
                                <span>5050</span>개
                            </p>
                        </StyledCard>
                    </CardWrapp>

                    <TableWrap>
                        <Table
                            columns={columns}
                            dataSource={countData}
                            onChange={onChange}
                            size="small"
                        />

                        {/* {dailyData.map((data) => (
                        <p>{data.trim_date}</p>
                        ))}
                        <p>{dailyData}</p> */}
                    </TableWrap>
                </StyledContent>
            </Layout>
        </Layout>
    );
};
export default Count;
