import React from 'react';
import Dialog from "@/shared/component/Dialog.tsx";
import {Case} from "@/models/DTOs/CasesResponseDto.ts";

interface ShowSingleCase extends Case {
    children: React.ReactNode;
}

export default function ShowSingleCase({
                                           caseId,
                                           title,
                                           description,
                                           createdDate,
                                           verifiedStatus,
                                           causeName,
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
                              clipRule="evenodd"/>
                    </svg>
                </div>}
                TriggerNode={
                    children
                }
            >
                {/* CONTENT AND THE DESCRIPTION GOES HERE*/}
                <div className={`w-full h-full flex flex-col gap-4 text-slate-900 h-[80vh]`}>
                    <div className={`flex gap-4`}>
                        <span className={`text-lg font-medium`}>Title: {title}</span>
                    </div>
                    <div className={`flex gap-4`}>
                        <span className={`text-lg font-medium`}>Cause: {causeName.replace(/_/g, ' ')}</span>
                    </div>
                    <div className={`flex`}>
                        <span
                            className={"min-w-[150px] text-sm"}><strong>Created at:</strong> &nbsp;&nbsp;&nbsp;{createdDate}</span>
                    </div>
                    <div>
                        <span
                            className={`text-base font-bold text-slate-900`}
                        >Description: </span>
                    </div>
                    <div className={`flex`}>
                        <textarea
                            rows={10}
                            cols={50}
                            disabled={true}
                            value={description}
                            className={`px-4 py-2 text-base font-semibold font-mono bg-slate-100 border-slate-400 hover:border-blue-600 
                                    border-2 rounded-lg w-full`}
                            style={{transition: 'border-color 0.2s'}}
                        >
                        </textarea>
                    </div>

                    <div className={`flex gap-4 items-center`}>
                        <span className={`text-base font-bold`}>Files Uploaded: </span>
                        <input className={`px-4 py-2 outline-none rounded-lg bg-slate-100 border-2 border-slate-400`}
                               type={'file'} disabled={true}/>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
