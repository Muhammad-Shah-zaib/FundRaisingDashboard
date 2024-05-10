import { getAllBankAmountUrl, getAllCausesUrl } from "@/environment/serverUrls";
import { ICauseBankResponseDto } from "@/models/DTOs/CauseBankResponseDto";
import { TCasueList } from "@/models/DTOs/CauseResponseDto";
import { delay } from "rxjs";
import { ajax } from "rxjs/ajax";

export default class CauseBankService{

    // get all the bank amount
    public getAllBankAmount$() {
        return ajax.getJSON<ICauseBankResponseDto>(getAllBankAmountUrl)
            .pipe(delay(200));
    }

    // get all the causes
    public getAllCauses$() {
        return ajax.getJSON<TCasueList>(getAllCausesUrl)
            .pipe(delay(200));
    }
}