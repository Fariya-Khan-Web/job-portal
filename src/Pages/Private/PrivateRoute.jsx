import React, { useContext } from 'react';
import AuthContext from '../../AuthProvider/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading, setLoading } = useContext(AuthContext)

    if (loading) {
        return (
            <div className='flex justify-center items-center'>
                <span className="loading loading-bars loading-lg"></span>
            </div>
            )
    }

    if (user) {
        setLoading(false)
        return children;
    }

    return <Navigate to='/login' />
};

export default PrivateRoute;