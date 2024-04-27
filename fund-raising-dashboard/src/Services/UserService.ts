import { IUserResponseDtoList } from "@/models/DTOs/IUserResponseDto.ts";
import {ajax, AjaxResponse} from "rxjs/ajax";
import {GetAllUserUrl, RegistrationUrl, DeleteUserUrl} from "@/environment/serverUrls.ts";
import {delay, Observable, tap} from "rxjs";
import RegistrationResponseDto from "@/models/DTOs/RegistrationResponseDto.ts";
import {IRegistrationRequestDto} from "@/models/DTOs/RegistrationRequest.ts";

export default class UserService {

    // this method return an observable of user list
    public GetAllUsers$(): Observable<IUserResponseDtoList> {
        return ajax.getJSON<IUserResponseDtoList>(GetAllUserUrl)
            .pipe(delay(200));
    }

    // this method return an observable of response in which there will be RegistrationResponse
    public RegisterUser$(data: IRegistrationRequestDto): Observable<AjaxResponse<RegistrationResponseDto>>{
        return ajax.post<RegistrationResponseDto>(RegistrationUrl, data)
            .pipe(
                delay(200),
                tap( res => {
                    if (res.status === 403) throw new Error("Un-Authorized access");
                })
            );
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public DeleteUser$(userId: number): Observable<AjaxResponse<any>>{
        return ajax.delete(DeleteUserUrl + userId)
        .pipe(
            delay(200),
            tap(res => {
                if (res.status === 403) throw new Error("Un-Authorized access");
            })
        );
    }
}