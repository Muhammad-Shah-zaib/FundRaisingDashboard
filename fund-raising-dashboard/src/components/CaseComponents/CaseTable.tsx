import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Dialog from "@/shared/component/Dialog";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CaseList } from '@/models/DTOs/CasesResponseDto';
import Spinner from '@/shared/component/Spinner';
import { deleteCaseAsync, getAllCases$, unVerifyCase$ } from "@/Services/CaseService";
import EditCaseForm from "./EditCaseForm";
import { toast } from "sonner";
import TriggerClick from "@/utils/TriggerClick";
import { verifyCase$ } from "@/Services/CaseService";
import { startSpinner, stopSpinner } from "@/utils/SpinnerFn.ts";
import ShowSingleCase from "@/components/CaseComponents/ShowSingleCase.tsx";

interface ICaseTableProps {
    cases: CaseList
    setCaseFn: (cases: CaseList) => void
}

function CaseTable({ cases, setCaseFn }: ICaseTableProps) {
    const unVerifyCase = (id: number) => {
        TriggerClick("dialog-close-btn");
        startSpinner("CasesTableSpinner");
        const unVerifiedCase = unVerifyCase$(id);

        unVerifiedCase.subscribe({
            next: (res) => {
                if (res.status === 200) {
                    setCaseFn([]);
                    console.log(res);
                    // since the caseList is now updated, so we need to fetch the cases again
                    // start the spinner we made for caseTable... IMPLEMENT THIS LATER
                    const cases$ = getAllCases$();
                    cases$.subscribe({
                        next: (res) => {
                            setCaseFn(res);
                            stopSpinner("CasesTableSpinner");
                            toast.success("Case verified successfully.");
                        },
                        error: (err) => {
                            console.error(err);

                        }
                    });
                }
            },
            error: (err) => {
                console.error("error: ", err);
                if (err.status === 500)
                    toast.error("Internal server error please try again later");
                else toast.error("Case verification failed.");
            }
        })
    }

    const verifyCase = (id: number) => {
        TriggerClick("dialog-close-btn");
        startSpinner("CasesTableSpinner");
        const verifiedCase$ = verifyCase$(id);

        verifiedCase$.subscribe({
            next: (res) => {
                if (res.status === 200) {
                    setCaseFn([]);
                    console.log(res);
                    const cases$ = getAllCases$();
                    cases$.subscribe({
                        next: (res) => {
                            setCaseFn(res);
                            stopSpinner("CasesTableSpinner");
                            toast.success("Case verified successfully.");
                        },
                        error: (err) => {
                            console.error(err);

                        }
                    });
                }
            },
            error: (err) => {
                console.error("error: ", err);
                if (err.status === 500)
                    toast.error("Internal server error please try again later");
                else toast.error("Case verification failed.");
            }
        })
    }

    const deleteCase = (id: number) => {
        console.log("Deleting" + id);
        const deletedCase$ = deleteCaseAsync(id);
        deletedCase$.subscribe({
            next: (res) => {
                console.log(res.response);
                setCaseFn && setCaseFn(cases.filter(c => c.caseId !== id));
                TriggerClick("dialog-close-btn");
                toast.success("Case Resolved Successfully!");
            },
            error: (err) => {
                console.error(err);
                TriggerClick("dialog-close-btn");
                toast.error("Case Resolved Failed!", {
                    action: {
                        label: "Retry",
                        onClick: () => deleteCase(id)
                    }
                });
            }
        })
    }


    return (
        <div className="h-[60vh] overflow-auto relative">
            <Spinner BgClass={"bg-transparent"} id={"CasesTableSpinner"}></Spinner>
            <Table>
                <TableCaption>List of cases ends here.</TableCaption>
                <TableHeader>
                    <TableRow>
                        {/* each table header can be used as the sorting buttons */}
                        <TableHead className="w-[100px] hover:bg-blue-100 cursor-pointer">Case Id</TableHead>
                        <TableHead className="w-[150px] hover:bg-blue-100 cursor-pointer">Title</TableHead>
                        <TableHead className="w-[150px] hover:bg-blue-100 cursor-pointer">Verified Status</TableHead>
                        <TableHead className="w-[150px] hover:bg-blue-100 cursor-pointer">Created Date</TableHead>
                        <TableHead className="w-[150px] hover:bg-blue-100 cursor-pointer">Cause</TableHead>
                        <TableHead className="w-[150px] hover:bg-blue-100 cursor-pointer text-end">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        cases.map(c => (
                            <TableRow key={c.caseId}>
                                <TableCell className={"font-bold"}>#{c.caseId}</TableCell>
                                <TableCell className="font-medium">{c.title}</TableCell>
                                <TableCell>
                                    <Dialog
                                        TriggerNode={
                                            <button className="flex gap-2 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                    className={`w-6 h-6 ${c.verifiedStatus ? 'text-green-400' : 'text-gray-400'}`}>
                                                    <path fillRule="evenodd"
                                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                        clipRule="evenodd" />
                                                </svg>
                                                {c.verifiedStatus ? "Verified" : "Un-Verified"}
                                            </button>
                                        }
                                        title={`Case# ${c.caseId}`}
                                    >
                                        <div className="flex flex-col gap-1">
                                            <p>Are you sure? You can undo this action later.</p>
                                            <div className="flex justify-end">
                                                <button onClick={
                                                    c.verifiedStatus ? () => unVerifyCase(c.caseId) : () => verifyCase(c.caseId)
                                                } className="px-4 py-2 border-2 border-slate-400 outline-none rounded-lg bg-slate-100 text-slate-950 opacity-80 font-mono font-black hover:border-blue-700 transition-border duration-300">{c.verifiedStatus ? "Un-Verify case" : "Verify Case"}</button>
                                            </div>
                                        </div>
                                    </Dialog>

                                </TableCell>
                                <TableCell>{c.caseLogs.filter(l => l.logType === 'CREATED_DATE').map(l => l.logDate)}</TableCell>
                                <TableCell>{c.causeName}</TableCell>
                                <TableCell className="text-end">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <button
                                                className="px-4 py-2 outline-none hover:bg-slate-300 transition-all duration-300 rounded-lg shadow-md shadow-slate-300 tracking-wide font-black"> .
                                                . .
                                            </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuLabel>Case</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            {/* SHOW CASE */}
                                            <ShowSingleCase {...c}>
                                                <button className={`text-sm px-2 py-1.5 rounded-lg hover:bg-slate-100 text-start w-full`}>Show Case</button>
                                            </ShowSingleCase>
                                            {/* VERIFY CASE */}
                                            <div>
                                                <Dialog
                                                    TriggerNode={
                                                        <button
                                                            className="px-2 py-1.5 hover:bg-slate-100 text-sm rounded-lg w-full h-full text-start">{c.verifiedStatus ? "Un-Verify case" : "Verify Case"}</button>
                                                    }
                                                    title={`Case# ${c.caseId}`}
                                                >
                                                    <div className="flex flex-col gap-1">
                                                        <p>Are you sure? You can undo this action later.</p>
                                                        <div className="flex justify-end">
                                                            <button onClick={
                                                                c.verifiedStatus ? () => unVerifyCase(c.caseId) : () => verifyCase(c.caseId)
                                                            } className="px-4 py-2 border-2 border-slate-400 outline-none rounded-lg bg-slate-100 text-slate-950 opacity-80 font-mono font-black hover:border-blue-700 transition-border duration-300">{c.verifiedStatus ? "Un-Verify case" : "Verify Case"}</button>
                                                        </div>
                                                    </div>
                                                </Dialog>
                                            </div>

                                            <Dialog
                                                TriggerNode={
                                                    <div
                                                        className="rounded-lg text-sm text-start px-2 py-1 hover:bg-slate-100 w-full my-1">Edit
                                                        Case
                                                    </div>}
                                                title={"Case: " + c.caseId}
                                            >


                                                <EditCaseForm existingCase={c} caseId={c.caseId}
                                                    setCasesStateFn={setCaseFn}></EditCaseForm>

                                            </Dialog>
                                            {/* DELETE CASE */}
                                            <div>
                                                <Dialog
                                                    TriggerNode={
                                                        <button
                                                            className="bg-red-50 rounded-lg hover:bg-red-200 text-red-800 transition-all duration-300 px-2 py-1 m-1 w-full text-start font-bold text-base"
                                                        >
                                                            Delete Case
                                                        </button>
                                                    }
                                                    title={`Case# ${c.caseId}`}
                                                >
                                                    <div>
                                                        <p>
                                                            This action cannot be undone. This will permanently case and
                                                            remove the data from the server.
                                                        </p>

                                                        <div className="flex gap-4 justify-end">
                                                            <button onClick={() => TriggerClick("dialog-close-btn")}
                                                                className="bg-slate-50 text-black font-medium shadow-md shadow-slate-400 border hover:border-sky-700 rounded-lg px-4 py-2 hover:bg-slate-100 transition-all duration-300 hover:border">Cancel
                                                            </button>
                                                            <button onClick={() => {
                                                                deleteCase(c.caseId);
                                                            }}
                                                                className="bg-red-200 text-red-800 hover:bg-red-300 transition-all duration-300 font-bold shadow-md shadow-slate-400 rounded-lg px-4 py-2">Delete
                                                            </button>
                                                        </div>

                                                    </div>
                                                </Dialog>
                                            </div>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default CaseTable