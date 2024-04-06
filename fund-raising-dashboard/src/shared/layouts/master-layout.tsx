import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar";
import SideInfoBar from "../component/side-Info-bar";
import { useState } from "react";

export default function MasterLayout() {
    // using state to toggle the side bar
    const [showSideBar, setShowSideBar] = useState<boolean>(true);

    // this function will toggle the side bar
    const toggleSideBar = (state: boolean) => {
        setShowSideBar(state);
    }
    const sideBarClass = showSideBar ? "col-span-4" : "hidden";
    const wideMainComponentClass = showSideBar ? "col-span-8" : "col-span-12";


    return (
        <>
            {/* Container of the whole page */}
            <div className="h-[100vh] w-[100vw] grid grid-cols-12 bg-[#101010] p-4">

                {/* Container for the nav Bar */}
                <div className="col-span-3 h-full w-full">
                    <Navbar ToggleSideBarFn={toggleSideBar}></Navbar>
                </div>

                <div className={`col-span-9 h-full w-full bg-white grid grid-cols-12 rounded-lg overflow-hidden`}>
                    {/* Container for main component */}
                    <div className={`${wideMainComponentClass} h-full w-full`}>
                        <Outlet></Outlet>
                    </div>

                    {/* Container for the side Info Bar */}
                    <div className={`${sideBarClass} h-full w-full`}>

                        <SideInfoBar></SideInfoBar>
                    </div>
                </div>
            </div>
        </>
    )
}