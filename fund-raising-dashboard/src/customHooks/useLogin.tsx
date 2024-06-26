/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";
import { delay, tap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { LoginUrl } from "@/environment/serverUrls";
import { ILoginRequestDto } from "@/models/DTOs/ILoginRequestDto";

interface ILoginResponseDto {
    userCnic: number;
    email: string;
    firstName: string,
    lastName: string;
    token: string;
    status: boolean;
    errors?: string[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useLogin() {
    const navigate = useNavigate();
    // stop the default refresh of the page`
    return async (data: ILoginRequestDto) => {
        // get the values from the fetch
        // sending the post request using ajax of rxjs
        return ajax.post(LoginUrl, data, { 'Content-Type': 'application/json' })
            .pipe(
                delay(200),
                // tapping the response adn checking the response status
                tap((res) => {
                    const response: ILoginResponseDto = res.response as ILoginResponseDto;
                    console.log(response.token);
                    if (response.status) {
                        localStorage.setItem('token', response.token);
                        localStorage.setItem('email', response.email);
                        localStorage.setItem('firstName', response.firstName);
                        localStorage.setItem('lastName', response.lastName);
                        localStorage.setItem('userCnic', response.userCnic.toString());
                        navigate('/dashboard');
                    }
                })
            )

    }
}

export default useLogin

