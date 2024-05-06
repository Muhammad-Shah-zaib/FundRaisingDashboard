import { getAllCaseTransactionsUrl } from "@/environment/serverUrls";
import { delay, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

export default class CaseTransactionService {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public getAllTransactions(): Observable<any>{
        // Call API to get all transactions
        return ajax.getJSON(getAllCaseTransactionsUrl)
            .pipe(delay(200));
    }
}