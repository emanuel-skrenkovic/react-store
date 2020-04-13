import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

// export interface ProtectedRouteProps extends RouteProps {
//     isAuthenticated: boolean;
//     isAllowed: boolean;
// }

export interface ProtectedRouteProps extends RouteProps {
    allowExpression: boolean;
    fallbackRoute: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowExpression, fallbackRoute, ...rest }) => {
    // return isAuthenticated ? <Route {...rest} /> : <Redirect to="/login" />;
    return allowExpression ? <Route {...rest} /> : <Redirect to={fallbackRoute} />;
};