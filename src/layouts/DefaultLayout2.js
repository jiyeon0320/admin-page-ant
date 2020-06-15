import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

const DefaultLayout2 = ({ children }) => {
    return <Layout>{children}</Layout>;
};
DefaultLayout2.propTypes = {
    children: PropTypes.node,
};
export default DefaultLayout2;
