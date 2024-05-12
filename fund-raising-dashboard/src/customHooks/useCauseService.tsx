import { ICreateCause } from "@/components/causes-and-bank";
import { TCasueList } from "@/models/DTOs/CauseResponseDto";
import CauseService from "@/Services/CauseService";
import { toast } from "sonner";
import useCauseBankService from "./useCauseBankService";
import { startSpinner, stopSpinner } from "@/utils/SpinnerFn";
import { IUpdateCaseRequestDto } from "@/components/EditCauseForm";


type TAddCause = (newCause: ICreateCause, setCauseState: (causeList: TCasueList) => void, formSpinnerId ?: string, causeSpinnerId ?: string) => void;
type TDeleteCause = (causeId: number, setCauseState: (causeList: TCasueList) => void, formSpinnerId ?: string, causeSpinnerId ?: string) => void;
type TUpdateCause = (causeId: number, updatedCause: IUpdateCaseRequestDto, setCauseState: (causeList: TCasueList) => void, formSpinnerId ?: string, causeSpinnerId ?: string) => void;
type TCloseCause = (casueID: number, setCauseState: (causeList: TCasueList) => void, formSpinnerId ?: string, causeSpinnerId ?: string) => void;

export default function useCauseService(){
    // we need to implement all the ogic here and then return the functions that we need to use in the component

    // we need to get all the causes after updating the causes
    // for this we need to use our causeband service hook
    const getAllCauses = useCauseBankService()[1];

    // first we instantiate the service
    const _causeService: CauseService = new CauseService();

    // function to get add new cause
    const AddCause: TAddCause = (newCasue, setCauseState, formSpinnerId?, causeSpinnerId?) => {
        formSpinnerId && startSpinner(formSpinnerId);
        _causeService.AddCause$(newCasue)
            .subscribe(() => {
                formSpinnerId && stopSpinner(formSpinnerId);
                setCauseState([]);
                getAllCauses(setCauseState, causeSpinnerId);
                toast.success("Cause added successfully")
            }, () => {
                formSpinnerId && stopSpinner(formSpinnerId);
                toast.error("Something went wrong", {
                    description: "Please check your network connection, and try again later"
                })
            })
    }

    const DeleteCause: TDeleteCause = (causeId, setCauseState, formSpinnerId, causeSpinnerId) => {
        formSpinnerId && startSpinner(formSpinnerId);
        _causeService.deleteCause$(causeId)
            .subscribe(() => {
                formSpinnerId && stopSpinner(formSpinnerId);
                setCauseState([]);
                getAllCauses(setCauseState, causeSpinnerId);
                toast.success("Cause deleted successfully")
            }, (err) => {
                formSpinnerId && stopSpinner(formSpinnerId);
                console.log(err);
                toast.error("Cause deletion failed", {
                    description: "Cause cannot be deleted as it possess some transactinos. You can close the cause"
                })
            })
    } 

    const UpdateCause: TUpdateCause = (causeId, updatedCause, setCauseState, formSpinnerId, causeSpinnerId) => {
        formSpinnerId && startSpinner(formSpinnerId);
        _causeService.updateCause$(causeId, updatedCause)
            .subscribe(() => {
                formSpinnerId && stopSpinner(formSpinnerId);
                setCauseState([]);
                getAllCauses(setCauseState, causeSpinnerId);
                toast.success("Cause updated successfully")
            }, () => {
                formSpinnerId && stopSpinner(formSpinnerId);
                toast.error("Something went wrong", {
                    description: "Please check your network connection, and try again later"
                })
            })
    }

    const CloseCause: TCloseCause = (casueID, setCauseState, formSpinnerId, causeSpinnerId) => {
        formSpinnerId && startSpinner(formSpinnerId);
        _causeService.closeCause$(casueID)
            .subscribe(() => {
                formSpinnerId && stopSpinner(formSpinnerId);
                setCauseState([]);
                getAllCauses(setCauseState, causeSpinnerId);
                toast.success("Cause closed successfully")
            }, () => {
                formSpinnerId && stopSpinner(formSpinnerId);
                toast.error("Something went wrong", {
                    description: "Please check your network connection, and try again later"
                })
            })
    }

    return {AddCause, DeleteCause, UpdateCause, CloseCause};
}