import { IUserResponseDtoList } from "@/models/DTOs/IUserResponseDto";
import UserService from "@/Services/UserService.ts"
import {stopSpinner} from "@/utils/SpinnerFn.ts";
import {toast} from "sonner";
import {IRegistrationRequestDto} from "@/models/DTOs/RegistrationRequest.ts";

export type TGetAllUsersFn = (setUserState: (userList: IUserResponseDtoList) => void, spinnerId?: string) => void;
export type TRegisterUserFn = (setUserState: (userList: IUserResponseDtoList) => void, data: IRegistrationRequestDto, spinnerId?: string) => void;
export default function useUserService(): [TGetAllUsersFn, TRegisterUserFn]{
    // instantiating the UserService class
    const _userService = new UserService();

    // we need to use all the function fo user service here and return the implemented logic from here in an array

    // TO GET ALL THE USERs
    const GetAllUsers: TGetAllUsersFn = (setUserState: (userList: IUserResponseDtoList) => void, spinnerId?: string) => {
        const users$ = _userService.GetAllUsers$();

         users$.subscribe((res) => {
            setUserState(res);
             spinnerId && stopSpinner(spinnerId);
        }, (err) => {
             console.error(err);
             toast.error("Failed to fetch users");
             spinnerId && stopSpinner(spinnerId)
         })

    }

    // TO REGISTER A USER
    const RegisterUser: TRegisterUserFn = (setUserState: (userList: IUserResponseDtoList) => void, data: IRegistrationRequestDto, spinnerId?: string ) => {
        const registerUser$ = _userService.RegisterUser$(data);

        registerUser$.subscribe((res)=> {
            console.group("Grouping")
            console.warn(res)
            console.groupEnd();
            // since new user is added, so now we need to fetch the new data again
            if (res.status === 200){
                GetAllUsers(setUserState)
                toast.success("User has registered successfully");
            }
            // STOPPING SPINNER
            spinnerId && stopSpinner(spinnerId);
        }, (err) => {
            console.error(err);
            toast.error("User registration failed");

            // STOPPING SPINNER
            spinnerId && stopSpinner(spinnerId);
        });
    }
    return [GetAllUsers, RegisterUser];
}