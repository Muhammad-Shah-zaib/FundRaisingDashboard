import {
    Dialog as DialogShadCn,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import React from 'react';
import { ThreeDots } from "react-loader-spinner";

interface IDialogProps {
    TriggerNode: React.ReactNode;
    children: React.ReactNode;
    title: React.ReactNode;
    titleClass?: string
}

export default function Dialog({ children, TriggerNode, title, titleClass }: IDialogProps): JSX.Element {
    return (
        <>
            <DialogShadCn>
                <DialogTrigger className={`w-full`}>
                    {TriggerNode}
                </DialogTrigger>

                <DialogContent>
                    {/* OVERLAY */}
                    <div className={`hidden absolute inset-0`} id={`dialog-spinner`}>
                        <div className=" cursor-default absolute inset-0 w-full h-full bg-black opacity-40 z-100">
                        </div>

                        {/* opactiy */}
                        <div className="absolute inset-[45%] text-lg z-100">
                            <ThreeDots
                                visible={true}
                                height={40}
                                width={40}
                                color="#0369a1"
                                ariaLabel="please wait"
                            />
                        </div>
                    </div>
                    <DialogHeader>
                        <DialogTitle className={titleClass}> {title} </DialogTitle>
                        <DialogDescription>
                            {children}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </DialogShadCn>
        </>
    )
}