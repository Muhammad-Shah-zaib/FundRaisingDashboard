import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CaseList } from '@/models/DTOs/CasesResponseDto';
import Spinner from '@/shared/component/Spinner';
import { deleteCaseAsync } from "@/Services/CaseService";
import EditCaseForm from "./EditCaseForm";
import { toast } from "sonner";
import TriggerClick from "@/utils/TriggerClick";

interface ICaseTableProps {
    cases: CaseList
    setCaseFn: (cases: CaseList) => void
}

function CaseTable({ cases, setCaseFn }: ICaseTableProps) {

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
                        {/* heach table header can be used as the sorting buttons */}
                        <TableHead className="w-[150px] hover:bg-blue-100 cursor-pointer">Title</TableHead>
                        <TableHead className="w-[150px] hover:bg-blue-100 cursor-pointer">Case Id</TableHead>
                        <TableHead className="w-[150px] hover:bg-blue-100 cursor-pointer">Created Date</TableHead>
                        <TableHead className="w-[150px] hover:bg-blue-100 cursor-pointer">Cause</TableHead>
                        <TableHead className="w-[150px] hover:bg-blue-100 cursor-pointer text-end">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        cases.map(c => (
                            <TableRow key={c.caseId}>
                                <TableCell className="font-medium">{c.title}</TableCell>
                                <TableCell>{c.caseId}</TableCell>
                                <TableCell>{c.createdDate}</TableCell>
                                <TableCell>{c.causeName}</TableCell>
                                <TableCell className="text-end">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <button className="px-4 py-2 outline-none hover:bg-slate-300 transition-all duration-300 rounded-lg shadow-md shadow-slate-300 tracking-wide font-black"> . . . </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuLabel>Case</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            {/* VERIFY CASE */}
                                            <DropdownMenuItem onClick={() => console.log(c.caseId)} className="rounded-lg">Verify Case Case</DropdownMenuItem>
                                            <Dialog>
                                                <DialogTrigger className="w-full">
                                                    <div className="rounded-lg text-sm text-start px-2 py-1 hover:bg-slate-100 w-full my-1">Edit Case</div>
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        {/* EDIT CASE */}
                                                        <DialogTitle>Edit Case: #{c.caseId}</DialogTitle>
                                                        <DialogDescription>
                                                            <EditCaseForm existingCase={c} caseId={c.caseId} setCasesStateFn={setCaseFn}></EditCaseForm>
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                </DialogContent>
                                            </Dialog>
                                            {/* DELETE CASE */}
                                            <div>
                                                <Dialog>
                                                    <DialogTrigger>
                                                        <button className="bg-red-50 rounded-lg hover:bg-red-200 text-red-800 transition-all duration-300 px-2 py-1 m-1 w-full text-start font-bold text-base">Resolve Case</button>
                                                    </DialogTrigger>
                                                    {/* CONFIRMING FROM USER TO DELETE THE CASE OR NOT */}
                                                    <DialogContent>
                                                        <DialogHeader>
                                                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                                                            <DialogDescription>
                                                                <div>
                                                                    <p>
                                                                        This action cannot be undone. This will permanently case and remove the data from the server.
                                                                    </p>

                                                                    <div className="flex gap-4 justify-end">
                                                                        <button onClick={() => TriggerClick("dialog-close-btn")} className="bg-slate-50 text-black font-medium shadow-md shadow-slate-400 border hover:border-sky-700 rounded-lg px-4 py-2 hover:bg-slate-100 transition-all duration-300 hover:border">Cancle</button>
                                                                        <button onClick={() => {
                                                                            deleteCase(c.caseId);
                                                                        }} className="bg-red-200 text-red-800 hover:bg-red-300 transition-all duration-300 font-bold shadow-md shadow-slate-400 rounded-lg px-4 py-2">Delete</button>
                                                                    </div>

                                                                </div>


                                                            </DialogDescription>
                                                        </DialogHeader>
                                                    </DialogContent>
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
        </div >
    )
}

export default CaseTable