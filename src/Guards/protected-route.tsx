import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../Zustand/authStore';
//TODO: gérer porps types et routeur... comment faire en sorte de passer les path en props ?

const ProtectedRoute = (props: { children: any; }) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  if (!isAuthenticated) { return <Navigate to="../auth" />; }

  return props.children;
};

export default ProtectedRoute;
