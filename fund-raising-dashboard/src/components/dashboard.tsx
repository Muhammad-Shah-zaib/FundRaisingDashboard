import useCaseTransactionService from "@/customHooks/useCaseTransactionService";
import { ICaseTransactionResponse } from "@/models/DTOs/CaseTransactionResponseDto";
import Dialog from "@/shared/component/Dialog";
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
                                <Dialog
                                    title={`Transaction Details #${t.caseTransactionId}`}
                                    TriggerNode={
                                        <div className="grid hover:bg-slate-100 py-2 pl-4 grid-cols-5 gap-4 w-full">

                                            <div className="w-full text-start">
                                                <span>#{t.caseTransactionId}</span>
                                            </div>

                                            <div className="col-span-2 flex gap-3 items-center text-start">
                                                <div className="flex flex-col">
                                                    <span className="text-base text-[#273240] font-medium">{t.donorFirstName} {t.donorLastName}</span>
                                                    {/* date goes here */}
                                                    <span className="text-sm opacity-40">{t.transacntionLogDate}</span>
                                                </div>
                                            </div>

                                            <div className="text-base text-[#273240] font-medium text-start">
                                                {t.caseId}
                                            </div>

                                            <span className="text-end text-base text-[#273240] font-medium pr-4">{t.transactionAmount} Rs</span>
                                        </div>
                                    }
                                >
                                    <div className="h-[70vh] w-full flex flex-col gap-2">
                                        {/* TRANSACTION AMOUNT */}
                                        <div className="grid grid-cols-3 items-center text-base text-slate-900">
                                            <span className="text-lg font-medium">Amount: </span>
                                            <input disabled={true} className="col-span-2 outline-none rounded-lg bg-slate-50 px-4 py-1 w-full border-2 border-slate-400 hover:border-blue-700 transition-all" value={t.transactionAmount.toString() + "/-"} />
                                        </div>
                                        {/* TRANSACTION LOG */}
                                        <div className="grid grid-cols-3 items-center text-base text-slate-900 gap-1">
                                            <span className="text-lg font-medium">Timestamp: </span>
                                            <input disabled={true} className="outline-none rounded-lg bg-slate-50 px-4 py-1 w-full border-2 border-slate-400 hover:border-blue-700 transition-all" value={t.transacntionLogDate} />
                                            <input disabled={true} className="outline-none rounded-lg bg-slate-50 px-4 py-1 w-full border-2 border-slate-400 hover:border-blue-700 transition-all" value={t.transactionLogTime.split('.')[0]} />
                                        </div>

                                        {/* CASE TITLE AND #ID */}
                                        <div className="w-full py-2 flex justify-center text-slate-900 text-xl font-medium border-t border-slate-400">
                                            <span>Case Details</span>
                                        </div>
                                        <div className="grid grid-cols-3 items-center text-base text-slate-900 gap-1">
                                            <span className="text-lg font-medium">Case ID</span>
                                            <input disabled={true} className="col-span-2 outline-none rounded-lg bg-slate-50 px-4 py-1 w-full border-2 border-slate-400 hover:border-blue-700 transition-all font-mono font-black text-lg" value={t.caseId} />
                                        </div>
                                        <div className="grid grid-cols-3 items-center text-base text-slate-900 gap-1">
                                            <span className="text-lg font-medium">Case Title</span>
                                            <input disabled={true} className="col-span-2 outline-none rounded-lg bg-slate-50 px-4 py-1 w-full border-2 border-slate-400 hover:border-blue-700 transition-all font-mono font-black text-lg" value={t.caseTitle} />
                                        </div>

                                        {/* DONOR DETAILS */}
                                        <div className="w-full py-2 flex justify-center text-slate-900 text-xl font-medium border-t border-slate-400">
                                            <span>Donor Details</span>
                                        </div>
                                        <div className="grid grid-cols-3 items-center text-base text-slate-900 gap-1">
                                            <span className="text-lg font-medium">Donor CNIC</span>
                                            <input disabled={true} className="col-span-2 outline-none rounded-lg bg-slate-50 px-4 py-1 w-full border-2 border-slate-400 hover:border-blue-700 transition-all font-mono font-black text-lg" value={t.donorCnic} />
                                        </div>
                                        <div className="grid grid-cols-3 items-center text-base text-slate-900 gap-1">
                                            <span className="text-lg font-medium">Firstname: </span>
                                            <input disabled={true} className="col-span-2 outline-none rounded-lg bg-slate-50 px-4 py-1 w-full border-2 border-slate-400 hover:border-blue-700 transition-all font-mono font-black text-lg" value={t.donorFirstName} />
                                        </div>
                                        <div className="grid grid-cols-3 items-center text-base text-slate-900 gap-1">
                                            <span className="text-lg font-medium">Lastname: </span>
                                            <input disabled={true} className="col-span-2 outline-none rounded-lg bg-slate-50 px-4 py-1 w-full border-2 border-slate-400 hover:border-blue-700 transition-all font-mono font-black text-lg" value={t.donorLastName} />
                                        </div>
                                    </div>
                                </Dialog>
                            )}


                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}
