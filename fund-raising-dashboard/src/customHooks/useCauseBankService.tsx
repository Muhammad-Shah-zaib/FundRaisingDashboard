import { TCasueList } from "@/models/DTOs/CauseResponseDto";
import CauseBankService from "@/Services/CauseBankService";
import { startSpinner, stopSpinner } from "@/utils/SpinnerFn";
import { toast } from "sonner";


type TGetAllBankAmount = (setBankAmountState: (amount: number)=> void, spinnerId?: string) => void;
type TGetAllCauses = (setBankAmountState: (causes: TCasueList)=> void, spinnerId?: string) => void;
export default function useCauseBankService(): [TGetAllBankAmount, TGetAllCauses] {
    // we need to implement all the ogic here and then return the functions that we need to use in the component

    // frist we instantiate the service
    const _causeBankService: CauseBankService = new CauseBankService();

    // function to get all the bank amount
    const getAllBankAmount: TGetAllBankAmount = (setBankAmountState) => {
        // we need to call the service here
        _causeBankService.getAllBankAmount$()
            .subscribe((res)=> {
                setBankAmountState(res.totalCurrentDonations);
            }, (err)=> {
                console.error(err);
                toast.error("Something went wrong",{
                    description: "Please check your network connection, and try again later"
                }
                );
            });
    }


    // function to gett all the causes
    const getAllCauses: TGetAllCauses = (setCauseState, spinnerId) => {
        spinnerId && startSpinner(spinnerId);
        // we need to call the service here
        _causeBankService.getAllCauses$()
            .subscribe((res)=> {
                setCauseState(res);

                spinnerId && stopSpinner(spinnerId);
            }, (err)=> {
                console.error(err);
                spinnerId && stopSpinner(spinnerId);
                toast.error("Something went wrong",{
                    description: "Please check your network connection, and try again later"
                }
                );
            });
    }
    return [getAllBankAmount, getAllCauses];
}
