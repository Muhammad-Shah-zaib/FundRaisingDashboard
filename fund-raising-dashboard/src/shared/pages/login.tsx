import useLogin from '@/customHooks/useLogin';
import './login.css';
import { Oval } from 'react-loader-spinner';
import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginRequestDto } from '@/models/DTOs/ILoginRequestDto';

// defining the interface for the login Form


function Login() {
    // Form hooks
    const {register, handleSubmit, formState: {isSubmitting, errors}, setError} = useForm<ILoginRequestDto>();


    // Custom Hooks
    const login = useLogin();



    // FUNCTIONS

    // Function to submit the form
    const onSubmit: SubmitHandler<ILoginRequestDto> = async (data) => {
        try{
            startSpinner('login-spinner');
            // getting the request ready from the custom hook
            const req = await login(data);

            // req is observable so we will subscribe it to get the response
            req.subscribe({
            next: () => stopSpinner('login-spinner'),
            error: (err) => {
                // cathcing unauthorized Error
                if (err.status === 401) {
                    setError('root', {
                        message: "Invalid Email or Password"
                    })
                }
                else {
                    setError('root', {
                        message: "Something went wrong, Please try again later."
                    })
                }
                console.error(err);
                stopSpinner('login-spinner');
            }
        })
        }catch (err) {
            console.error(err);
            setError('root', {
                message: "Something went wrong, Please try again later."
            })
        }
        
    }


    return (
        // Container for my div
        // Dividing the screen into two divs 
        <div className="w-[100vw] h-[100vh] flex">

            {/* Image And LOGO container */}
            <div className="w-full bg-primary flex justify-center items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={400}
                    height={500}
                    fill="none"
                >
                    <path fill="url(#a)" d="M0 0h500v500H0z" />
                    <defs>
                        <pattern
                            id="a"
                            width={1}
                            height={1}
                            patternContentUnits="objectBoundingBox"
                        >
                            <use xlinkHref="#b" transform="matrix(.00333 0 0 .00333 -.157 0)" />
                        </pattern>
                        <image
                            xlinkHref="data:image/png;base64,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"
                            id="b"
                            width={300}
                            height={300}
                        />
                    </defs>
                </svg>
            </div>

            {/* Login Form container */}
            <div className="relative w-full flex px-20 justify-center items-center">

                {/* LOADING SPINNER */}
                <div id='login-spinner' className='hidden absolute w-full h-full z-20 bg-black opacity-60'>
                    <div className='h-[40px] w-[40px] absolute inset-[50%] translate-x-[-50%] translate-y-[-50%] z-30'>
                        <Oval height={40} width={40} visible={true}></Oval>
                    </div>
                </div>


                {/* HEADER CONTENT */}
                <div className='flex flex-col gap-4 w-[400px] '>
                    {/* VALIDATION ERRROS */}
                    {/* CUSTOM ROOT ERRORS */}
                    {errors.root && <div className='text-sm text-red-700 select-none font-bold bg-red-100 px-4 py-2 rounded-md'>{errors.root.message}</div>}
                    {/* /HEADER */}
                    <header className='flex flex-col gap-2'>
                        <h1 className='text-primary text-2xl font-bold'>Account Login</h1>
                        <p className='text-[#8692A6] text-sm'>If you are already a member you can login with your email address and password.?</p>
                    </header>

                    {/* FORM */}
                    <body>
                        <form onSubmit={handleSubmit(onSubmit)} className='relative flex flex-col gap-4'>
                            {/* email and password */}
                            <span className='flex flex-col gap-2'>
                                <label htmlFor="email" className='font-medium text-[#696F79]'>Email: </label>
                                <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "Invalid Email Address"
                                    }
                                })}
                                className='input-primary'
                                id='email'
                                type="text"
                                placeholder='example@gmail.com' 
                                />
                                {/* ERRORs */}
                                {errors.email && <span className='text-sm text-red-700 select-none font-bold bg-red-100 px-4 py-2 rounded-md'>{errors.email.message}</span>}
                            </span>

                            <span className='flex flex-col gap-2'>
                                <label htmlFor="password" className='font-medium text-[#696F79]'>Password</label>
                                <input
                                // We are logging in so no need to set pattern validations or minlength for password
                                {...register("password", {
                                    required: "Password is required",
                                })}
                                className='input-primary'
                                id='password'
                                type="password"
                                placeholder='*********' 
                                />
                                {/* ERRORs */}
                                {errors.password && <span className='text-sm text-red-700 select-none font-bold bg-red-100 px-4 py-2 rounded-md'>{errors.password.message}</span>}
                            </span>

                            {/* Remember me check box */}
                            <span className='flex gap-4 p-2 items-center'>
                                <input className='' type="checkbox" id='Remember-Me' name='RememberMe' />
                                <label htmlFor="Remember-Me" className='cursor-pointer select-none text-[#696F79]'>Remember Me</label>
                            </span>

                            {/* submit button */}
                            <button disabled={isSubmitting} type='submit' className='form-btn-primary'>{isSubmitting ? 'PLease wait': 'Login'}</button>
                        </form>

                    </body>

                    {/* FOOTER */}
                    <footer>
                        {/* Asking to Register */}
                        <p className='text-center select-none pointer-events-none text-[#696F79]'>Don't Have an account ? </p>
                    </footer>
                </div>
            </div>

        </div >
    )
}


function startSpinner( id: string){
    document.getElementById(id)?.classList.remove('hidden');
}

function stopSpinner( id: string){
    document.getElementById(id)?.classList.add('hidden');
}

export default Login;