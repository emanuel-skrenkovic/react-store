import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
    isAuthenticated: boolean;
    isAllowed: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, ...rest }) => {
    return isAuthenticated ? <Route {...rest} /> : <Redirect to="/login" />;
};