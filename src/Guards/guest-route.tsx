import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../Zustand/authStore';

//TODO: props types élément parent ==> enfant
//TODO: gérer porps types et routeur... comment faire en sorte de passer les path en props ?

const GuestRoute = (props: { children: any; }) => {
    const isAuthenticated = useAuthStore(state => state.isAuthenticated);

    if (isAuthenticated) {
        return <Navigate to="/back_office" />;
    }
    return props.children;
};

export default GuestRoute;
