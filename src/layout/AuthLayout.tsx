import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';
import Cookies from 'js-cookie'; // Assuming you're using js-cookie to manage cookies

export default function AuthLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}
