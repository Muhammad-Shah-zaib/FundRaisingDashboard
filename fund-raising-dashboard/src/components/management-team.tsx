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
import { SubmitHandler, useForm } from "react-hook-form";
import { startSpinner, stopSpinner } from "@/utils/SpinnerFn";
import Spinner from "@/shared/component/Spinner";


interface IUsers {
    UserId: number;
    RegisteredDate: string;
    FirstName: string;
    LastName: string;
    LastLogin: string;
    Action: string[];
}
type IUsersList = IUsers[];

interface IAddUser {
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
}
export default function ManagementTeam() {
    // Form Hooks
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<IAddUser>();

    // Function to handle the form submission
    const onSubmit: SubmitHandler<IAddUser> = async (data) => {
        startSpinner("MT-spinner");
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setError('root', {
            message: "Something went wrong, Please try again later."
        })
        stopSpinner('MT-spinner');
        console.log(data);
    }

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
                        <SheetContent className="realtive">
                            {/* LOADING SPINNER */}
                            <Spinner id='MT-spinner'></Spinner>
                            <SheetHeader>
                                {/* ROOT ERRORS GOES HERE */}
                                {errors.root && <span className="text-sm text-red-700 select-none font-bold bg-red-100 px-4 py-2 rounded-md">{errors.root.message}</span>}
                                <SheetTitle>Edit profile</SheetTitle>
                                <SheetDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </SheetDescription>
                            </SheetHeader>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 py-4">
                                {/* First Name */}
                                <div className="grid items-center gap-3 grid-cols-3">
                                    <span><label htmlFor="firstname" className="text-base font-medium text-primary cursor-pointer">First Name: <strong className="text-red-500">*</strong></label></span>
                                    <input
                                        {...register("FirstName", {
                                            required: "First Name is required"
                                        })}
                                        id="firstname"
                                        type="text"
                                        className="col-span-2 outline-none border-2 border-slate-400 rounded-lg text-primary px-4 py-1 font-medium"
                                        placeholder="John"
                                    />
                                    {/* Validation for firstname field */}
                                    {errors.FirstName && <span className="col-span-3 text-sm text-red-700 select-none font-bold bg-red-100 px-4 py-2 rounded-md">{errors.FirstName.message}</span>}
                                </div>
                                {/* Last Name */}
                                <div className="grid items-center gap-3 grid-cols-3">
                                    <span><label htmlFor="lastname" className="text-base font-medium text-primary cursor-pointer">Last Name: </label></span>
                                    <input
                                        {...register("LastName")}
                                        id="lastname"
                                        type="text"
                                        className="col-span-2 outline-none border-2 border-slate-400 rounded-lg text-primary px-4 py-1 font-medium"
                                        placeholder="Wick"
                                    />
                                </div>
                                {/* Email */}
                                <div className="grid items-center gap-3 grid-cols-3">
                                    <span>
                                        <label htmlFor="email" className="text-base font-medium text-primary cursor-pointer">Email: <strong className="text-red-500">*</strong></label>
                                    </span>
                                    <input
                                        {...register("Email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                message: "Invalid Email Address"
                                            }
                                        })}
                                        id="email"
                                        type="text"
                                        className="col-span-2 outline-none border-2 border-slate-400 rounded-lg text-primary px-4 py-1 font-medium"
                                        placeholder="example@gmail.com"
                                    />
                                    {/* Validation for email field */}
                                    {errors.Email && <span className="col-span-3 text-sm text-red-700 select-none font-bold bg-red-100 px-4 py-2 rounded-md">{errors.Email.message}</span>}
                                </div>
                                {/* Password */}
                                <div className="grid items-center gap-3 grid-cols-3">
                                    <span>
                                        <label htmlFor="password" className="text-base font-medium text-primary cursor-pointer">Password: <strong className="text-red-500">*</strong></label>
                                    </span>
                                    <input
                                        {...register("Password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 8,
                                                message: "Password must be at least 8 characters long"
                                            },
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                message: "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
                                            }
                                        })}
                                        id="password"
                                        type="password"
                                        className="col-span-2 outline-none border-2 border-slate-400 rounded-lg text-primary px-4 py-1 font-medium" placeholder="********"
                                    />
                                    {/* Validation for password field */}
                                    {errors.Password && <span className="col-span-3 text-sm text-red-700 select-none font-bold bg-red-100 px-4 py-2 rounded-md">{errors.Password.message}</span>}
                                </div>

                                <div>
                                    <button disabled={isSubmitting} className="text-lg font-medium w-full text-center bg-slate-100 rounded-lg px-4 py-2 hover:bg-slate-300 transition-all duration-300 shadow-md shadow-slate-300">{isSubmitting ? 'Adding...' : 'Add user'}</button>
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