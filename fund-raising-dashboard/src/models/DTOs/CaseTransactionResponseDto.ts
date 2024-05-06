export type ICaseTransactionResponse = ICaseTransaction[]

export interface ICaseTransaction {
    transactionAmount: number
    caseTransactionId: number
    transacntionLogDate: string
    transactionLogTime: string
    caseTitle: string
    caseId: number
    donorCnic: number
    donorFirstName: string
    donorLastName: string
}
