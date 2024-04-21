import ICaseRequestDto from '@/models/DTOs/CaseRequestDto';
import { addCaseAsync } from '@/Services/CaseService';
import { startSpinner, stopSpinner } from '@/utils/SpinnerFn';
import { SubmitHandler, useForm } from 'react-hook-form';

function CaseForm() {
    const { register, handleSubmit, setValue } = useForm<ICaseRequestDto>();

    const onSubmit: SubmitHandler<ICaseRequestDto> = (data) => {
        startSpinner("CaseFormSpinner");
        console.log("sending\n" + JSON.stringify(data))
        const addCase$ = addCaseAsync(data);
        addCase$.subscribe({
            next: (res) => {
                stopSpinner("CaseFormSpinner");
                console.log(res.response);
            },
            error: (err) => {
                stopSpinner("CaseFormSpinner");
                console.error(err);
            },


        });
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 py-4">
            {/* TITLE */}
            <div className="grid items-center gap-3 grid-cols-3">
                <span><label htmlFor="title" className="text-base font-medium text-primary cursor-pointer">Title:</label></span>
                <input {...register("title", { required: "Title is required" })}
                    id="title"
                    type="text"
                    className="col-span-2 outline-none border-2 border-slate-400 focus:border-slate-950 rounded-lg text-primary px-4 py-1 font-medium"
                    placeholder="Mess Fee" />
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
            <div>
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
            </div>

            <div>
                <button type="submit" className="px-4 py-2 border-2 border-slate-400 hover:bg-slate-400 w-full rounded-lg shadow-sm shadow-slate-300 transition-all duration-300">Submit</button>
            </div>
        </form>
    )
}

export default CaseForm