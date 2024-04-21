import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { MouseEvent as MouseEventReact, useEffect, useState } from "react";
import { ajax } from "rxjs/ajax";
import { CaseList } from "@/models/DTOs/CasesResponseDto";
import { getALLCasesUrl } from "@/environment/serverUrls.ts";
import { delay } from "rxjs";
import Spinner from "@/shared/component/Spinner.tsx";
import { startSpinner, stopSpinner } from "@/utils/SpinnerFn.ts";
import CaseForm from "./CaseForm";
import CaseTable from "./CaseTable";


export default function Cases() {
    // Form Hooks

    const [casesState, setCases] = useState<CaseList>([]);
    // state to toggle the border for the header
    useEffect(() => {
        startSpinner("CasesTableSpinner");
        ajax.getJSON<CaseList>(getALLCasesUrl)
            .pipe(
                delay(300)
            )
            .subscribe(data => {
                stopSpinner("CasesTableSpinner");
                setCases(data);
                console.log(data);
            }, (Err) => {
                stopSpinner("CasesTableSpinner");
                console.error(Err);
            })
    }, [])

    const handleHeaderState = (e: MouseEventReact<HTMLHeadingElement, MouseEvent>) => {
        const caseHeader = e.target as HTMLElement;
        const siblingHeaderId = caseHeader.id === "VERIFIED_CASES" ? "UNVERIFIED_CASES" : "VERIFIED_CASES";
        const siblingHeader = document.getElementById(siblingHeaderId) as HTMLElement;
        caseHeader.classList.add("border-b-4");
        caseHeader.classList.remove("border-b-0");
        siblingHeader.classList.remove("border-b-4");
        siblingHeader.classList.add("border-b-0");
    }
    return (
        <>
            {/* container */}
            <div className="relative max-w-[1280px] h-full px-4 py-1 flex flex-col gap-4">
                {/* Date goes here */}
                <span className="text-sm text-primary opacity-75 ">24th March, 2024</span>

                {/* Header for verified and unverified Cases */}
                <div className="w-full px-4 py-2 bg-slate-50 flex gap-3 shadow-md shadow-slate-400" >
                    <div className="w-full ">
                        <h1 id="VERIFIED_CASES" onClick={(e) => handleHeaderState(e)} className="transition-all duration-50 border-blue-500 w-full py-2 text-center cursor-pointer text-2xl font-bold text-primary  border-b-4">Verified Cases</h1>
                    </div>
                    <div className="w-full ">
                        <h1 id="UNVERIFIED_CASES" onClick={(e) => handleHeaderState(e)} className="transition-all duration-50 border-blue-500 w-full py-2 text-center cursor-pointer text-2xl font-bold text-primary">Unverified Cases</h1>
                    </div>
                </div>


                <Sheet>
                    <SheetTrigger asChild>
                        <div id="new-case-sheet" className="group flex justify-between items-center max-w-[400px] hover:bg-slate-300 hover:shadow-slate-300 transition-all duration-300 py-2 px-4 shadow-sm shadow-slate-300 ">

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
                    </SheetTrigger>
                    {/* sheet content */}
                    <SheetContent>
                        <Spinner id="CaseFormSpinner"></Spinner>
                        <SheetHeader>
                            <SheetTitle>Create or Update Case</SheetTitle>
                            <SheetDescription>
                                Provide the following details to create a new case.
                            </SheetDescription>
                        </SheetHeader>
                        {/* FORM TO ADD NEW CASE */}
                        <CaseForm></CaseForm>

                        <SheetFooter>
                            <SheetClose asChild>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>


                {/* Table goes here */}
                <CaseTable cases={casesState} setCaseFn={setCases}></CaseTable>

            </div >
        </>
    )
}