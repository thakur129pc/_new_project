import React from 'react';
import { Navigate } from 'react-router';
import Cookies from 'js-cookie';

interface OpenRouteProps {
  children: React.ReactElement;
}

const OpenRoute: React.FC<OpenRouteProps> = ({ children }) => {
  const token = Cookies.get('token');

  if (token) {
    return <Navigate to="/" replace />; // Redirect to the dashboard if the user is authenticated
  }

  return children;
};

export default OpenRoute;
