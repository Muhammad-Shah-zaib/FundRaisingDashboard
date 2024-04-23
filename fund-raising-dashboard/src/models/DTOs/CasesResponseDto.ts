export type CaseList = Case[]

export interface Case {
    caseId: number
    title: string
    description: string
    createdDate: string
    causeName: string
    verifiedStatus: boolean;
    causeId: number
}