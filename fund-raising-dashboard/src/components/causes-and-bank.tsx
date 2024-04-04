import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function CausesAndBank() {
    return (
        <>
            {/* Container */}
            <div className="h-full w-full flex flex-col gap-8 px-16 py-4">
                {/* header */}
                <header className="flex w-full">
                    <div className="w-full py-3 px-2 bg-sky-100 rounded-lg shadow-md shadow-slate-400 cursor-default flex flex-col gap-4">
                        <h2 className="text-3xl font-bold opacity-60">
                            Total Money in the Bank
                        </h2>
                        <span className="text-4xl font-bold self-center">283,990 Rs</span>
                    </div>
                </header>

                {/* Create new Cause */}
                <Sheet>
                    <SheetTrigger asChild>
                        <div className="group flex justify-between items-center w-full bg-green-100 hover:bg-green-300 hover:shadow-green-300 transition-all duration-300 py-2 px-4 rounded-lg shadow-md shadow-slate-400 ">
                            <span className="font-bold text-primary text-2xl">
                                Create New Cause
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


                {/* Current Cause and there Balance */}
                <div className="grid grid-cols-2 gap-4 overflow-scroll p-2 h-[58vh]">
                    {/* Single Card */}
                    <div className="cursor-pointer hover:shadow-none transition-shadow duration-200 flex flex-col gap-4 p-2 bg-yellow-100 rounded-lg shadow-lg">
                        <div className="w-full flex items-center justify-between">
                            <span className="text-start text-xl font-black">
                                Ration Drive
                            </span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-9 h-9 text-red-400 hover:text-red-600"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-lg font-medium ">Money Present</p>
                            <span className="text-xl font-bold text-primary">289,999 Rs</span>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg font-medium ">Money Donated So far</p>
                            <span className="text-xl font-bold text-primary">176, 555</span>
                        </div>
                    </div>

                    {/* Single Card */}
                    <div className="cursor-pointer hover:shadow-none transition-shadow duration-200 flex flex-col gap-4 p-2 bg-yellow-100 rounded-lg shadow-lg">
                        <div className="w-full flex items-center justify-between">
                            <span className="text-start text-xl font-black">
                                Ration Drive
                            </span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-9 h-9 text-red-400 hover:text-red-600"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-lg font-medium ">Money Present</p>
                            <span className="text-xl font-bold text-primary">289,999 Rs</span>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg font-medium ">Money Donated So far</p>
                            <span className="text-xl font-bold text-primary">176, 555</span>
                        </div>
                    </div>

                    {/* Single Card */}
                    <div className="cursor-pointer hover:shadow-none transition-shadow duration-200 flex flex-col gap-4 p-2 bg-yellow-100 rounded-lg shadow-lg">
                        <div className="w-full flex items-center justify-between">
                            <span className="text-start text-xl font-black">
                                Ration Drive
                            </span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-9 h-9 text-red-400 hover:text-red-600"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-lg font-medium ">Money Present</p>
                            <span className="text-xl font-bold text-primary">289,999 Rs</span>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg font-medium ">Money Donated So far</p>
                            <span className="text-xl font-bold text-primary">176, 555</span>
                        </div>
                    </div>

                    {/* Single Card */}
                    <div className="cursor-pointer hover:shadow-none transition-shadow duration-200 flex flex-col gap-4 p-2 bg-yellow-100 rounded-lg shadow-lg">
                        <div className="w-full flex items-center justify-between">
                            <span className="text-start text-xl font-black">
                                Ration Drive
                            </span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-9 h-9 text-red-400 hover:text-red-600"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-lg font-medium ">Money Present</p>
                            <span className="text-xl font-bold text-primary">289,999 Rs</span>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg font-medium ">Money Donated So far</p>
                            <span className="text-xl font-bold text-primary">176, 555</span>
                        </div>
                    </div>

                    {/* Single Card */}
                    <div className="cursor-pointer hover:shadow-none transition-shadow duration-200 flex flex-col gap-4 p-2 bg-yellow-100 rounded-lg shadow-lg">
                        <div className="w-full flex items-center justify-between">
                            <span className="text-start text-xl font-black">
                                Ration Drive
                            </span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-9 h-9 text-red-400 hover:text-red-600"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-lg font-medium ">Money Present</p>
                            <span className="text-xl font-bold text-primary">289,999 Rs</span>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg font-medium ">Money Donated So far</p>
                            <span className="text-xl font-bold text-primary">176, 555</span>
                        </div>
                    </div>

                    {/* Single Card */}
                    <div className="cursor-pointer hover:shadow-none transition-shadow duration-200 flex flex-col gap-4 p-2 bg-yellow-100 rounded-lg shadow-lg">
                        <div className="w-full flex items-center justify-between">
                            <span className="text-start text-xl font-black">
                                Ration Drive
                            </span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-9 h-9 text-red-400 hover:text-red-600"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </div>

                        <div className="flex flex-col">
                            <p className="text-lg font-medium ">Money Present</p>
                            <span className="text-xl font-bold text-primary">289,999 Rs</span>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg font-medium ">Money Donated So far</p>
                            <span className="text-xl font-bold text-primary">176, 555</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
