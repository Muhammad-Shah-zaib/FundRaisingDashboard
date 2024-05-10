import Sheet from '@/shared/component/Sheet';
import { useCallback, useEffect, useState } from "react";
import { CaseList } from "@/models/DTOs/CasesResponseDto";
import Spinner from "@/shared/component/Spinner.tsx";
import { startSpinner, stopSpinner } from "@/utils/SpinnerFn.ts";
import CaseForm from "./CaseForm";
import CaseTable from "./CaseTable";
import { getAllCases$ } from "@/Services/CaseService.tsx";
import { toast } from "sonner";


export default function Cases() {
    // HOOKs
    const [casesState, setCases] = useState<CaseList>([]);

    // this function fetch all the cases
    // the sign '$' represent that this function uses the rxjs Observables
    const fetchCases$ = () => {
        const cases$ = getAllCases$();
        cases$.subscribe({
            next: (cases) => {
                console.warn(cases);
                setCases(cases);
                stopSpinner("CasesTableSpinner");
            },
            error: (err) => {
                console.error(err);
                stopSpinner("CasesTableSpinner");
                if (err.status === 500) toast.error("Internal server Error", {
                    position: "top-right",
                    description: "Server is under development. Please try again later."
                });
                else if (err.status === 404) toast.error("Server Not Found.", {
                    position: "top-right",
                    description: "Check your Network and Try again."
                });
                toast.error("Something went wrong.", {
                    description: "Check your Network and Try again.",
                    position: "top-right",
                    action: {
                        label: "Retry",
                        onClick: () => fetchCases$()
                    }
                });

            }
        })
    }
    const MemorizedFetchAllCases = useCallback(fetchCases$, []);

    // state to toggle the border for the header
    useEffect(() => {
        startSpinner("CasesTableSpinner");
        MemorizedFetchAllCases();
    }, [MemorizedFetchAllCases]);

    return (
        <>
            {/* container */}
            <div className="relative max-w-[1280px] h-full px-4 py-1 flex flex-col gap-4">
                {/* Date goes here */}
                <span className="text-sm text-primary opacity-75 ">24th March, 2024</span>

                {/* USING MY OWN REUSABLE SHEET COMPONENT */}
                <div className={`grid grid-cols-2 gap-4 items-center`}>
                    <Sheet
                        TriggerNode={
                            <TriggerNode />
                        }
                        Spinner={<Spinner id={"CaseFormSpinner"}></Spinner>}
                        title={"Create Case"}
                        description={"Provide the following details to create a new case. Please add a proper description including the funding account and phone No. to contact the person in need"}
                    >
                        <CaseForm setCasesStateFn={setCases}></CaseForm>
                    </Sheet>
                    {/* SEARCH BAR AND FILTERS */}
                    <div className='w-full h-full flex relative'>
                        <div className='absolute left-2 top-3 pointer-events-none z-20'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        
                        <div className='absolute right-0 top-0 flex items-center z-20 justify-center w-9 h-full cursor-pointer hover:bg-slate-100 border-b-2 border-transparent hover:border-yellow-400 transition-all duration-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                            </svg>
                        </div>
                        <div className='flex items-center w-full relative input-ctn'>
                            <input type="text" className='group h-full w-full px-10 pt-2  outline-none border-b-2 border-blue-600 focus:border-blue-700 transition-all duration-200 bg-slate-50 text-slate-800 font-medium placeholder-transparent input-field focus:placeholder-opacity-100 focus:placeholder:text-slate-400 placeholder-shown:border-slate-400' placeholder='#22' />
                            <span className='fake-placeholder absolute left-9 top-0 transition-all duration-200 text-slate-400 text-xs pointer-events-none'>Search by #id, title, Cause</ span>
                        </div>
                    </div>
                </div>
                {/* Table goes here */}
                <CaseTable cases={casesState} setCaseFn={setCases}></CaseTable>
            </div>
        </>
    )
}
// THIS IS THE TRIGGER NODE FOR MY CUSTOM SHEET COMPONENT
const TriggerNode = () => {
    return (
        <div id="new-case-sheet"
            className="w-full group flex gap-4 justify-between items-center lg:min-w-[400px] hover:bg-slate-300 hover:shadow-slate-300 transition-all duration-300 py-2 px-4 shadow-md shadow-slate-400 ">

            <span className="font-bold text-primary text-2xl">
                Create New Case
            </span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-green-500  group-hover:text-green-700 transition-all duration-300 "
            >
                <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                    clipRule="evenodd"
                />
            </svg>
        </div>

    )
}