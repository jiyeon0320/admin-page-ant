import React, { useMemo } from 'react';
import { Layout, Table } from 'antd';
import styled from 'styled-components';
import { useTable, useSortBy } from 'react-table';
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

function Table({ columns, data }) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data,
        },
        useSortBy,
    );
    const firstPageRows = rows.slice(0, 20);
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                                <span>
                                    {column.isSorted ? (column.isSortedDesc ? '↓' : '↑') : ''}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

const Count = () => {
    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                columns: [
                    {
                        Header: 'First Name',
                        accessor: 'firstName',
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'lastName',
                    },
                ],
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: 'Age',
                        accessor: 'age',
                    },
                    {
                        Header: 'Visits',
                        accessor: 'visits',
                    },
                    {
                        Header: 'Status',
                        accessor: 'status',
                    },
                    {
                        Header: 'Profile Progress',
                        accessor: 'progress',
                    },
                ],
            },
        ],
        [],
    );
    const data = useMemo(() => makeData(20), []);

    return (
        <Layout>
            <Sidebar />
            <Layout>
                <StyledHeader>일일 방문자 수</StyledHeader>
                <StyledContent>
                    <Table columns={columns} data={data}></Table>
                </StyledContent>
            </Layout>
        </Layout>
    );
};
export default Count;
