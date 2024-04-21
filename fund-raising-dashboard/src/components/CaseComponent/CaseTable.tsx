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
import { startSpinner, stopSpinner } from "@/utils/SpinnerFn";

interface ICaseTableProps {
    cases: CaseList
    setCaseFn?: (cases: CaseList) => void
}

function CaseTable({ cases, setCaseFn }: ICaseTableProps) {

    const deleteCase = (id: number) => {
        startSpinner("CasesTableSpinner");
        console.log("Deleting" + id);
        const deletedCase$ = deleteCaseAsync(id);
        deletedCase$.subscribe({
            next: (res) => {
                stopSpinner("CasesTableSpinner");
                console.log(res.response);
                setCaseFn && setCaseFn(cases.filter(c => c.caseId !== id));
            },
            error: (err) => {
                stopSpinner("CasesTableSpinner");
                console.error(err);
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
                                            <DropdownMenuItem onClick={() => console.log(c.caseId)} className="rounded-lg">Verify Case Case</DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => console.log(c.caseId)} className="rounded-lg">Edit Case</DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => deleteCase(c.caseId)} className="bg-red-100 rounded-lg">Resolve Case</DropdownMenuItem>
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