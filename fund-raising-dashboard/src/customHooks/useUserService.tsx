import { IUserResponseDtoList } from "@/models/DTOs/IUserResponseDto";
import UserService from "@/Services/UserService"

export default function useUserService() {
    // instantiating the UserService class
    const _userService = new UserService();

    // we need to use all the function fo user service here and return all of the implemented logic from here in an array

    // TO GET ALL THE USERs
    function GetAllUsers(setUsersState: (userList: IUserResponseDtoList) => void) {
        const users$ = _userService.GetAllUsers$();

        return users$.subscribe((res) => {
            setUsersState(res);
            console.log(res)
        })

    }

    return GetAllUsers;
}