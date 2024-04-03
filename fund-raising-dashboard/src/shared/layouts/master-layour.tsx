import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar";

export default function MasterLayout(){
    return (
        <>
            {/* Container of the whole page */}
            <div className="h-[100vh] w-[100vw] grid grid-cols-12">

                {/* Container for the nav Bar */}
                <div className="col-span-3 h-full w-full">
                    <Navbar></Navbar>
                </div>

                {/* Container for main component */}
                <div className="col-span-6 h-full bg-yellow-300">
                    <Outlet></Outlet>
                </div>

                <div className="col-span-3 gifull bg-blue-300"></div>

            </div>
        </>
    )
}