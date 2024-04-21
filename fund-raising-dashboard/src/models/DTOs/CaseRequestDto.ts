export default interface ICaseRequestDto {
    title: string;
    description: string;
    causeName: string;
}

export interface CaseDto extends ICaseRequestDto {}