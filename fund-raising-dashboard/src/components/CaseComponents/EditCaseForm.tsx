import { SubmitHandler, useForm } from "react-hook-form";
import "./CaseForm.css";
import ICaseRequestDto from "@/models/DTOs/CaseRequestDto";
import { getAllCases$, updateCase$ } from "@/Services/CaseService";
import { Case, CaseList } from "@/models/DTOs/CasesResponseDto";
import { toast } from "sonner";
import TriggerClick from "@/utils/TriggerClick";
import { startSpinner, stopSpinner } from "@/utils/SpinnerFn";

interface IEditCaseFormProps {
    caseId: number;
    existingCase: Case;
    setCasesStateFn: (c: CaseList) => void;
}

function EditCaseForm({ caseId, setCasesStateFn, existingCase }: IEditCaseFormProps) {
    const { register, setValue, handleSubmit, formState: { errors, isSubmitting } } = useForm<ICaseRequestDto>({
        defaultValues: {
            title: existingCase.title,
            description: existingCase.description,
            causeName: existingCase.causeName,
            verifiedStatus: existingCase.verifiedStatus,
            requiredDonations: existingCase.requiredDonations
        }
    });
    const updateCase = (data: ICaseRequestDto, dialogSpinnerId?: string) => {
        // updating the case
        dialogSpinnerId && startSpinner(dialogSpinnerId);
        const case$ = updateCase$(caseId, data);
        case$.subscribe({
            next: () => {
                dialogSpinnerId && stopSpinner(dialogSpinnerId);
                // since the case is updated we will get the updated cases
                const cases$ = getAllCases$();
                cases$.subscribe({
                    next: (res: CaseList) => {
                        setCasesStateFn(res);
                        toast.success("Success", {
                            description: "Case updated Successfully!",
                            action: {
                                label: "Show Cases",
                                onClick: () => { TriggerClick("dialog-close-btn") }
                            }
                        });
                    },
                    error: (err) => console.error(err)
                })
            }
        })

    }

    const onSubmit: SubmitHandler<ICaseRequestDto> = (data) => {
        updateCase(data, 'dialog-spinner');
    }
    return (
        <form className='flex flex-col gap-4 text-slate-900'>
            {/* TITLE */}
            <div className="flex flex-col gap-1">
                <div className="grid grid-cols-3 items-center">
                    <label htmlFor="Title" className="text-lg font-medium">Title:</label>
                    <input {...register("title", {
                        required: "Title is required"
                    })}
                        type="text"
                        id="Title"
                        className="col-span-2 font-bold focus:border-blue-700 case-primary-input" />
                </div>
                {errors.title && <div className="col-span-3 text-sm w-full px-4 py-2 font-black bg-red-200 text-red-800 rounded-lg">{errors.title.message}</div>}
            </div>

            {/* CAUSE NAME AND VERIFIED STATUS */}
            <div className="grid grid-cols-2 gap-4">
                <select onChange={(e) => setValue("causeName", e.target.value)} name="cause" id="cause" className="SELECT-ARROW outline-none focus:border-blue-700 text-lg font-bold font-mono w-full px-4 py-1 rounded-lg border-2 border-slate-400">
                    <option value="MESS_FEE">Mess Fee</option>
                    <option value="HOSTEL_FEE">Hostel Fee</option>
                    <option value="TUITION_FEE">Tuition Fee</option>
                </select>
                <div className="flex gap-2 items-center">
                    <input type="checkbox" {...register("verifiedStatus")} onChange={(e)=> setValue("verifiedStatus", e.target.checked)} name="verifiedStatus" id="verifiedStatus" />
                    <label htmlFor="verifiedStatus" className="cursor-pointer font-medium select-none">Verified Status</label>
                </div>
            </div>
            {/* REQUIRED AMOUNT */}
            <div className='flex flex-col gap-1 form-input-ctn relative'>
                <input 
                {...register("requiredDonations", {
                    required: "Amount is Required",
                    min: { value: 501, message: "Amount must be greater than 500" }
                })}
                type="number" 
                id='requiredDonations' 
                className='input-field transition-all duration-300 hover:border-blue-700 outline-none focus:border-blue-700 border-slate-400  border-2 pt-3 pb-1 px-2 w-full rounded-lg placeholder-transparent focus:placeholder-opacity-100 focus:placeholder:text-slate-400' 
                placeholder='Ex:10000' />
                {errors.requiredDonations && <span className="text-red-800 bg-red-200 text-sm font-bold w-full px-4 py-1 rounded-lg">{errors.requiredDonations.message}</span>}
                <span className='fake-placeholder pointer-events-none text-slate-500 absolute left-2 top-0 text-xs transition-all duration-300'>Enter Required Amount</span>
            </div>
            {/* Description */}
            <div>
                <textarea
                    {...register("description", {
                        required: "Description is required"
                    })}
                    title="Write a description here."
                    name="description"
                    id="description"
                    cols={100}
                    rows={8}
                    placeholder="Description"
                    className="px-4 py-2 border-2 outline-sky-700 border-slate-400 rounded-lg w-full font-bold font-mono text-lg"
                >
                </textarea>
                {errors.description && <div className="text-sm w-full px-4 py-2 font-black bg-red-300 text-red-900 rounded-lg">{errors.description.message}</div>}
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex justify-end">
                <button onClick={handleSubmit(onSubmit)} disabled={isSubmitting} className="text-lg font-bold text-yellow-700 font-mono px-8 py-2 shadow-md shadow-slate-300 hover:bg-yellow-100 transition-all duration-300">Update</button>
            </div>
        </form>
    )
}

export default EditCaseForm