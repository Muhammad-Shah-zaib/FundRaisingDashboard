import { NavLink, useNavigate } from "react-router-dom";
import './navbar.css';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
    // Hooks
    const navigate = useNavigate();

    // Dynamic classes

    // Functions
    // to handle email
    const handleEmail = () => {
        let string: string = localStorage.getItem("email")!.toLowerCase();
        if (string.length > 18) string = string.slice(0, 18) + "...";
        return string;
    }
    // to handle logout
    const handleLogOut = () => {
        if (confirm("Are you sure you want to log out?")) {
            localStorage.removeItem('token');
            localStorage.removeItem('email');
            localStorage.removeItem('firstName');
            localStorage.removeItem('lastName');
            localStorage.removeItem('userCnic');
            navigate('login');
        }
    }

    return (    
        // Container
        <div className="py-20 text-white bg-[#101010] h-full w-full pr-2">
            {/* Content container */}
            <div className="flex flex-col gap-12">
                {/* little bit of profile details */}
                <div className="flex flex-col gap-3">
                    {/* image */}
                    <div className="ml-2 h-[60px] w-[60px] bg-blue-500 rounded-lg overflow-hidden">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1RwTUt6ve7LIsabWDQRnJQ_sLKgmh4gyOjWkUPzj2A&s" className="w-[60px] h-[60px]" />
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-2xl px-2 font-bold">{localStorage.getItem("firstName")} {localStorage.getItem("lastName")}</h3>
                        {/* Drop down to logout and account settings */}
                        <DropdownMenu>
                            <DropdownMenuTrigger className="hover:bg-zinc-900 py-2 pl-2 rounded-lg outline-none">
                                <div className={`flex gap-2 items-center`}>
                                    <h4 className="text-sm opacity-50 text-start">{handleEmail()}</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`w-4 h-4`}>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent>
                                <DropdownMenuLabel>Profile</DropdownMenuLabel>
                                <DropdownMenuSeparator></DropdownMenuSeparator>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Setting</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleLogOut()}>Log Out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>

                </div>

                {/* container for the navbar */}
                <div className="text-lg font-medium flex flex-col gap-1">
                    <span className="cursor-pointer transition-all duration-300  rounded-lg">
                        <NavLink className={`w-full h-full py-2 pl-2 hover:bg-slate-800 rounded-lg block opacity-50 hover:opacity-100 `} to={'/dashboard'} >Dashboard</NavLink>
                    </span>
                    <span className="cursor-pointer transition-all duration-300  rounded-lg">
                        <NavLink className={`w-full h-full pl-2 py-2 hover:bg-slate-800 rounded-lg block opacity-50 hover:opacity-100`} to={'/causes-Bank'}>Causes & Bank</NavLink>
                    </span>
                    <span className="cursor-pointer transition-all duration-300  rounded-lg">
                        <NavLink className={`w-full h-full pl-2 py-2 hover:bg-slate-800 rounded-lg block opacity-50 hover:opacity-100 `} to={'/Cases'}>Cases</NavLink></span>
                    <span className="cursor-pointer transition-all duration-300  rounded-lg">
                        <NavLink className={`w-full h-full pl-2 py-2 hover:bg-slate-800 rounded-lg block opacity-50 hover:opacity-100`} to={'/Management-Team'}>Management Team</NavLink>
                    </span>

                </div>
            </div>

        </div>
    )
}