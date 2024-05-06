import { ICaseTransactionResponse } from "@/models/DTOs/CaseTransactionResponseDto";
import CaseTransactionService from "@/Services/CaseTransactionService";
import { startSpinner, stopSpinner } from "@/utils/SpinnerFn";


type TgetTransactions = (setTransactionStateFn: (CaseTransactionsList: ICaseTransactionResponse)=> void, spinnerId?: string) => void;

export default function useCaseTransactionService() {
    // we need to use the CaseTransactionservice and return all the functions

    // * first we instantiate the CaseTransactionService
    const _caseTransactionService: CaseTransactionService = new CaseTransactionService();

    // ? function to get all the transactions
    const getAllCaseTransactions: TgetTransactions = (setTransactionStateFn, spinnerId?) => {
        // first we will empty our transactions
        setTransactionStateFn([]);
        
        // starting the spinners
        spinnerId && startSpinner(spinnerId);

        // calling the service to get all the transactions
        _caseTransactionService.getAllTransactions()
            .subscribe(res => {
                setTransactionStateFn(res);
                // stop spinner
                spinnerId && stopSpinner(spinnerId);
            }, err => {
                console.log(err)
                if (err.status === 500) alert("Internal server Error please try agian later");
                else alert("Something went wrong, Check your network connection and try again later");

                // stop spinner
                spinnerId && stopSpinner(spinnerId);
            });
    }

    return [getAllCaseTransactions];
}
