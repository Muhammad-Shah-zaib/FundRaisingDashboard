import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"

function AuthGuard() {
    const AUTH = { token: undefined }
    const navigate = useNavigate();

    // if the token is not present in the local storage then redirect to the login page
    useEffect(() => {
        if (!AUTH.token) navigate('/login')
        else navigate('/dashboard')
    }, [AUTH.token, navigate])

    return (
        <Outlet />
    )
}

export default AuthGuard