import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { AuthContext } from '../Contexts/UserContexts';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        <PropagateLoader color="#36d7b7"></PropagateLoader>
    }
    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default PrivateRoute;