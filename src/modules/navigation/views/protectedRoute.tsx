import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { ProtectedRouteProps } from 'modules/navigation';

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, ...rest }) => {
    return isAuthenticated ? <Route {...rest} /> : <Redirect to="/login" />;
};