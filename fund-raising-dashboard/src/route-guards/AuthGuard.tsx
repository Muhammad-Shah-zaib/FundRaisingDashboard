import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"

function AuthGuard() {
    const AUTH = { token: true }
    // const AUTH = { token: localStorage.getItem('token') }
    const navigate = useNavigate();

    // if the token is not present in the local storage then redirect to the login page
    useEffect(() => {
        if (!AUTH.token) navigate('/login')
    }, [AUTH.token, navigate])

    return (
        <Outlet />
    )
}

export default AuthGuard