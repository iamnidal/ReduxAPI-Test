import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

const ProtectedRoutes = () => {
    
    const { loginStatus } = useSelector((state) => state?.user);
    return <>{loginStatus ? <Outlet /> : <Navigate to = "/login" />}</>
};
export default ProtectedRoutes;