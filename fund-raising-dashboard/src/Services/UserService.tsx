import { IUserResponseDtoList } from "@/models/DTOs/IUserResponseDto.ts";
import { ajax } from "rxjs/ajax";
import { GetAllUserUrl } from "@/environment/serverUrls.ts";
import { delay, Observable } from "rxjs";

export default class UserService {
    public GetAllUsers$(): Observable<IUserResponseDtoList> {
        return ajax.getJSON<IUserResponseDtoList>(GetAllUserUrl)
            .pipe(
                delay(200),
            );

    }
}