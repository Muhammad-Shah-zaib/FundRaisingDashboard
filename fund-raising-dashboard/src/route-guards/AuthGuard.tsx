import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"

function AuthGuard() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let AUTH: {token: any} | null = null;
    if (localStorage.getItem('token')){
        AUTH = { token: localStorage.getItem('token') }
    }
    // const AUTH = { token: localStorage.getItem('token') }
    const navigate = useNavigate();

    // if the token is not present in the local storage then redirect to the login page
    useEffect(() => {
        if (!AUTH) navigate('/login')
    }, [AUTH, navigate])

    return (
        <Outlet />
    )
}

export default AuthGuard