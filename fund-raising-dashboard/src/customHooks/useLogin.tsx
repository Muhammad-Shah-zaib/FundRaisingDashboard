/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";
import { delay, tap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { LoginUrl } from "@/environment/serverUrls";
import { ILoginRequestDto } from "@/models/DTOs/ILoginRequestDto";

interface ILoginResponseDto {
    email: string;
    token: string;
    status: boolean;
    errors?: string[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useLogin() {
    const navigate = useNavigate();
    // stop the default refresh of the page`
    return async (data: ILoginRequestDto) => {
        // get the values from the from
        // sending the post request using ajax of rxjs
        const req = ajax.post(LoginUrl, data, { 'Content-Type': 'application/json' })
            .pipe(
                delay(200),
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

