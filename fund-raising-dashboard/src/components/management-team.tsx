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


interface IUsers {
    UserId: number;
    RegisteredDate: string;
    FirstName: string;
    LastName: string;
    LastLogin: string;
    Action: string[];
}
type IUsersList = IUsers[];

export default function ManagementTeam() {

    const users: IUsersList = [
        {
            UserId: 1001,
            RegisteredDate: "2024-03-24",
            FirstName: "John",
            LastName: "Wick",
            LastLogin: "2024-01-24",
            Action: ["Edit", "Remove"],

        },
        {
            UserId: 1002,
            RegisteredDate: "2024-03-24",
            FirstName: "John",
            LastName: "Wick",
            LastLogin: "2024-01-24",
            Action: ["Edit Case", "Resolve Case", "Close Case"],

        },
        {
            UserId: 1003,
            RegisteredDate: "2024-03-24",
            FirstName: "John",
            LastName: "Wick",
            LastLogin: "2024-01-24",
            Action: ["Edit Case", "Resolve Case", "Close Case"],

        },
        {
            UserId: 1004,
            RegisteredDate: "2024-03-24",
            FirstName: "John",
            LastName: "Wick",
            LastLogin: "2024-01-24",
            Action: ["Edit Case", "Resolve Case", "Close Case"],

        },
        {
            UserId: 1005,
            RegisteredDate: "2024-03-24",
            FirstName: "John",
            LastName: "Wick",
            LastLogin: "2024-01-24",
            Action: ["Edit Case", "Resolve Case", "Close Case"],

        },
        {
            UserId: 1006,
            RegisteredDate: "2024-03-24",
            FirstName: "John",
            LastName: "Wick",
            LastLogin: "2024-01-24",
            Action: ["Edit Case", "Resolve Case", "Close Case"],

        },
        {
            UserId: 1007,
            RegisteredDate: "2024-03-24",
            FirstName: "John",
            LastName: "Wick",
            LastLogin: "2024-01-24",
            Action: ["Edit Case", "Resolve Case", "Close Case"],

        },
        {
            UserId: 1008,
            RegisteredDate: "2024-03-24",
            FirstName: "John",
            LastName: "Wick",
            LastLogin: "2024-01-24",
            Action: ["Edit Case", "Resolve Case", "Close Case"],

        },


    ]

    return (
        <>
            {/* container */}
            <div className="w-full h-full px-4 py-1 flex flex-col gap-4">
                {/* Date goes here */}
                <span className="text-sm text-primary opacity-75 ">24th March, 2024</span>

                {/* Header for verified and unverified Cases */}
                <div className="flex gap-4">
                    <div className="w-[50%] px-4 py-2 bg-sky-100 rounded-xl flex gap-3 shadow-md shadow-slate-400">
                        <div className="w-full py-2 text-center">
                            <h1 className="cursor-pointer text-2xl font-bold text-primary border-b-4 border-blue-500">Management Team</h1>
                        </div>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild>
                            <div className="w-[50%] px-4 py-2 hover:bg-slate-200 transition-all duration-300 rounded-xl flex gap-3 shadow-md shadow-slate-400">
                                <div className="w-full py-2 flex items-center justify-between px-4">
                                    <h1 className="cursor-pointer text-2xl font-bold text-primary">Add New User</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                                    </svg>

                                </div>
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
                </div>


                {/* Table goes here */}
                <div className="h-[70vh] w-[70vw] overflow-auto ">
                    <Table>
                        <TableCaption>List of cases ends.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px]">User Id</TableHead>
                                <TableHead>Registered Date</TableHead>
                                <TableHead>First Name</TableHead>
                                <TableHead>Last Name</TableHead>
                                <TableHead>Last Login</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                users.map(u => (
                                    <TableRow key={u.UserId}>
                                        <TableCell className="font-medium">{u.UserId}</TableCell>
                                        <TableCell>{u.RegisteredDate}</TableCell>
                                        <TableCell>{u.FirstName}</TableCell>
                                        <TableCell>{u.LastName}</TableCell>
                                        <TableCell>{u.LastLogin}</TableCell>
                                        <TableCell className="text-end">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger>
                                                    <button className="px-4 py-2 outline-none hover:bg-slate-300 transition-all duration-300 rounded-lg shadow-md shadow-slate-300 tracking-wide font-black"> . . . </button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuLabel>User</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    {
                                                        u.Action.map((action, index) => (
                                                            action === "Remove" ?
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