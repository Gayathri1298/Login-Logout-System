import { Route, Navigate } from 'react-router-dom';
import { checkRole } from './auth';
import React from 'react';

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
    const token = localStorage.getItem('token'); 
    const role = localStorage.getItem('role');

   
    const isAuthenticated = token && allowedRoles.includes(role);
    if (!token) {
        return <Navigate to="/login" />; 
    }

    const decodedToken = JSON.parse(atob(token.split('.')[1])); 
    const userRole = decodedToken?.role; 
    if (!userRole || !checkRole(userRole, allowedRoles)) {
        return <Navigate to="/unauthorized" />; 
    }

    return (
        <Route
            {...rest}
            element={isAuthenticated ? <Component /> : <Navigate to="/unauthorized" />}
        />
        
    );
    

    

};

export default ProtectedRoute;
