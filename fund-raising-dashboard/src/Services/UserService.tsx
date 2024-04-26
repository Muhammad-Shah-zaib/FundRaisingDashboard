import { IUserResponseDtoList } from "@/models/DTOs/IUserResponseDto.ts";
import { ajax } from "rxjs/ajax";
import { GetAllUserUrl } from "@/environment/serverUrls.ts";
import {delay, Observable, tap} from "rxjs";
import {stopSpinner} from "@/utils/SpinnerFn.ts";

export default class UserService {
    public GetAllUsers$( spinnerId ?: string): Observable<IUserResponseDtoList> {
        return ajax.getJSON<IUserResponseDtoList>(GetAllUserUrl)
            .pipe(
                delay(200),
                tap( () => {
                    // if spinnerId is provided, so we need to stop the spinner
                    spinnerId && stopSpinner(spinnerId);
                })
            );
    }
}