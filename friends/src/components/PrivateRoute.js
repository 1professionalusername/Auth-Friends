import React from 'react';
import { Route, Redirect } from 'react-router-dom';


// Create a <PrivateRoute /> component to protect your other routes. It should check localStorage for a token, and redirect the user to your login route if there is not a token.



const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} />;
                }
                console.log('Failed to login');
                return <Redirect to='/login' />;
            }}
        />
    );
};

export default PrivateRoute;