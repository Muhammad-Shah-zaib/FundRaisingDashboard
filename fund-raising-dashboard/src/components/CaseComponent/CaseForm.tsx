import ICaseRequestDto from '@/models/DTOs/CaseRequestDto';
import { CaseList } from '@/models/DTOs/CasesResponseDto';
import { addCaseAsync, getAllCases$ } from '@/Services/CaseService';
import { startSpinner, stopSpinner } from '@/utils/SpinnerFn';
import TriggerClick from '@/utils/TriggerClick';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface ICaseFormProps {
    setCasesStateFn: (c: CaseList) => void;
}
function CaseForm({ setCasesStateFn }: ICaseFormProps) {
    const { register, handleSubmit, setValue, formState: { errors }, setError } = useForm<ICaseRequestDto>({
        defaultValues: {
            title: "",
            description: "",
            causeName: "MESS_FEE"
        }
    });

    const onSubmit: SubmitHandler<ICaseRequestDto> = (data) => {
        startSpinner("CaseFormSpinner");
        console.log("sending\n" + JSON.stringify(data))
        const addCase$ = addCaseAsync(data);
        addCase$.subscribe({
            next: () => {
                // Since new case is added so we need to update the state
                const cases$ = getAllCases$();
                cases$.subscribe({
                    next: (res) => {
                        setCasesStateFn(res);
                        stopSpinner("CaseFormSpinner");
                        TriggerClick("sheet-close-btn");
                        toast.success("New Case Added Successfully");
                    },
                    error: (err) => {
                        if (err.status === 500) toast.error(err.message)
                        stopSpinner("CaseFormSpinner");
                        console.error(err);
                    }
                })


            },
            // error for failing the in adding case
            error: (err) => {
                stopSpinner("CaseFormSpinner");
                toast.success("Case Added Successfully");
                if (err.status === 500)
                    setError("root", {
                        message: "Internal server Error"
                    })
                toast.error("Case Added Failed", {
                    description: err.message
                });
                if (err.status === 0) {
                    setError("root", {
                        message: "Something went wrong, Check your Network Connection and try again."
                    })
                }
            },


        });
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 py-4">
            {errors.root && <span className="text-red-800 bg-red-200 text-sm font-medium w-full px-4 py-2 rounded-lg">{errors.root.message}</span>}
            {/* TITLE */}
            <div className='flex flex-col gap-1'>
                <div className="grid items-center gap-3 grid-cols-3">
                    <span><label htmlFor="title" className="text-base font-medium text-primary cursor-pointer">Title:</label></span>
                    <input {...register("title", { required: "Title is required" })}
                        id="title"
                        type="text"
                        className="col-span-2 outline-none border-2 border-slate-400 focus:border-slate-950 rounded-lg text-primary px-4 py-1 font-medium"
                        placeholder="Mess Fee" />
                </div>
                {errors.title && <span className="text-red-800 bg-red-200 text-sm font-bold w-full px-4 py-1 rounded-lg">{errors.title.message}</span>}
            </div>

            {/* CAUSE */}
            <div className="flex">
                <select onChange={(e) => setValue("causeName", e.target.value)} name="cause" id="cause" className="SELECT-ARROW outline-none w-full px-4 py-2 rounded-lg border-2 border-slate-400">
                    <option value="MESS_FEE">Mess Fee</option>
                    <option value="HOSTEL_FEE">Hostel Fee</option>
                    <option value="TUITION_FEE">Tuition Fee</option>
                </select>
            </div>
            {/* DESIPTION */}
            <div className='flex flex-col gap-1'>
                <textarea
                    {...register("description", { required: "Description is required" })}
                    name="description"
                    id="description"
                    cols={100}
                    rows={10}
                    placeholder="Description"
                    className="px-4 py-2 border-2 border-slate-400 rounded-lg w-full"
                >
                </textarea>
                {errors.description && <span className="text-red-800 bg-red-200 text-sm font-bold w-full px-4 py-1 rounded-lg">{errors.description.message}</span>}
            </div>

            <div>
                <button type="submit" className="px-4 py-2 border-2 border-slate-400 hover:bg-slate-400 w-full rounded-lg shadow-sm shadow-slate-300 transition-all duration-300">Submit</button>
            </div>
        </form>
    )
}

export default CaseForm