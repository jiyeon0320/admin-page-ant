import React, { useState, useEffect } from 'react';
// import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { requestAdminLogin } from '../actions';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// const useStyles = makeStyles(theme => ({
//     root: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       flexDirection: 'column',
//       '& > *': {
//         margin: theme.spacing(1),
//         width: '50ch',
//       },
//     },
//     // title: {
//     //     textAlign: 'center',
//     //     fontSize: '2rem',
//     //     marginBottom: '1.5rem',
//     // },
//     vali: {
//       color: 'red',
//       fontSize: '0.8rem',
//     },
//     paper: {
//       marginTop: theme.spacing(8),
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     avatar: {
//       margin: theme.spacing(1),
//       backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//       width: '100%', // Fix IE 11 issue.
//       marginTop: theme.spacing(1),
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//     },
//     link: {
//       color: 'inherit',
//     },
//   }));

const Login = () => {
    // const classes = useStyles();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const [userid, setUserid] = useState('');
    const [pwd, setPwd] = useState('');
    const history = useHistory();

    useEffect(() => {
        if (auth !== null) {
            history.push('/');  //count
        }
    }, [auth, history]);

    const onClick = () => {
        dispatch(requestAdminLogin({ userid, pwd }));
        console.log(userid, pwd)
        if (userid === '' && pwd === '') {
            alert('빈 칸을 입력하세요.');
            return;
        }
    };

    return (

        // <Container maxWidth="xs">
        //     <CssBaseline />
        //     <div className={classes.paper}>
        //         <Avatar className={classes.avatar}>
        //         <LockOutlinedIcon />
        //         </Avatar>
        //         <Typography component="h1" variant="h5">
        //         LOGIN
        //         </Typography>
        //         <form className={classes.form}>
        //         <TextField
        //             variant="outlined"
        //             margin="normal"
        //             required
        //             fullWidth
        //             name="userid"
        //             label="이메일"
        //             value={userid}
        //             onChange={e => setUserid(e.target.value)}
        //             autoFocus
        //         />

        //         <TextField
        //             variant="outlined"
        //             margin="normal"
        //             required
        //             fullWidth
        //             name="pwd"
        //             label="비밀번호"
        //             type="password"
        //             value={pwd}
        //             onChange={e => setPwd(e.target.value)}
        //         />
        //         {/* <FormControlLabel
        //             control={<Checkbox value="remember" color="primary" />}
        //             label="이메일 기억하기"
        //         /> */}
        //         <Button
        //             type="submit"
        //             variant="contained"
        //             color="primary"
        //             disableElevation //버튼 그림자
        //             fullWidth
        //             onClick={onClick}
        //             className={classes.submit}
        //         >
        //             로그인
        //         </Button>
        //         {/* <Grid container>
        //             <Grid item xs>
        //             <Link to="/findpw" variant="body2" className={classes.link}>
        //                 비밀번호 찾기
        //             </Link>
        //             </Grid>
        //             <Grid item>
        //             <Link to="/register" variant="body2" className={classes.link}>
        //                 회원가입
        //             </Link>
        //             </Grid>
        //         </Grid> */}
        //         </form>
        //     </div>
            
        //     </Container>

        <div>
          

    <input type="text" value={userid} onChange={e => setUserid(e.target.value)}/>
    <input type="text" value={pwd} onChange={e => setPwd(e.target.value)}/>
    <button onClick={onClick}>로그인</button>
           
  </div>
    );
};
export default Login;
