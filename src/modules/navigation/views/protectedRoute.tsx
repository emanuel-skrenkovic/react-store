import React from 'react';
import {Route, Redirect, RouteProps} from 'react-router-dom';

export interface ProtectedRouteProps extends RouteProps {
    isAuthenticated: boolean;
    isAllowed: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, ...rest }) => {
    return isAuthenticated ? <Route {...rest} /> : <Redirect to="/login" />;
};