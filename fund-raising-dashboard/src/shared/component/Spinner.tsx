import { Oval } from "react-loader-spinner";

/*
* This component is used to show the spinner 
* on the screen

* you can use it when fetching 
* data or making asynchronous calls

* To use this you have to make a parent div
* with relative positive position and it
* this Spinner will produce a spinner
* to the center of it and a bg overlay
* over the whole parent div

? @param id: string
* the id can be used to start and stop the spinner 
* these utility functions are already provided in the 
* utils Folder > SpinnerFn.ts

? @param height: number
? @param width: number
! @Default height, width: 40
* You can specify the height and width value of  
* the spinner or you can use the default values
* of 40 fro both
*/
interface SpinnerProps {
    id: string;
    height?: number;
    width?: number;
    BgClass?: string;
}
function Spinner({ id, height, width, BgClass = "bg-black" }: SpinnerProps) {
    return (
        <div id={id} className={`hidden absolute inset-0 w-full h-full z-20 opacity-60 ${BgClass}`}>
            <div className={`h-full w-full flex items-center justify-center absolute inset-0  z-30`}>
                <Oval height={height ? height : 40} width={width ? width : 40} visible={true}></Oval>
            </div>
        </div>
    )
}

export default Spinner