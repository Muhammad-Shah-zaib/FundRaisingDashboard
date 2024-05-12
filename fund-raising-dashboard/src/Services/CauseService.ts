import { ICreateCause } from "@/components/causes-and-bank";
import { IUpdateCaseRequestDto } from "@/components/EditCauseForm";
import { addCauseUrl, closeCauseUrl, deleteCauseUrl, updateCauseUrl } from "@/environment/serverUrls";
import { ICause } from "@/models/DTOs/CauseResponseDto";
import { delay } from "rxjs";
import { ajax } from "rxjs/ajax";

export default class CauseService {

    public AddCause$( newCause: ICreateCause){
        return ajax.post(addCauseUrl, newCause)
            .pipe(delay(200))
    }

    public deleteCause$(causeId: number){
        return ajax.delete(deleteCauseUrl + causeId)
            .pipe(delay(200))
    }

    public updateCause$(causeId: number, updatedCause: IUpdateCaseRequestDto){
        return ajax.put(updateCauseUrl + causeId, updatedCause)
            .pipe(delay(200))
    }

    public closeCause$(cause: ICause){
        const updatedCause: unknown = {
            causeTitle: cause.causeTitle,
            description: cause.causeDescription,
            userCnic: Number.parseInt(localStorage.getItem("userCnic")!)
        };
        console.log(updatedCause);
        return ajax.put(closeCauseUrl + cause.causeId, updatedCause)
            .pipe(delay(200));
    }
}   