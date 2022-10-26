import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { AuthContext } from '../Contexts/UserContexts';
import Pricing from '../Others/Pricing/Pricing';

const PrivateRoute = ({ children }) => {
    const { user, loading, buy } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        <PropagateLoader color="#36d7b7"></PropagateLoader>
    }
    if (!user) {
        return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
    }
    if (!buy) {
        return <Pricing></Pricing>
    }
    return children;

};

export default PrivateRoute;