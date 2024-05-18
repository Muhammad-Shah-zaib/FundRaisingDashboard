export default interface ICaseRequestDto {
    title: string;
    description: string;
    causeName: string;
    verifiedStatus: boolean;
    requiredDonations:number;
    userCnic: number;
}

export interface CaseDto extends ICaseRequestDto {
}

export class CaseRequestDto{
    title: string;
    description: string;
    causeName: string;
    verifiedStatus: boolean;
    constructor(title: string, description: string, causeName: string, verifiedStatus?: boolean){
        this.title = title;
        this.description = description;
        this.causeName = causeName;
        this.verifiedStatus = verifiedStatus ? verifiedStatus : false;
    }
}