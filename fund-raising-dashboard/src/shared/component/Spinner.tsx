import { Oval } from "react-loader-spinner";

/*
* This component is used to show the spinner 
* on the screen 

* you can use it when fetching 
* data or making asynchroneous calls

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
}
function Spinner({ id, height, width }: SpinnerProps) {
    return (
        <div id={id} className='hidden absolute inset-0 w-full h-full z-20 bg-black opacity-60'>
            <div className={`h-[${height ? height : '40'}px] w-[${width ? width : '40'}px] absolute inset-[50%] translate-x-[-50%] translate-y-[-50%] z-30`}>
                <Oval height={height ? height : 40} width={width ? width : 40} visible={true}></Oval>
            </div>
        </div>
    )
}

export default Spinner