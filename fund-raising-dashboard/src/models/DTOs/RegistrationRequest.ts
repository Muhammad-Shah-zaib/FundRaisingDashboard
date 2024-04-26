export enum UserType {
    Moderator= "MODERATOR",
    StaffMember = "STAFF_MEMBER"
}

export interface IRegistrationRequestDto {firstName: string;
    lastName: string;
    email: string;
    password: string;
    userType: string;

}
export default class RegistrationRequest implements IRegistrationRequestDto {
    public firstName: string = "";
    public lastName: string = "";
    public email: string = "";
    public password: string = "";
    public userType : string = UserType.Moderator.toString();
}
