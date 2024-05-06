import useCaseTransactionService from "@/customHooks/useCaseTransactionService";
import { ICaseTransactionResponse } from "@/models/DTOs/CaseTransactionResponseDto";
import Spinner from "@/shared/component/Spinner";
import { useEffect, useState } from "react";

export function Dashboard() {
    const [transactions, setTransactions] = useState<ICaseTransactionResponse>([]);

    const [getAllCaseTransactions] = useCaseTransactionService();

    useEffect(() => {
        getAllCaseTransactions(setTransactions, 'donation-spinner');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {/* Container */}
            <div className="h-full w-full flex flex-col gap-8 px-4 py-4">

                {/* Donation Received */}
                <div className="h-auto">
                    <span className="text-3xl font-medium">Donation Received</span>

                    {/* Table goes here */}
                    <div className="overflow-scroll h-[88vh] w-full relative">
                        <Spinner 
                            id="donation-spinner"
                            BgClass="bg-transparent">
                        </Spinner>
                        {/* Date goes here */}
                        <div className="grid grid-cols-5 w-full py-2 pl-4 border-b border-slate-300">
                            {/* <span className="font-medium text-base opacity-75">Monday 24th March, 2024</span> */}
                            <span>#id</span>
                            <span className="col-span-2">Donor name</span>
                            <span>#Case Id</span>
                            <span className="w-full text-end pr-4">Amount</span>
                        </div>

                        {/* contents container */}
                        <div className="flex flex-col gap-x-4 w-full py-2 relative">
                            
                            {/* single content container */}
                            {transactions.map(t => 
                                <div className="grid hover:bg-slate-100 py-2 pl-4 grid-cols-5 gap-4 w-full">

                                    <div className="w-full">
                                        <span>#{t.caseTransactionId}</span>
                                    </div>
                                    
                                    <div className="col-span-2 flex gap-3 items-center">
                                        <div className="flex flex-col">
                                            <span className="text-base text-[#273240] font-medium">{t.donorFirstName} {t.donorLastName}</span>
                                            {/* date goes here */}
                                            <span className="text-sm opacity-40">{t.transacntionLogDate}</span>
                                        </div>
                                    </div>

                                    <div className="text-base text-[#273240] font-medium">
                                        {t.caseId}
                                    </div>

                                    <span className="text-end text-base text-[#273240] font-medium pr-4">{t.transactionAmount} Rs</span>
                                </div>
                            )}


                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}
