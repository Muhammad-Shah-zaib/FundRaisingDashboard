import { IUserResponseDtoList } from "@/models/DTOs/IUserResponseDto";
import UserService from "@/Services/UserService.ts"
import { startSpinner, stopSpinner } from "@/utils/SpinnerFn.ts";
import { toast } from "sonner";
import { IRegistrationRequestDto } from "@/models/DTOs/RegistrationRequest.ts";
import TriggerClick from "@/utils/TriggerClick";
import { IUserUpdateRequestDto } from "@/models/DTOs/UpdateUserDto";

export type TGetAllUsersFn = (setUserState: (userList: IUserResponseDtoList) => void, spinnerId?: string) => void;
export type TRegisterUserFn = (setUserState: (userList: IUserResponseDtoList) => void, data: IRegistrationRequestDto, spinnerId?: string) => void;
export type TDeleteUserFn = (setUserState: (userList: IUserResponseDtoList) => void, userId: number, spinnerId?: string, dialogSpinnerId?: string) => void;
export type TUpdateUserFn = (setUserState: (userList: IUserResponseDtoList) => void, userId: number, data: IUserUpdateRequestDto, spinnerId?: string, dialogSpinnerId?: string) => void;

export default function useUserService(): [TGetAllUsersFn, TRegisterUserFn, TDeleteUserFn, TUpdateUserFn] {
    // instantiating the UserService class
    const _userService = new UserService();

    // we need to use all the function fo user service here and return the implemented logic from here in an array

    // TO GET ALL THE USERs
    const GetAllUsers: TGetAllUsersFn = (setUserState: (userList: IUserResponseDtoList) => void, spinnerId?: string) => {
        const users$ = _userService.GetAllUsers$();
        setUserState([]);
        users$.subscribe((res) => {
            setUserState(res);
            spinnerId && stopSpinner(spinnerId);
        }, (err) => {
            console.error(err);
            toast.error("Something went wrong.", {
                description: "Check your Network and Try again.",
                position: "top-right",
                action: {
                    label: "Retry",
                    onClick: () => {
                        spinnerId && startSpinner(spinnerId);
                        GetAllUsers(setUserState, spinnerId)
                    }
                }
            });
            spinnerId && stopSpinner(spinnerId)
        })

    }

    // TO REGISTER A USER
    const RegisterUser: TRegisterUserFn = (setUserState: (userList: IUserResponseDtoList) => void, data: IRegistrationRequestDto, spinnerId?: string) => {
        const registerUser$ = _userService.RegisterUser$(data);

        registerUser$.subscribe((res) => {
            console.group("Grouping")
            console.warn(res)
            console.groupEnd();
            // since new user is added, so now we need to fetch the new data again
            if (res.status === 200) {
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

    const DeleteUser: TDeleteUserFn = (setUserState: (userList: IUserResponseDtoList) => void, userId: number, spinnerId?: string, dialogSpinnerId?: string) => {
        dialogSpinnerId && startSpinner(dialogSpinnerId);
        const deleteUser$ = _userService.DeleteUser$(userId);

        deleteUser$.subscribe((res) => {
            if (res.status === 200) {
                TriggerClick('dialog-close-btn');
                toast.success("User has been deleted successfully", {
                    description: "If the user list is not updated you can reload it to get the updated list"
                });
                GetAllUsers(setUserState, spinnerId);
            }
            dialogSpinnerId && stopSpinner(dialogSpinnerId);
        }, (err) => {
            console.error(err);
            toast.error("User deletion failed");
            dialogSpinnerId && stopSpinner(dialogSpinnerId);
        });
    }


    const UpdateUser: TUpdateUserFn = (setUserState, userId, data, spinnerId?, dialogSpinnerId?) => {
        dialogSpinnerId && startSpinner(dialogSpinnerId);
        const updateUser$ = _userService.UpdateUser$(userId, data);

        updateUser$.subscribe((res) => {
            if (res.status === 200) {
                toast.success("User has been updated successfully");
                GetAllUsers(setUserState, spinnerId);
            }
            dialogSpinnerId && stopSpinner(dialogSpinnerId);
        }, (err) => {
            console.error(err);
            toast.error("User updation failed");
            dialogSpinnerId && stopSpinner(dialogSpinnerId);
        });
    }
    return [GetAllUsers, RegisterUser, DeleteUser, UpdateUser];
}