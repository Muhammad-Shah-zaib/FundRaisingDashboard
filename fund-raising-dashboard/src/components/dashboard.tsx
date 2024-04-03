

export function Dashboard() {
    return (
        <>
            {/* Container */}
            <div className="h-full w-full flex flex-col gap-8 px-16 py-4">

                {/* header */}
                <header className="flex w-full">
                    <div className="w-full py-3 px-2 bg-sky-100 rounded-lg shadow-md flex flex-col gap-4">
                        <h2 className="text-3xl font-bold opacity-60">Cause Bank:</h2>
                        <span className="text-4xl font-bold self-center">283,990 Rs</span>
                    </div>
                </header>

                {/* Donation Received */}
                <div className="h-[70%]">
                    <span className="text-3xl font-medium ">Donation Received</span>

                    {/* Table goes here */}
                    <div className="overflow-scroll h-[60vh]">

                        {/* Date goes here */}
                        <div className="w-full py-2 border-b border-slate-300">
                            <span className="font-medium text-base opacity-75">Monday 24th March, 2024</span>
                        </div>

                        {/* contents container */}
                        <div className="flex flex-col gap-4 w-full py-2 pr-4">

                            {/* single content container */}
                            <div className="grid grid-cols-4 w-full">

                                {/* title and picture */}
                                <div className="col-span-2 flex gap-3 items-center">
                                    <div className="w-[50px] h-[50px] rounded-[100%] bg-blue-400"></div>
                                    <div className="flex flex-col">
                                        <span className="text-base text-[#273240] font-medium">Hostel Mess</span>
                                        {/* date goes here */}
                                        <span className="text-sm opacity-40">5:12 pm</span>
                                    </div>
                                </div>

                                <div className="text-base text-[#273240] font-medium">
                                    Hassam Ali
                                </div>

                                <span className="text-end text-base text-[#273240] font-medium">50 Rs</span>
                            </div>

                             {/* single content container */}
                            <div className="grid grid-cols-4 w-full">

                                {/* title and picture */}
                                <div className="col-span-2 flex gap-3 items-center">
                                    <div className="w-[50px] h-[50px] rounded-[100%] bg-red-400"></div>
                                    <div className="flex flex-col">
                                        <span className="text-base text-[#273240] font-medium">Hostel Fee</span>
                                        {/* date goes here */}
                                        <span className="text-sm opacity-40">5:12 pm</span>
                                    </div>
                                </div>

                                <div className="text-base text-[#273240] font-medium">
                                    Hassam Ali
                                </div>

                                <span className="text-end text-base text-[#273240] font-medium">50 Rs</span>
                            </div>


                            {/* single content container */}
                            <div className="grid grid-cols-4 w-full">

                                {/* title and picture */}
                                <div className="col-span-2 flex gap-3 items-center">
                                    <div className="w-[50px] h-[50px] rounded-[100%] bg-red-400"></div>
                                    <div className="flex flex-col">
                                        <span className="text-base text-[#273240] font-medium">Hostel Fee</span>
                                        {/* date goes here */}
                                        <span className="text-sm opacity-40">5:12 pm</span>
                                    </div>
                                </div>

                                <div className="text-base text-[#273240] font-medium">
                                    Hassam Ali
                                </div>

                                <span className="text-end text-base text-[#273240] font-medium">50 Rs</span>
                            </div>

                            {/* single content container */}
                            <div className="grid grid-cols-4 w-full">

                                {/* title and picture */}
                                <div className="col-span-2 flex gap-3 items-center">
                                    <div className="w-[50px] h-[50px] rounded-[100%] bg-red-400"></div>
                                    <div className="flex flex-col">
                                        <span className="text-base text-[#273240] font-medium">Hostel Fee</span>
                                        {/* date goes here */}
                                        <span className="text-sm opacity-40">5:12 pm</span>
                                    </div>
                                </div>

                                <div className="text-base text-[#273240] font-medium">
                                    Hassam Ali
                                </div>

                                <span className="text-end text-base text-[#273240] font-medium">50 Rs</span>
                            </div>

                            {/* single content container */}
                            <div className="grid grid-cols-4 w-full">

                                {/* title and picture */}
                                <div className="col-span-2 flex gap-3 items-center">
                                    <div className="w-[50px] h-[50px] rounded-[100%] bg-red-400"></div>
                                    <div className="flex flex-col">
                                        <span className="text-base text-[#273240] font-medium">Hostel Fee</span>
                                        {/* date goes here */}
                                        <span className="text-sm opacity-40">5:12 pm</span>
                                    </div>
                                </div>

                                <div className="text-base text-[#273240] font-medium">
                                    Hassam Ali
                                </div>

                                <span className="text-end text-base text-[#273240] font-medium">50 Rs</span>
                            </div>{/* single content container */}
                            <div className="grid grid-cols-4 w-full">

                                {/* title and picture */}
                                <div className="col-span-2 flex gap-3 items-center">
                                    <div className="w-[50px] h-[50px] rounded-[100%] bg-red-400"></div>
                                    <div className="flex flex-col">
                                        <span className="text-base text-[#273240] font-medium">Hostel Fee</span>
                                        {/* date goes here */}
                                        <span className="text-sm opacity-40">5:12 pm</span>
                                    </div>
                                </div>

                                <div className="text-base text-[#273240] font-medium">
                                    Hassam Ali
                                </div>

                                <span className="text-end text-base text-[#273240] font-medium">50 Rs</span>
                            </div>{/* single content container */}
                            <div className="grid grid-cols-4 w-full">

                                {/* title and picture */}
                                <div className="col-span-2 flex gap-3 items-center">
                                    <div className="w-[50px] h-[50px] rounded-[100%] bg-red-400"></div>
                                    <div className="flex flex-col">
                                        <span className="text-base text-[#273240] font-medium">Hostel Fee</span>
                                        {/* date goes here */}
                                        <span className="text-sm opacity-40">5:12 pm</span>
                                    </div>
                                </div>

                                <div className="text-base text-[#273240] font-medium">
                                    Hassam Ali
                                </div>

                                <span className="text-end text-base text-[#273240] font-medium">50 Rs</span>
                            </div>{/* single content container */}
                            <div className="grid grid-cols-4 w-full">

                                {/* title and picture */}
                                <div className="col-span-2 flex gap-3 items-center">
                                    <div className="w-[50px] h-[50px] rounded-[100%] bg-red-400"></div>
                                    <div className="flex flex-col">
                                        <span className="text-base text-[#273240] font-medium">Hostel Fee</span>
                                        {/* date goes here */}
                                        <span className="text-sm opacity-40">5:12 pm</span>
                                    </div>
                                </div>

                                <div className="text-base text-[#273240] font-medium">
                                    Hassam Ali
                                </div>

                                <span className="text-end text-base text-[#273240] font-medium">50 Rs</span>
                            </div>{/* single content container */}
                            <div className="grid grid-cols-4 w-full">

                                {/* title and picture */}
                                <div className="col-span-2 flex gap-3 items-center">
                                    <div className="w-[50px] h-[50px] rounded-[100%] bg-red-400"></div>
                                    <div className="flex flex-col">
                                        <span className="text-base text-[#273240] font-medium">Hostel Fee</span>
                                        {/* date goes here */}
                                        <span className="text-sm opacity-40">5:12 pm</span>
                                    </div>
                                </div>

                                <div className="text-base text-[#273240] font-medium">
                                    Hassam Ali
                                </div>

                                <span className="text-end text-base text-[#273240] font-medium">50 Rs</span>
                            </div>
                        </div>
                        </div>


                </div>

            </div>
        </>
    )
}
