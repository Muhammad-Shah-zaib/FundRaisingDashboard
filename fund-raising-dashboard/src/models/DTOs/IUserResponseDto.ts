export type IUserResponseDtoList = IUserResponseDto[]

export interface IUserResponseDto {
    userId: number
    firstName: string
    lastName: string
    email: string
    userType: string
    userAuthLogsList: UserAuthLogsList[]
}

export interface UserAuthLogsList {
    eventType: string
    eventTimestamp: string
}
