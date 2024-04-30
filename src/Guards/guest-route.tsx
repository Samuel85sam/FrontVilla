import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../Zustand/authStore';

const GuestRoute = (props: { children: any; }) => {
    const isAuthenticated = useAuthStore(state => state.isAuthenticated);

    if (isAuthenticated) {
        return <Navigate to="/back_office" />;
    }
    return props.children;
};

export default GuestRoute;
