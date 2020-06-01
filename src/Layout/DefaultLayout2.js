import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

// import { BarChartOutlined, UserOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom';
// const {} = Layout;

const DefaultLayout2 = ({ children }) => {
    return <Layout>{children}</Layout>;
};
DefaultLayout2.propTypes = {
    children: PropTypes.node,
};
export default DefaultLayout2;
