import useLogin from '@/customHooks/useLogin';
import './login.css';
import { useForm, SubmitHandler } from "react-hook-form";
import { ILoginRequestDto } from '@/models/DTOs/ILoginRequestDto';
import { startSpinner, stopSpinner } from '@/utils/SpinnerFn';
import Spinner from '../component/Spinner';

// defining the interface for the login Form

function Login() {
    // Form hooks
    const { register, handleSubmit, formState: { isSubmitting, errors }, setError } = useForm<ILoginRequestDto>();


    // Custom Hooks
    const login = useLogin();



    // FUNCTIONS

    // Function to submit the form
    const onSubmit: SubmitHandler<ILoginRequestDto> = async (data) => {
        try {
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
        } catch (err) {
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
                <img className='max-w-[400px] max-h-[400px]' src="logo.jpg" />
            </div>

            {/* Login Form container */}
            <div className="relative w-full flex px-20 justify-center items-center">

                {/* LOADING SPINNER */}
                <Spinner id='login-spinner'></Spinner>


                {/* HEADER CONTENT */}
                <div className='flex flex-col gap-4 w-[400px] '>
                    {/* VALIDATION ERRROS */}
                    {/* CUSTOM ROOT ERRORS */}
                    {errors.root && <span className='text-sm text-red-700 select-none font-bold bg-red-100 px-4 py-2 rounded-md'>{errors.root.message}</span>}
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
                            <button disabled={isSubmitting} type='submit' className='form-btn-primary'>{isSubmitting ? 'PLease wait' : 'Login'}</button>
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




export default Login;
