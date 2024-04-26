import Sheet from "@/shared/component/Sheet";
import {SubmitHandler, useForm} from "react-hook-form";
import {startSpinner} from "@/utils/SpinnerFn.ts";
import Spinner from "@/shared/component/Spinner.tsx";
import useUserService from "@/customHooks/useUserService.tsx";
import {IRegistrationRequestDto} from "@/models/DTOs/RegistrationRequest.ts";
import {IUserResponseDtoList} from "@/models/DTOs/IUserResponseDto.ts";

interface INewUserFormProps {
    setUserStateFn: (userList: IUserResponseDtoList) => void
}
export default function NewUserForm ( {setUserStateFn}: INewUserFormProps){
    // custom Hooks
    const  RegisterUser = useUserService()[1];

    // Form Hooks
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<IRegistrationRequestDto>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            userType: "MODERATOR"
        }
    });

    // Function to handle the form submission
    const onSubmit: SubmitHandler<IRegistrationRequestDto> = async (data) => {
        startSpinner("MT-spinner");
        // we need to send the registration request
        console.log(data);
        RegisterUser(setUserStateFn,data, "MT-spinner");
    }
    const ResetForm: () => void = () => {
        reset();
    }
    return (

        <>
            <Sheet
                TriggerNode={
                    <div id="sheet"  onClick={() => ResetForm()}
                         className="w-full px-4 py-2 hover:bg-slate-200 transition-all duration-300 flex gap-3 shadow-md shadow-slate-400">
                        <div className="w-full py-2 flex items-center justify-between px-4">
                            <h1 className="cursor-pointer text-2xl font-bold text-primary">Add New User</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-6 h-6">
                                <path
                                    d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z"/>
                            </svg>

                        </div>
                    </div>
                }
                title={`Add User`}
                Spinner={<Spinner id='MT-spinner'></Spinner>}
            >
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 py-4">
                    {/* First Name */}
                    <div className="grid items-center gap-3 grid-cols-3">
                        <span><label htmlFor="firstname" className="text-base font-medium text-primary cursor-pointer">First Name: <strong
                            className="text-red-500">*</strong></label></span>
                        <input
                            {...register("firstName", {
                                required: "First Name is required"
                            })}
                            id="firstname"
                            type="text"
                            className="col-span-2 outline-none border-2 border-slate-400 rounded-lg text-primary px-4 py-1 font-medium"
                            placeholder="John"
                        />
                        {/* Validation for firstname field */}
                        {errors.firstName && <span
                            className="col-span-3 text-sm text-red-700 select-none font-bold bg-red-100 px-4 py-2 rounded-md">{errors.firstName.message}</span>}
                    </div>
                    {/* Last Name */}
                    <div className="grid items-center gap-3 grid-cols-3">
                        <span><label htmlFor="lastname" className="text-base font-medium text-primary cursor-pointer">Last Name: </label></span>
                        <input
                            {...register("lastName")}
                            id="lastname"
                            type="text"
                            className="col-span-2 outline-none border-2 border-slate-400 rounded-lg text-primary px-4 py-1 font-medium"
                            placeholder="Wick"
                        />
                    </div>
                    {/* Email */}
                    <div className="grid items-center gap-3 grid-cols-3">
                                    <span>
                                        <label htmlFor="email"
                                               className="text-base font-medium text-primary cursor-pointer">Email: <strong
                                            className="text-red-500">*</strong></label>
                                    </span>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid Email Address"
                                }
                            })}
                            id="email"
                            type="text"
                            className="col-span-2 outline-none border-2 border-slate-400 rounded-lg text-primary px-4 py-1 font-medium"
                            placeholder="example@gmail.com"
                        />
                        {/* Validation for email field */}
                        {errors.email && <span
                            className="col-span-3 text-sm text-red-700 select-none font-bold bg-red-100 px-4 py-2 rounded-md">{errors.email.message}</span>}
                    </div>
                    {/* Password */}
                    <div className="grid items-center gap-3 grid-cols-3">
                                    <span>
                                        <label htmlFor="password"
                                               className="text-base font-medium text-primary cursor-pointer">Password: <strong
                                            className="text-red-500">*</strong></label>
                                    </span>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters long"
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message: "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character"
                                }
                            })}
                            id="password"
                            type="password"
                            className="col-span-2 outline-none border-2 border-slate-400 rounded-lg text-primary px-4 py-1 font-medium"
                            placeholder="********"
                        />
                        {/* Validation for password field */}
                        {errors.password && <span
                            className="col-span-3 text-sm text-red-700 select-none font-bold bg-red-100 px-4 py-2 rounded-md">{errors.password.message}</span>}
                    </div>

                    <div className={`w-full`}>
                        <select {...register("userType")} className={`SELECT-ARROW w-full py-2 px-4 border-2 rounded-lg border-slate-400 shadow-sm shadow-slate-400 outline-blue-700 transition-all duration-300 hover:border-blue-700`}>
                            <option value={`MODERATOR`}>Moderator</option>
                            <option value={`STAFF_MEMBER`}>Staff member</option>
                        </select>
                    </div>

                    <div>
                    <button disabled={isSubmitting}
                                className="text-lg font-medium w-full text-center bg-slate-100 rounded-lg px-4 py-2 hover:bg-slate-300 transition-all duration-300 shadow-md shadow-slate-300">{isSubmitting ? 'Adding...' : 'Add user'}</button>
                    </div>
                </form>
            </Sheet>
        </>
    )
}