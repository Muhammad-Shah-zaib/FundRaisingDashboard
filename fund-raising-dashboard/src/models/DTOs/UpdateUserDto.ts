export interface IUserUpdateRequestDto {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    userType: string;
}

export default class UserUpdateRequestDto implements IUserUpdateRequestDto {
    public userId: number = 0;
    public firstName: string = "";
    public lastName: string = "";
    public email: string = "";
    public userType: string = "";

    constructor(firstName: string, lastName: string, email: string, userType: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userType = userType;
    }
}