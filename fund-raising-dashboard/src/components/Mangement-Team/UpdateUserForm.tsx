import useUserService from "@/customHooks/useUserService";
import { IUserResponseDto, IUserResponseDtoList } from "@/models/DTOs/IUserResponseDto"
import { IUserUpdateRequestDto } from "@/models/DTOs/UpdateUserDto";
import { SubmitHandler, useForm } from "react-hook-form";

interface IUpdateUserFormProps {
    user: IUserResponseDto;
    setUserState: (userList: IUserResponseDtoList) => void;
}


function UpdateUserForm({ setUserState, user }: IUpdateUserFormProps) {
    const UpdateUser = useUserService()[3];
    const { register, setValue, formState: { errors }, handleSubmit } = useForm<IUserUpdateRequestDto>({
        defaultValues: {
            userId: user.userId,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            userType: user.userType,
            cms: 0,
            phoneNo: ''
        }
    });

    const handleOnSubmit: SubmitHandler<IUserUpdateRequestDto> = (data) => {
        console.log(data);
        UpdateUser(setUserState, user.userId, data, 'management-team-table-spinner', 'dialog-spinner');
    }
    return (
        <form className="flex flex-col gap-4 text-lg font-mono font-black text-slate-800">
            {/* USER ID */}
            <div className="grid grid-cols-8  gap-4 items-center">
                <label htmlFor={`user-id`} className="col-span-2">user Id#</label>
                <input id="user-id" type="text" disabled={true} value={user.userId} className="col-span-5 border-2 border-slate-400 rounded-lg px-4 py-1 cursor-not-allowed" />
            </div>

            {/* FIRST-NAME */}
            <div className="grid grid-cols-8 items-center">
                <label htmlFor="firstname" className="col-span-2">Firstname: </label>
                <div className="col-span-5 flex flex-col gap-2">
                    <input {...register("firstName", { required: "Firstname is required" })} id="firstname" type="text" className="w-full border-2 border-slate-400 rounded-lg px-4 py-1 bg-slate-100 hover:border-blue-700 transition-all duration-300 ease-in outline-blue-700" />
                </div>
                {errors.firstName && <span className={`font-medium font-sans col-span-5 col-start-3 w-full px-4 py-1 text-red-500 text-sm 
                `}>- {errors.firstName?.message}</span>}
            </div>

            {/* LAST-NAME */}
            <div className="grid grid-cols-8 items-center">
                <label htmlFor="lastname" className="col-span-2">Lastname: </label>
                <input {...register("lastName")} id="lastname" type="text" className="col-span-5 border-2 border-slate-400 rounded-lg px-4 py-1 bg-slate-100 hover:border-blue-700 transition-all duration-300 ease-in outline-blue-700" />
                {errors.lastName && <span className={`col-span-5 col-start-3 w-full px-4 py-1 text-red-500 text-sm 
                `}>- {errors.lastName?.message}</span>}

            </div>

            {/* LAST-NAME */}
            <div className="grid grid-cols-8 items-center">
                <label htmlFor="email" className="col-span-2">Email: </label>
                <input {...register("email", {
                    required: "Email is required field",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid Email Address"
                    }
                })} id="email" type="text" className="col-span-5 border-2 border-slate-400 rounded-lg px-4 py-1 bg-slate-100 hover:border-blue-700 transition-all duration-300 ease-in outline-blue-700" />
                {errors.email && <span className={`font-medium font-sans col-span-5 col-start-3 w-full px-4 py-1 text-red-500 text-sm 
                `}>- {errors.email?.message}</span>}
            </div>
            {/* CMS */}
                    <div className="grid grid-cols-8 items-center">
                        <span className="col-span-2">
                            <label htmlFor="cms">
                                CMS: <strong
                                    className="text-red-500">*</strong></label>
                        </span>
                        <input
                            {...register("cms", {
                                required: "CMS-(Registration ID) is required",
                                minLength: {
                                    value: 6,
                                    message: "Cms must be of 6 length"
                                },
                                maxLength: {
                                    value: 6,
                                    message: "Cms must have 6 digits"
                                }
                            })}
                            id="cms"
                            type="number"
                            className="col-span-5 border-2 border-slate-400 rounded-lg px-4 py-1 bg-slate-100 hover:border-blue-700 transition-all duration-300 ease-in outline-blue-700"
                            placeholder="123456"
                        />
                        {/* Validation for Cms field */}
                        {errors.cms && <span
                            className="font-medium font-sans col-span-5 col-start-3 w-full px-4 py-1 text-red-500 text-sm">- {errors.cms.message}</span>}
                    </div>
                    {/* Phone No. */}
                    <div className="grid grid-cols-8 items-center">
                        <span className="col-span-2">
                            <label htmlFor="cms">
                                    Phone No: <strong className="text-red-500">*</strong>
                            </label>
                        </span>
                        <input
                            {...register("phoneNo", {
                                required: "Phone No. is required",
                                pattern: {
                                    value: /^\+923\d{9}$/,
                                    message: "Phone No. must start with +923 and must have 9 digits"
                                }
                            })}
                            id="phoneNo"
                            type="text"
                            className="col-span-5 border-2 border-slate-400 rounded-lg px-4 py-1 bg-slate-100 hover:border-blue-700 transition-all duration-300 ease-in outline-blue-700"
                            placeholder="+923*********"
                        />
                        {/* Validation for Phone Nno. field */}
                        {errors.phoneNo && <span
                            className="font-medium font-sans col-span-5 col-start-3 w-full px-4 py-1 text-red-500 text-sm">- {errors.phoneNo.message}</span>}
                    </div>
            {/* USER TYPE */}
            <div className="grid grid-cols-8 items-center">
                <label className="col-span-2 ">User Type: </label>
                <select {...register("userType")} onChange={(e) => setValue("userType", e.target.value)} id="user-type" className={`col-span-5 SELECT-ARROW w-full cursor-pointer py-1 px-4 border-2 rounded-lg border-slate-400 shadow-sm shadow-slate-400 outline-blue-700 transition-all duration-300 hover:border-blue-700`}>
                    <option value={`MODERATOR`}>Moderator</option>
                    <option value={`STAFF_MEMBER`}>Staff member</option>
                </select>
                {errors.userType && <span className={`font-medium font-sans col-span-5 col-start-3 w-full px-4 py-1 text-red-500 text-sm 
                `}>- {errors.userType?.message}</span>}

            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex justify-end">
                <button onClick={handleSubmit(handleOnSubmit)} type="submit" className="bg-slate-100 border-2 rounded-lg border-slate-400 hover:border-blue-700 outline-blue-700 transition-all duration-300 ease-in px-4 py-2">Update</button>
            </div>
        </form>
    )
}
// className="grid grid-cols-8 items-center"
export default UpdateUserForm