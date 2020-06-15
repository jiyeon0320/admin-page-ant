import axios from 'axios';
import config from './config';

export const postAdminLogin = ({ userid, pwd }) =>
    axios.post(config.adminLogin, { userid, pwd }).then((res) => res.data);
export const postDailyStat = () => axios.post(config.adminDaliyStat).then((res) => {console.log(res.data)});
export const postEventUsers = () => axios.post(config.adminEventUsers).then((res) => res.data);
