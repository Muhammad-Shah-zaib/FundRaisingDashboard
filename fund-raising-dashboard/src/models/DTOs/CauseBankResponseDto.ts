export interface ICauseBankResponseDto{
    totalCurrentDonations: number 
}


export default class CauseBankResponseDto implements ICauseBankResponseDto{
    totalCurrentDonations: number = 0

    constructor(totalCurrentDonations: number){
        this.totalCurrentDonations = totalCurrentDonations;
    }
}