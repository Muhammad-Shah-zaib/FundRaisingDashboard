export enum UserType {
    Moderator= "MODERATOR",
    StaffMember = "STAFF_MEMBER"
}

export interface IRegistrationRequestDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userType: string;
    cms: number;
    phoneNo: string;
}
export default class RegistrationRequest implements IRegistrationRequestDto {
    public cms: number = 0;
    public phoneNo: string = "";
    public firstName: string = "";
    public lastName: string = "";
    public email: string = "";
    public password: string = "";
    public userType : string = UserType.Moderator.toString();

    // constructor
    constructor(data?: IRegistrationRequestDto) {
        if (data) {
            this.cms = data.cms;
            this.phoneNo = data.phoneNo;
            this.firstName = data.firstName;
            this.lastName = data.lastName;
            this.email = data.email;
            this.password = data.password;
            this.userType = data.userType;
        }
    }
}
