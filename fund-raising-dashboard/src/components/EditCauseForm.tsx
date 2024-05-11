import { AuthContext } from "@/context/AuthContext";
import useCauseService from "@/customHooks/useCauseService";
import { ICause, TCasueList } from "@/models/DTOs/CauseResponseDto";
import TriggerClick from "@/utils/TriggerClick";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form"

export interface IUpdateCaseRequestDto {
    title: string;
    description: string;
    userCnic: number;
}

interface EditCauseFormProps {
    cause: ICause;
    setCauseState: (causeList: TCasueList) => void;
}
export default function EditCauseForm({ cause, setCauseState }: EditCauseFormProps) {
    // getting auth context
    const auth = useContext(AuthContext);

    // custom hook
    const {UpdateCause} = useCauseService();

    // form hook
    const { register, formState: { isDirty }, handleSubmit } = useForm<IUpdateCaseRequestDto>({
        defaultValues: {
            title: cause.causeTitle,
            description: cause.causeDescription,
            userCnic: auth.userCnic
        }
    });

    const handleUpdate: SubmitHandler<IUpdateCaseRequestDto> = (data: IUpdateCaseRequestDto) => {
        console.log(data);
        UpdateCause(cause.causeId, data, setCauseState , "dialog-spinner", "cause-spinner");
    }
    return (
        <form className="flex flex-col gap-4 text-slate-800 font-bold text-lg font-mono ">
            <div className="grid grid-cols-3 items-center">
                <label>Cnic: </label>
                <input {...register("userCnic")} type="text" disabled={true} className="px-4 py-1 rounded-lg  cursor-not-allowed border-2 col-span-2  border-slate-400" value={auth.userCnic} />
            </div>
            <div className="grid grid-cols-3 gap-2 items-center">
                {!isDirty &&
                    <p className="text-base  px-2 py-0.5 rounded-lg col-span-3 w-full bg-yellow-100 text-yellow-500">Use uppercase letter and seperate words by '_'</p>
                }

                <label htmlFor="title" className="cursor-pointer font-sans font-medium">Ttitle: </label>
                <input {...register("title")} type="text" id="title" className="outline-none rounded-lg hover:border-blue-700 transition-all duration-300 col-span-2 px-4 py-1.5 border-2 border-slate-400" placeholder="HOSTEL_FEE" />

            </div>

            <div className="grid grid-cols-3 gap-2 items-center">
                {
                    !isDirty
                }
                <p className="text-base  px-2 py-0.5 rounded-lg col-span-3 w-full bg-yellow-50 text-yellow-500">Make sure to add a proper description as it is shown to all other users.</p>
                <label htmlFor="description" className="cursor-pointer font-sans font-medium">Description: </label>
                <textarea {...register("description", {
                    required: "Description is required",
                    maxLength: {
                        value: 1028,
                        message: "Description should be less than 1028 characters"
                    }
                })} id="description" className="outline-none hover:border-blue-700 rounded-lg col-span-3 px-4 py-1.5 border-2 border-slate-400 h-[40vh]" placeholder="HOSTEL_FEE" style={{ transition: "border 0.2s ease" }} />

            </div>

            <div className="flex justify-end gap-4">

                <button onClick={() => TriggerClick("dialog-close-btn")} className="px-4 py-1.5 border-2 border-slate-400 hover:border-blue-700 transition-all duration-300 rounded-lg">Close</button>
                <button onClickCapture={handleSubmit(handleUpdate)}  type="submit" className="px-4 py-1.5 border-2 border-slate-400 rounded-lg hover:border-yellow-500 transition-all duration-300">Update</button>
            </div>
        </form>
    )
}
