import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem('TOKEN')) {
          return <Component />
        } else {
          return <Redirect to="/log-in" />
        }
      }}
    />
  )
}

export default PrivateRoute