export type TCasueList = ICause[]

export interface ICause {
    causeId: number;
    causeTitle: string;
    causeDescription: string;
    collectedDonation: number;
}
