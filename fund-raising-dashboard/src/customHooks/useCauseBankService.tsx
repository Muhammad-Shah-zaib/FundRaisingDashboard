import { TCasueList } from "@/models/DTOs/CauseResponseDto";
import CauseBankService from "@/Services/CauseBankService";
import { toast } from "sonner";


type TGetAllBankAmount = (setBankAmountState: (amount: number)=> void) => void;
type TGetAllCauses = (setBankAmountState: (causes: TCasueList)=> void) => void;
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
    const getAllCauses: TGetAllCauses = (setCauseState) => {
        // we need to call the service here
        _causeBankService.getAllCauses$()
            .subscribe((res)=> {
                console.log(res);
                setCauseState(res);
            }, (err)=> {
                console.error(err);
                toast.error("Something went wrong",{
                    description: "Please check your network connection, and try again later"
                }
                );
            });
    }
    return [getAllBankAmount, getAllCauses];
}
