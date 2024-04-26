import { IUserResponseDtoList } from "@/models/DTOs/IUserResponseDto";
import UserService from "@/Services/UserService"
import {stopSpinner} from "@/utils/SpinnerFn.ts";

export default function useUserService() {
    // instantiating the UserService class
    const _userService = new UserService();

    // we need to use all the function fo user service here and return the implemented logic from here in an array

    // TO GET ALL THE USERs
    function GetAllUsers(setUsersState: (userList: IUserResponseDtoList) => void, spinnerId: string) {
        const users$ = _userService.GetAllUsers$();

         users$.subscribe((res) => {
            setUsersState(res);
            console.log(res)
             spinnerId && stopSpinner(spinnerId);
        }, (err) => {
             console.error(err);
             spinnerId && stopSpinner(spinnerId)
         })

    }

    return GetAllUsers;
}