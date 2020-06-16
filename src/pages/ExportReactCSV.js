import React from 'react'
import { CSVLink } from 'react-csv'
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export const ExportReactCSV = ({csvData, fileName}) => {
    return (
        <Button type="primary" shape="round" icon={<DownloadOutlined />}>
            <CSVLink data={csvData} filename={fileName}>Export</CSVLink>
        </Button>
    )
}