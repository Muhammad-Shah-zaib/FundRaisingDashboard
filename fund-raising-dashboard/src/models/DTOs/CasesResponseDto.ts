export type CaseList = Case[]

export interface Case {
    caseId: number
    requiredDonations: number
    collectedDonations: number
    remainingDonations: number;
    caseLogs: CaseLog[]
    title: string
    description: string
    causeName: string
    verifiedStatus: boolean
}

export interface CaseLog {
    logType: string;
    logDate: string;
    logTime: string;
}
