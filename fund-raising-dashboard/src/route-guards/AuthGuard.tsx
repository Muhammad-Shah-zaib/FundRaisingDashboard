import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"

function AuthGuard() {
    const AUTH = { token: null }
    const navigate = useNavigate();

    // if the token is not present in the local storage then redirect to the login page


    useEffect(() => {
        if (!AUTH.token) navigate('/login')
        else navigate('/dashboard')
    }, [])
    return (
        <>
            <Outlet />
        </>
    )
}

export default AuthGuard