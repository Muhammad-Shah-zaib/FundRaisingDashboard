/*
* This is Reusable component for Sheet
* It uses ShadCn Sheet ui component
*
* You can provide title, description
* and even custom classes for your title
* and description, please notice that
* the ShadCn already has implemented some
* tailwind classes, but you can add
* your own custom classes on it too

*
* @param TriggerNode: your sheet will be triggered by clicking on this Node
* @param children: Children includes your Content Node (such as form etc...)
* @param Spinner: You can add your own Spinner that will appear at the middle of Sheet component
* @param title: Your own title or header string, It appears in the header of sheet
* @param description: Your own description for the sheet, It appears in the header of sheet
* @param titleClass: Your own custom classes for title
* @param descriptionClass: Your own custom classes for description
*/

import React from "react";
import {
    Sheet as ShadCnSheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";


interface ISheetProps {
    children: React.ReactNode;
    TriggerNode?: React.ReactNode;
    Spinner ?: React.ReactNode;
    title ?: string;
    description ?: string;
    titleClass ?: string;
    descriptionClass ?: string;
}

export default function Sheet ({TriggerNode, Spinner, title, titleClass, description, descriptionClass, children}: ISheetProps) {
    return (
        <div>
            <ShadCnSheet>
                <SheetTrigger>
                    {TriggerNode ? TriggerNode : <button>OPEN</button>}
                </SheetTrigger>

                <SheetContent>
                    {Spinner}
                    <SheetHeader>
                        {title ? <SheetTitle className={titleClass}>{title}</SheetTitle> : null}
                        {description ? <SheetDescription className={descriptionClass}>{description}</SheetDescription>: null}
                    </SheetHeader>

                    {children}
                </SheetContent>
            </ShadCnSheet>
        </div>
    )
}