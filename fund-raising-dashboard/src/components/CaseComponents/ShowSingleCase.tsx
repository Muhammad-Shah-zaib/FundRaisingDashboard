import React from 'react';
import Dialog from "@/shared/component/Dialog.tsx";
import { Case } from "@/models/DTOs/CasesResponseDto.ts";

interface ShowSingleCase extends Case {
    children: React.ReactNode;
}

export default function ShowSingleCase({
    caseId,
    title,
    description,
    caseLogs,
    verifiedStatus,
    causeName,
    requiredDonations,
    remainingDonations,
    collectedDonations,
    children
}: ShowSingleCase): JSX.Element {
    return (
        <>
            <Dialog
                title={<div className={`flex gap-4 items-center`}>
                    Case# {caseId}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        className={`w-6 h-6 ${verifiedStatus ? 'text-green-400' : 'text-gray-400'}`}>
                        <path fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd" />
                    </svg>
                </div>}
                TriggerNode={
                    children
                }
            >
                {/* CONTENT AND THE DESCRIPTION GOES HERE*/}
                <div className={`w-full flex flex-col gap-4 text-slate-900 h-[80vh] overflow-auto`}>
                    <div className={`flex gap-4`}>
                        <span className={`text-lg font-medium`}>Title: {title}</span>
                    </div>
                    <div className={`flex gap-4`}>
                        <span className={`text-lg font-medium`}>Cause: {causeName.replace(/_/g, ' ')}</span>
                    </div>
                    
                    <div>
                        <span
                            className={`text-base font-bold text-slate-900`}
                        >Description: </span>
                    </div>
                    <div className={`flex border-b border-slate-400 pb-2`}>
                        <textarea
                            rows={10}
                            cols={50}
                            disabled={true}
                            value={description}
                            className={`px-4 py-2 text-base font-semibold font-mono bg-slate-100 border-slate-400 hover:border-blue-600 
                                    border-2 rounded-lg w-full`}
                            style={{ transition: 'border-color 0.2s' }}
                        >
                        </textarea>
                    </div>
                    {/* DONATIONS */}
                    <div className='flex justify-center'>
                        <span className='text-lg font-black font-mono text-slate-800'>Donations</span>
                    </div>

                    <div className='grid grid-cols-3 items-center gap-2'>
                        <label className='text-sm'><strong>Required Amount</strong></label>
                        <input type="text" disabled={true} value={requiredDonations} className='col-span-2 px-4 py-1 text-center border-2 border-slate-400 hover:border-blue-700 transition-all duration-300 rounded-lg'  />
                    </div>
                    <div className='grid grid-cols-3 items-center gap-2'>
                        <label className='text-sm'><strong>Collected Amount</strong></label>
                        <input type="text" disabled={true} value={collectedDonations} className='col-span-2 px-4 py-1 text-center border-2 border-slate-400 hover:border-blue-700 transition-all duration-300 rounded-lg'  />
                    </div>
                    <div className='grid grid-cols-3 items-center gap-2 pb-4 border-b-2 border-slate-400'>
                        <label className='text-sm'><strong>Remaining Amount</strong></label>
                        <input type="text" disabled={true} value={remainingDonations} className='col-span-2 px-4 py-1 text-center border-2 border-slate-400 hover:border-blue-700 transition-all duration-300 rounded-lg'  />
                    </div>
                    {/* TIMESTAMPS */}
                    <div className='flex justify-center'>
                        <span className='text-lg font-black font-mono text-slate-800'>TimeStamps</span>
                    </div>

                    {/* created date time stamp */}
                    <div className={`grid grid-cols-5 items-center gap-1`}>
                        <label
                            className={"min-w-[150px] text-sm"}><strong>Created at:</strong>
                        </label>
                        <input disabled={true} className='border-2 cursor-default border-slate-400 px-2 py-1.5 rounded-lg hover:border-blue-700 transition-all duration-300 w-full col-span-2 text-center font-bold' type="text" value={caseLogs.filter(l => l.logType === 'CREATED_DATE').map(l => l.logDate)[0]} />
                        <input disabled={true} className='border-2 cursor-default border-slate-400 px-2 py-1.5 rounded-lg hover:border-blue-700 transition-all duration-300 w-full col-span-2 text-center font-bold' type="text" value={caseLogs.filter(l => l.logType === 'CREATED_DATE').map(l => l.logTime)[0]} />
                    </div>
                    {/* updated date time stamp */}
                    <div className={`grid grid-cols-5 items-center gap-1`}>
                        <label
                            className={"min-w-[150px] text-sm"}><strong>Updated at:</strong>
                        </label>
                        {
                            caseLogs.filter(l => l.logType === 'UPDATED_DATE').map(l => l.logDate).length > 0 ?
                            <>
                                <input disabled={true}  className='border-2 cursor-default border-slate-400 px-2 py-1.5 rounded-lg hover:border-blue-700 transition-all duration-300 w-full col-span-2 text-center font-bold' type="text" value={caseLogs.filter(l => l.logType === 'UPDATED_DATE').map(l => l.logDate)[0]} />
                                <input disabled={true}  className='border-2 cursor-default border-slate-400 px-2 py-1.5 rounded-lg hover:border-blue-700 transition-all duration-300 w-full col-span-2 text-center font-bold' type="text" value={caseLogs.filter(l => l.logType === 'UPDATED_DATE').map(l => l.logTime)[0]} />
                            </>
                            :
                            <input disabled={true}  className='col-span-4 border-2 cursor-default border-slate-400 px-2 py-1.5 rounded-lg hover:border-blue-700 transition-all duration-300 w-full text-center font-bold font-mono text-red-500' type="text" value={"Not Updated Yet"} />
                        }
                    </div>
                    {/* RESOLVE TIMESTAMP */}
                    <div className={`grid grid-cols-5 items-center gap-1 border-b border-slate-400 pb-2`}>
                        <label
                            className={"min-w-[150px] text-sm"}><strong>Resolved at:</strong>
                        </label>
                        {
                            caseLogs.filter(l => l.logType === 'RESOLVED_DATE').map(l => l.logDate).length > 0 ?
                            <>
                                <input disabled={true}  className='border-2 cursor-default border-slate-400 px-2 py-1.5 rounded-lg hover:border-blue-700 transition-all duration-300 w-full col-span-2 text-center font-bold' type="text" value={caseLogs.filter(l => l.logType === 'RESOLVED_DATE').map(l => l.logDate)[0]} />
                                <input disabled={true}  className='border-2 cursor-default border-slate-400 px-2 py-1.5 rounded-lg hover:border-blue-700 transition-all duration-300 w-full col-span-2 text-center font-bold' type="text" value={caseLogs.filter(l => l.logType === 'RESOLVED_DATE').map(l => l.logTime)[0]} />
                            </>
                            :
                            <input disabled={true}  className='col-span-4 border-2 cursor-default border-slate-400 px-2 py-1.5 rounded-lg hover:border-blue-700 transition-all duration-300 w-full text-center font-bold font-mono text-red-500' type="text" value={"Not Resolved Yet"} />
                        }
                    </div>
                    <div className='flex justify-center'>
                        <span className='font-mono font-black text-lg text-slate-800'>Files</span>
                    </div>

                    <div className={`flex gap-4 items-center`}>
                        <span className={`text-base font-bold`}>Files Uploaded: </span>
                        <input className={`px-4 py-2 outline-none rounded-lg bg-slate-100 border-2 border-slate-400`}
                            type={'file'} disabled={true} />
                    </div>
                </div>
            </Dialog>
        </>
    )
}
