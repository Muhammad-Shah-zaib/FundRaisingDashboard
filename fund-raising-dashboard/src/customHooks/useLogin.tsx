/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";
import { delay, tap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { LoginUrl } from "@/environment/serverUrls";


interface ILoginResponseDto {
    email: string;
    token: string;
    status: boolean;
    errors?: string[];
}

function useLogin() {
    const navigate = useNavigate();
    // stop the default refresh of the page
    return async () => {
        // get the values from the from
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;
        // sending the post request using ajax of rxjs
        const req = ajax.post(LoginUrl, { email, password }, { 'Content-Type': 'application/json' })
            .pipe(
                delay(300),
                // tapping the response adn checking the response status
                tap((res) => {
                    const response: ILoginResponseDto = res.response as ILoginResponseDto;
                    if (response.status) {
                        localStorage.setItem('token', response.token);
                        navigate('/dashboard');
                    }
                })
            )

        return req;
    }

}

export default useLogin

