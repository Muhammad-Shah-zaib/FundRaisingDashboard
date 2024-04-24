import {
    Dialog as DialogShadCn,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import React from 'react';

interface IDialogProps {
    TriggerNode: React.ReactNode;
    children: React.ReactNode;
    title: React.ReactNode;
    titleClass?: string
}

export default function Dialog ({children, TriggerNode, title, titleClass}: IDialogProps): JSX.Element{
    return (
        <>
            <DialogShadCn>
                <DialogTrigger className={`w-full`}>
                    {TriggerNode}
                </DialogTrigger>

                <DialogContent>
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