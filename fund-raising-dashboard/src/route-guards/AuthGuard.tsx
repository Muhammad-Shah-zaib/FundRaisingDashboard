import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom"

function AuthGuard() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let AUTH: {token: any} | null = null;
    if (localStorage.getItem('token')){
        AUTH = { token: localStorage.getItem('token') }
    }
    // const AUTH = { token: localStorage.getItem('token') }
    const navigate = useNavigate();
    const location = useLocation();

    // if the token is not present in the local storage then redirect to the login page
    useEffect(() => {
        if (!AUTH) navigate('/login')
        if (AUTH?.token && location.pathname.includes('/login')) navigate('/dashboard');
    }, [AUTH, navigate, location])

    return (
        <Outlet />
    )
}

export default AuthGuard