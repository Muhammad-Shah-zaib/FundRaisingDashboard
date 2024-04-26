export type IUserResponseDtoList = IUserResponseDto[]

export interface IUserResponseDto {
    userId: number
    firstName: string
    lastName: string
    email: string
    userAuthLogsList: UserAuthLogsList[]
}

export interface UserAuthLogsList {
    eventType: string
    eventTimestamp: string
}
