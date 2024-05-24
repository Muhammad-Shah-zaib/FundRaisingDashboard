export interface IUserUpdateRequestDto {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    userType: string;
    cms: number;
    phoneNo: string;
}

export default class UserUpdateRequestDto implements IUserUpdateRequestDto {
    public userId: number = 0;
    public firstName: string = "";
    public lastName: string = "";
    public email: string = "";
    public userType: string = "";
    public cms: number;
    public phoneNo: string;
    constructor(firstName: string, lastName: string, email: string, userType: string, cms: number, phoneNo: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userType = userType;
        this.cms = cms;
        this.phoneNo = phoneNo;
    }
    
}