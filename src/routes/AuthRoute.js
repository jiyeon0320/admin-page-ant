import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute = ({ component: Component, ...rest }) => {
    const auth = useSelector((state) => state.auth);
    console.log(auth);
    return (
        <Route
            {...rest}
            render={(props) =>
                auth !== null ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/admin-login',
                        }}
                    />
                )
            }
        />
    );
};

export default AuthRoute;
