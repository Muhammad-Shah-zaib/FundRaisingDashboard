import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { SubmitHandler, useForm } from "react-hook-form";
import { startSpinner, stopSpinner } from '@/utils/SpinnerFn';
import Spinner from "@/shared/component/Spinner";
import useCauseBankService from "@/customHooks/useCauseBankService";
import { useEffect, useState } from "react";
import { TCasueList } from "@/models/DTOs/CauseResponseDto";

interface ICreateCause {
    name: string;
}
export default function CausesAndBank() {
    // Hooks
    const [causeState, setCauseState] = useState<TCasueList>([]);
    // Custom Hooks
    const getAllCauses = useCauseBankService()[1];
    // Form Hooks
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<ICreateCause>();

    const onSubmit: SubmitHandler<ICreateCause> = async (data) => {
        startSpinner('causes-spinner');
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setError('root', {
            message: "Something went wrong, please try again later."
        })
        stopSpinner('causes-spinner');
        console.log(data);
    }

    useEffect(() => {
        getAllCauses(setCauseState);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {/* Container */}
            <div className="h-full w-full flex flex-col gap-8 px-16 py-4">
                {/* Create new Cause */}
                <Sheet>
                    <SheetTrigger asChild>
                        <div className="group cursor-pointer flex justify-between items-center w-full bg-slaate-50 hover:bg-slate-300 transition-all duration-300 py-2 px-4 shadow-md shadow-slate-300 ">
                            <span className="font-bold text-primary text-2xl">
                                Create New Cause
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-8 h-8 text-green-500 group-hover:text-green-700 transition-all duration-300 "
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </SheetTrigger>
                    <SheetContent className="realtive">
                        {/* LOADING SPINNER */}
                        <Spinner id="causes-spinner"></Spinner>
                        <SheetHeader>
                            {/* VALIDATION FOR ROOT ERRORS */}
                            {errors.root && <span className="text-sm text-red-700 select-none font-bold bg-red-100 px-4 py-2 rounded-md">{errors.root.message}</span>}
                            <SheetTitle>Edit profile</SheetTitle>
                            <SheetDescription>
                                Make changes to your profile here. Click save when you're done.
                            </SheetDescription>
                        </SheetHeader>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 py-4">
                            {/* First Name */}
                            <div className="grid items-center gap-3 grid-cols-3">
                                <span>
                                    <label htmlFor="causename" className="text-base font-medium text-primary cursor-pointer">Cause Name: </label>
                                </span>
                                <input
                                    {...register("name", {
                                        required: "Cause Name is required"
                                    })}
                                    id="causename"
                                    type="text"
                                    className="col-span-2 outline-none border-2 border-slate-400 rounded-lg text-primary px-4 py-1 font-medium" placeholder="John"
                                />
                                {/* validation for NAME field */}
                                {errors.name && <span className="col-span-3 text-sm text-red-700 select-none font-bold bg-red-100 px-4 py-2 rounded-md">{errors.name.message}</span>}
                            </div>
                            <div className="w-full">
                                <button disabled={isSubmitting} className="text-lg font-medium w-full text-center bg-slate-100 rounded-lg px-4 py-2 hover:bg-slate-300 transition-all duration-300 shadow-md shadow-slate-300">{isSubmitting ? 'Creating...' : 'Create'}</button>
                            </div>

                        </form>
                    </SheetContent>
                </Sheet>


                {/* Current Cause and there Balance */}
                <div className="grid grid-cols-2 gap-4 overflow-scroll p-2 max-h-[56vh] relative">
                    {/* Single Card */}
                    {causeState.map(c =>
                        <>
                            <div className="group cursor-pointer hover:shadow-none transition-shadow duration-200 flex flex-col justify-between min-h-[100px] gap-4 p-2 bg-yellow-100 hover:bg-yellow-200 rounded-lg shadow-lg">
                                <div className="w-full flex justify-between">
                                    <span className="text-start text-lg font-mono font-black">
                                        {c.causeTitle}
                                    </span>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-9 h-9 text-red-400  group-hover:text-red-600"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <p className="text-lg font-medium opacity-65">Collected: </p>
                                    <span className="text-xl font-bold text-primary">{c.collectedDonation}</span>
                                </div>
                            </div>
                        </>
                    )}


                </div>

            </div>
        </>
    );
}
