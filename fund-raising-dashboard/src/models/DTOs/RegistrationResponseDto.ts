export default class RegistrationResponseDto {
    public success: boolean = false;
    public message: string = "";
    public email: string = "";
    public errors?: string[]
}
