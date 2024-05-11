import { Progress } from "@/components/ui/progress"
import useCauseBankService from "@/customHooks/useCauseBankService";
import { TCasueList } from "@/models/DTOs/CauseResponseDto";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Spinner from "./Spinner";

export default function SideInfoBar() {
    const [getAllBankAmount, getAllCauses] = useCauseBankService();
    const [bankAmountState, setBankAmountState] = useState<number>(0);
    const [causeState, setCauseState] = useState<TCasueList>();

    useEffect(() => {
        getAllBankAmount(setBankAmountState);
        getAllCauses(setCauseState, "side-info-bar-spinner");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
            <>
                {/* Container */}
                <div className="h-full w-full bg-sky-50 py-20">

                    {/* content container */}
                    <div className="relative flex px-8 flex-col justify-between gap-4 min-h-[300px]">
                        <Spinner id="side-info-bar-spinner" BgClass="bg-transparent"/>
                        
                        <h3 className="text-xl font-mono text-slate-600 font-black mb-4">Collections:</h3>

                        {causeState?.map(c =>
                            <div className="flex flex-col gap-2">
                                {/* content info */}
                                <div className="flex justify-between">
                                    <p className="text-[#273240] font-medium">{c.causeTitle}</p>
                                    <p className="text-[#273240] font-medium">Rs. {c.collectedDonation}</p>
                                </div>
                                {/* loading bar */}
                                <Progress value={( c.collectedDonation / bankAmountState )* 100} className="w-full h-1"></Progress>
                            </div>
                        )}

                        <div className="flex justify-between items-center font-mono text-xl font-black">
                            <span className="font-medium opacity-75">Total Donations: </span>
                            {bankAmountState == 0 ? <ThreeDots
                                visible={true}
                                height={20}
                                width={40}
                                color="#0369a1"
                                ariaLabel="please wait" />
                                :
                                <span>{bankAmountState}</span>}
                        </div>
                    </div>

                </div>
            </>
    )
}
