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


interface ICases {
    CaseId: number;
    CreatedDate: string;
    VerifiedStatus: string;
    DonationCollected: number;
    DonationGoal: number;
    Cause: string;
    Action: string[];
}
type ICasesList = ICases[];

export default function Cases() {

    const cases: ICasesList = [
        {
            CaseId: 1001,
            CreatedDate: "2024-03-24",
            VerifiedStatus: "UnVerified",
            DonationCollected: 2884,
            DonationGoal: 13000,
            Cause: "Hostel Mess",
            Action: ["Edit", "Resolve", "Close"],

        },
        {
            CaseId: 1002,
            CreatedDate: "2024-03-24",
            VerifiedStatus: "Verified",
            DonationCollected: 2884,
            DonationGoal: 13000,
            Cause: "Hostel Mess",
            Action: ["Edit", "Resolve", "Close"],

        },
        {
            CaseId: 1003,
            CreatedDate: "2024-03-24",
            VerifiedStatus: "Verified",
            DonationCollected: 2884,
            DonationGoal: 13000,
            Cause: "Hostel Mess",
            Action: ["Edit", "Resolve", "Close Case"],

        },
        {
            CaseId: 1004,
            CreatedDate: "2024-03-24",
            VerifiedStatus: "Verified",
            DonationCollected: 2884,
            DonationGoal: 13000,
            Cause: "Hostel Mess",
            Action: ["Edit", "Resolve", "Close"],

        },
        {
            CaseId: 1005,
            CreatedDate: "2024-03-24",
            VerifiedStatus: "Verified",
            DonationCollected: 2884,
            DonationGoal: 13000,
            Cause: "Hostel Mess",
            Action: ["Edit", "Resolve", "Close"],

        },
        {
            CaseId: 1006,
            CreatedDate: "2024-03-24",
            VerifiedStatus: "Verified",
            DonationCollected: 2884,
            DonationGoal: 13000,
            Cause: "Hostel Mess",
            Action: ["Edit", "Resolve", "Close"],

        }
    ]

    return (
        <>
            {/* container */}
            <div className="w-full h-full px-4 py-1 flex flex-col gap-4">
                {/* Date goes here */}
                <span className="text-sm text-primary opacity-75 ">24th March, 2024</span>

                {/* Header for verified and unverified Cases */}
                <div className="w-full px-4 py-2 bg-sky-100 rounded-xl flex gap-3 shadow-md shadow-slate-400">
                    <div className="w-full py-2 text-center">
                        <h1 className="cursor-pointer text-2xl font-bold text-primary border-b-4 border-blue-500">Verified Cases</h1>
                    </div>
                    <div className="w-full py-2 text-center">
                        <h1 className="cursor-pointer text-2xl font-bold text-primary">Unverified Cases</h1>
                    </div>
                </div>


                <Sheet>
                    <SheetTrigger asChild>
                        <div className="group flex justify-between items-center w-[50%] hover:bg-slate-300 hover:shadow-green-300 transition-all duration-300 py-2 px-4 rounded-lg shadow-sm shadow-slate-300 ">
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
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Edit profile</SheetTitle>
                            <SheetDescription>
                                Make changes to your profile here. Click save when you're done.
                            </SheetDescription>
                        </SheetHeader>
                        <form className="flex flex-col gap-2 py-4">
                            {/* First Name */}
                            <div className="grid items-center gap-3 grid-cols-3">
                                <span><label htmlFor="firstname" className="text-base font-medium text-primary cursor-pointer">First Name: </label></span>
                                <input id="firstname" type="text" className="col-span-2 outline-none border-2 border-slate-400 rounded-lg text-primary px-4 py-1 font-medium" placeholder="John" />
                            </div>
                            {/* Last Name */}
                            <div className="grid items-center gap-3 grid-cols-3">
                                <span><label htmlFor="lastname" className="text-base font-medium text-primary cursor-pointer">Last Name: </label></span>
                                <input id="lastname" type="text" className="col-span-2 outline-none border-2 border-slate-400 rounded-lg text-primary px-4 py-1 font-medium" placeholder="Wick" />
                            </div>
                            {/* Email */}
                            <div className="grid items-center gap-3 grid-cols-3">
                                <span><label htmlFor="email" className="text-base font-medium text-primary cursor-pointer">Email: </label></span>
                                <input id="email" type="text" className="col-span-2 outline-none border-2 border-slate-400 rounded-lg text-primary px-4 py-1 font-medium" placeholder="example@gmail.com" />
                            </div>
                            {/* Password */}
                            <div className="grid items-center gap-3 grid-cols-3">
                                <span><label htmlFor="password" className="text-base font-medium text-primary cursor-pointer">Password: </label></span>
                                <input id="password" type="password" className="col-span-2 outline-none border-2 border-slate-400 rounded-lg text-primary px-4 py-1 font-medium" placeholder="********" />
                            </div>

                        </form>
                        <SheetFooter>
                            <SheetClose asChild>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>


                {/* Table goes here */}
                <div className="h-[60vh] overflow-auto">
                    <Table>
                        <TableCaption>List of cases ends here.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px]">Created Date</TableHead>
                                <TableHead>Donation Collected</TableHead>
                                <TableHead>Donation Goal</TableHead>
                                <TableHead>Cause</TableHead>
                                <TableHead className="text-end">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                cases.filter(c => c.VerifiedStatus === "Verified").map(verifiedc => (
                                    <TableRow key={verifiedc.CaseId}>
                                        <TableCell className="font-medium">{verifiedc.CreatedDate}</TableCell>
                                        <TableCell>{verifiedc.DonationCollected}</TableCell>
                                        <TableCell>{verifiedc.DonationGoal}</TableCell>
                                        <TableCell>{verifiedc.Cause}</TableCell>
                                        <TableCell className="text-end">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger>
                                                    <button className="px-4 py-2 outline-none hover:bg-slate-300 transition-all duration-300 rounded-lg shadow-md shadow-slate-300 tracking-wide font-black"> . . . </button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuLabel>Case</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    {
                                                        verifiedc.Action.map((action, index) => (
                                                            action === "Close Case" ?
                                                                <DropdownMenuItem key={index} className="bg-red-100 rounded-lg">{action}</DropdownMenuItem>
                                                                :
                                                                <DropdownMenuItem key={index} className="rounded-lg">{action}</DropdownMenuItem>
                                                        ))
                                                    }
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </div>
            </div >
        </>
    )
}