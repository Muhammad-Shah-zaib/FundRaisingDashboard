import { Progress } from "@/components/ui/progress"
import { useState } from "react";

interface ICausesDonationStatus {
    RationDrive: number;
    HostelMess: number;
    HostelFee: number;
    TuitionFee: number;
    Health: number;
}

export default function SideInfoBar(){
    const [causesDonationStatus] = useState<ICausesDonationStatus>({
        RationDrive: 50,
        HostelMess: 10,
        HostelFee: 20,
        TuitionFee: 15,
        Health: 5
    } as ICausesDonationStatus)


    return (
        <>
            <>
                {/* Container */}
                <div className="h-full w-full bg-sky-50 py-20">

                    {/* content container */}
                    <div className="flex px-8 flex-col gap-6">
                        <h3 className="text-lg font-medium mb-4">Total donations this month</h3>

                        {/* single piece of info */}
                        <div className="flex flex-col gap-2">
                            {/* content info */}
                            <div className="flex justify-between">
                                <p className="text-[#273240] font-medium">Ration Drive</p>
                                <p className="text-[#273240] font-medium">Rs. 5000</p>
                            </div>
                            {/* loading bar */}
                            <Progress value={causesDonationStatus.RationDrive} className="w-full h-1"></Progress>
                        </div>


                        {/* single piece of info */}
                        <div className="flex flex-col gap-2">
                            {/* content info */}
                            <div className="flex justify-between">
                                <p className="text-[#273240] font-medium">Hostel Mess</p>
                                <p className="text-[#273240] font-medium">Rs. 150,000</p>
                            </div>
                            {/* loading bar */}
                            <Progress value={causesDonationStatus.HostelMess} className="w-full h-1"></Progress>
                        </div>

                        {/* single piece of info */}
                        <div className="flex flex-col gap-2">
                            {/* content info */}
                            <div className="flex justify-between">
                                <p className="text-[#273240] font-medium">Hostel Fee</p>
                                <p className="text-[#273240] font-medium">Rs. 92,000</p>
                            </div>
                            {/* loading bar */}
                            <Progress value={causesDonationStatus.HostelFee} className="w-full h-1"></Progress>
                        </div>

                        {/* single piece of info */}
                        <div className="flex flex-col gap-2">
                            {/* content info */}
                            <div className="flex justify-between">
                                <p className="text-[#273240] font-medium">Tuition Fee</p>
                                <p className="text-[#273240] font-medium">Rs. 89,000</p>
                            </div>
                            {/* loading bar */}
                            <Progress value={causesDonationStatus.TuitionFee} className="w-full h-1"></Progress>
                        </div>
                        

                        {/* single piece of info */}
                        <div className="flex flex-col gap-2">
                            {/* content info */}
                            <div className="flex justify-between">
                                <p className="text-[#273240] font-medium">Health</p>
                                <p className="text-[#273240] font-medium">Rs. 15,000</p>
                            </div>
                            {/* loading bar */}
                            <Progress value={causesDonationStatus.Health} className="w-full h-1"></Progress>
                        </div>

                    </div>
                </div>
            </>
        </>
    )
}