import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { SubmitHandler, useForm } from "react-hook-form";
import Spinner from "@/shared/component/Spinner";
import useCauseBankService from "@/customHooks/useCauseBankService";
import { useContext, useEffect, useState } from "react";
import { TCasueList } from "@/models/DTOs/CauseResponseDto";
import Dialog from "@/shared/component/Dialog";
import EditCauseForm from "./EditCauseForm";
import TriggerClick from "@/utils/TriggerClick";
import useCauseService from "@/customHooks/useCauseService";
import { AuthContext } from "@/context/AuthContext";

export interface ICreateCause {
    causeTitle: string;
    description: string;
    userCnic: number;
}
export default function CausesAndBank() {
    // Hooks
    const [causeState, setCauseState] = useState<TCasueList>([]);
    const auth = useContext(AuthContext);
    // Custom Hooks
    const getAllCauses = useCauseBankService()[1];
    const {AddCause,DeleteCause} = useCauseService();
    // Form Hooks
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ICreateCause>({
        defaultValues: {
            causeTitle: "",
            description: "",
            userCnic: auth.userCnic
        }
    });

    const OnSubmit: SubmitHandler<ICreateCause> = async (data) => {
        AddCause(data, setCauseState, "add-cause-spinner", "cause-spinner")
        console.log(data);
    }

    const handleDelete = (causeId: number)=> {
        DeleteCause(causeId, setCauseState, "dialog-spinner","cause-spinner");
    }

    useEffect(() => {
        getAllCauses(setCauseState, 'cause-spinner');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {/* Container */}
            <div className="relative h-full w-full flex flex-col gap-8 px-16 py-4">
                {/* SPINNER */}
                <Spinner id="cause-spinner" BgClass="transparent" />

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
                        <Spinner id="add-cause-spinner"></Spinner>
                        <SheetHeader>
                            {/* VALIDATION FOR ROOT ERRORS */}
                            {errors.root && <span className="text-sm text-red-700 select-none font-bold bg-red-100 px-4 py-2 rounded-md">{errors.root.message}</span>}
                            <SheetTitle>New Cause</SheetTitle>
                            <SheetDescription>
                                Make sure to add a proper description as is shown to all other users.
                            </SheetDescription>
                        </SheetHeader>
                        <form onSubmit={handleSubmit(OnSubmit)} className="flex flex-col gap-4 py-4">
                            {/* First Name */}
                            <div className="grid items-center gap-3 grid-cols-3">
                                <span>
                                    <label htmlFor="causename" className="text-base font-medium text-primary cursor-pointer">Cause Name: </label>
                                </span>
                                <input
                                    {...register("causeTitle", {
                                        required: "Cause Name is required"
                                    })}
                                    id="causename"
                                    type="text"
                                    className="col-span-2 outline-none border-2 border-slate-400 rounded-lg text-primary px-4 py-1 font-medium" placeholder="John"
                                />
                                {/* validation for NAME field */}
                                {errors.causeTitle && <span className="col-span-3 text-sm text-red-700 select-none font-bold bg-red-100 px-4 py-2 rounded-md">{errors.causeTitle.message}</span>}
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <textarea {...register("description", {
                                    required: "Description is required",
                                    maxLength: {
                                        value: 1028,
                                        message: "Description should be less than 1028 characters"
                                    }
                                })} name="description" id="description" className="w-full h-[40vh] outline-none border-2 border-slate-400 hover:border-blue-700 rounded-lg transition-all duration-300 px-2 py-1.5" placeholder="Description..."></textarea>
                                {errors.description && <span className="text-sm text-red-700 select-none font-bold bg-red-100 px-4 py-2 rounded-md">{errors.description.message}</span>}
                            </div>

                            <div className="w-full">
                                <button disabled={isSubmitting} className="text-lg font-medium w-full text-center bg-slate-100 rounded-lg px-4 py-2 hover:bg-slate-300 transition-all duration-300 shadow-md shadow-slate-300">{isSubmitting ? 'Creating...' : 'Create'}</button>
                            </div>

                        </form>
                    </SheetContent>
                </Sheet>


                {/* Current Cause and there Balance */}
                <div className="grid grid-cols-2 gap-4 overflow-scroll p-2 max-h-[75vh] relative">
                    {/* Single Card */}
                    {causeState.map(c =>
                        <>
                            <div className="group cursor-default hover:shadow-none transition-shadow duration-200 flex flex-col justify-between min-h-[100px] gap-4 p-2 bg-yellow-100 hover:bg-yellow-200 rounded-lg shadow-lg">
                                <div className="w-full flex justify-between">
                                    <span className="text-start text-lg font-mono font-black">
                                        {c.causeTitle}
                                    </span>
                                    <div className="flex gap-2 items-center">
                                        {/* EDIT BTN */}
                                        <Dialog
                                            TriggerNode={
                                                <span className="cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                        <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                                                        <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                                                    </svg>
                                                </span>
                                            }
                                            title={`Edit ${c.causeTitle} Cause`}
                                        >
                                            <EditCauseForm cause={c} setCauseState={setCauseState}></EditCauseForm>
                                        </Dialog>
                                        {/* DELETE BTN */}
                                        <Dialog
                                            TriggerNode={
                                                <span className="cursor-pointer">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-6 h-6 text-red-400  group-hover:text-red-600"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                            }
                                            title={`Delete ${c.causeTitle} Cause`}
                                            titleClass="text-red-700 font-medium text-lg"
                                        >
                                            <div className="flex flex-col gap-4 font-medium">
                                                <p>Are you sure you want to close this cause? <em className="text-red-700">You can not undo this later!</em></p>
                                                <div className="flex gap-4 self-end">
                                                    <button onClick={() => handleDelete(c.causeId)} className="text-lg border-2 border-slate-400 px-4 rounded-lg hover:border-red-700 py-1 hover:bg-red-100 hover:text-red-700 transition-all duration-300">Yes</button>
                                                    <button onClick={() => TriggerClick("dialog-close-btn")} className="border-2 border-green-100 hover:border-green-400 text-lg font-medium bg-green-100 text-green-700 rounded-lg px-4 py-1 hover:bg-green-200 transition-all duration-300">No</button>
                                                </div>
                                            </div>
                                        </Dialog>
                                    </div>
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
