import Navbar from '../component/navbar'
import { Outlet } from 'react-router-dom'

/*
* This layout is for the cases
* and management team pages
*/
function SecondaryMasterLayout() {
    return (
        <>
            {/* Container of the whole page */}
            <div className="h-[100vh] w-[100vw] grid grid-cols-12 bg-[#101010] p-4">

                {/* Container for the nav Bar */}
                <div className="col-span-2 h-full w-full">
                    <Navbar></Navbar>
                </div>

                <div className={`col-span-10 h-full w-full bg-white rounded-lg overflow-hidden`}>
                    {/* Container for main component */}
                    <Outlet></Outlet>
                </div>
            </div >
        </>
    )
}

export default SecondaryMasterLayout