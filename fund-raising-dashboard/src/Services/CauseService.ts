import { ICreateCause } from "@/components/causes-and-bank";
import { IUpdateCaseRequestDto } from "@/components/EditCauseForm";
import { addCauseUrl, deleteCauseUrl, updateCauseUrl } from "@/environment/serverUrls";
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

    public closeCause$(causeId: number){
        return ajax.put("" + causeId)
            .pipe(delay(200));
    }
}