import { ICause } from "@/models/DTOs/CauseResponseDto";
import { useForm } from "react-hook-form"

interface IaddCaseRequestDto {
    title: string;
    description: string;
}

interface EditCauseFormProps {
    cause: ICause;
}
export default function EditCauseForm({ cause }: EditCauseFormProps) {
    const { register, formState: { isDirty } } = useForm<IaddCaseRequestDto>({
        defaultValues: {
            title: cause.causeTitle,
            description: cause.causeDescription
        }
    });
    return (
        <div className="flex flex-col gap-4 text-slate-800 font-bold text-lg font-mono ">
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
                <p className="text-base  px-2 py-0.5 rounded-lg col-span-3 w-full bg-yellow-100 text-yellow-500">Make sure to add a proper description as it is shown to all other users.</p>
                <label htmlFor="description" className="cursor-pointer font-sans font-medium">Description: </label>
                <textarea id="description" className="outline-none hover:border-blue-700 rounded-lg col-span-3 px-4 py-1.5 border-2 border-slate-400 h-[40vh]" placeholder="HOSTEL_FEE" style={{ transition: "border 0.2s ease" }} />

            </div>
        </div>
    )
}
