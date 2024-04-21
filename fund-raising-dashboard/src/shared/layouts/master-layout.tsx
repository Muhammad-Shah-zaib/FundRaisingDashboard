import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar";
import SideInfoBar from "../component/side-Info-bar";
/*
* This layout is for the dashboard 
* and causes and bank pages
*/
export default function MasterLayout() {
    return (
        <>
            {/* Container of the whole page */}
            <div className="h-[100vh] w-[100vw] grid grid-cols-12 bg-[#101010] p-4">

                {/* Container for the nav Bar */}
                <div className="col-span-2 h-full w-full">
                    <Navbar></Navbar>
                </div>

                <div className={`col-span-10 h-full w-full bg-white grid grid-cols-12 rounded-lg overflow-hidden`}>
                    {/* Container for main component */}
                    <div className={`col-span-8 h-full w-full`}>
                        <Outlet></Outlet>
                    </div>

                    {/* Container for the side Info Bar */}
                    <div className={`col-span-4 h-full w-full`}>

                        <SideInfoBar></SideInfoBar>
                    </div>
                </div>
            </div >
        </>
    )
}