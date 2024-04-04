import { NavLink } from "react-router-dom";

interface NavbarProps {
    ToggleSideBarFn: (state: boolean) => void;
}

export default function Navbar({ ToggleSideBarFn }: NavbarProps) {
    return (
        // Container
        <div className="py-20 px-10 text-white bg-[#101010] h-full w-full">
            {/* Content container */}
            <div className="flex flex-col gap-16">
                {/* little bit of profile details */}
                <div className="flex flex-col gap-3">
                    {/* image */}
                    <div className="h-[60px] w-[60px] bg-blue-500 rounded-lg">
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-2xl font-bold">Samantha</h3>
                        <h4 className="text-sm opacity-50">samantha@gmail.com</h4>
                    </div>

                </div>

                {/* container for the navbar */}
                <div className="text-lg font-medium flex flex-col gap-4">
                    <span className="cursor-pointer opacity-50 hover:opacity-100 transition-all duration-300">
                        <NavLink onClick={() => ToggleSideBarFn(true)} to={'/dashboard'}>Dashboard</NavLink>
                    </span>
                    <span className="cursor-pointer opacity-50 hover:opacity-100 transition-all duration-300">
                        <NavLink onClick={() => ToggleSideBarFn(true)} to={'/causes-Bank'}>Causes & Bank</NavLink>
                    </span>
                    <span className="cursor-pointer opacity-50 hover:opacity-100 transition-all duration-300">
                        <NavLink onClick={() => ToggleSideBarFn(false)} to={'Cases'}>Cases</NavLink></span>
                    <span className="cursor-pointer opacity-50 hover:opacity-100 transition-all duration-300">
                        <NavLink onClick={() => ToggleSideBarFn(false)} to={'Management-Team'}>Management Team</NavLink>
                    </span>
                </div>Cases
            </div>

        </div>
    )
}