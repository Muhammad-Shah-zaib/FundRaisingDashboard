import { IUserResponseDto } from "@/models/DTOs/IUserResponseDto"

interface IViewDetailsProps {
    user: IUserResponseDto
}
export default function ViewUserDetails({ user }: IViewDetailsProps) {
    return (
        <section className="py-4 flex flex-col gap-4 font-black text-lg font-mono text-slate-800">
            {/* FIRSTNAME */}
            <div className="grid grid-cols-8 items-center">
                <label htmlFor="firstname" className="col-span-2">Firstname: </label>
                <input id="firstname" value={user.firstName} type="text" disabled={true} className="px-4 py-0.5 col-span-6 border-2 rounded-lg border-slate-400 hover:border-blue-700 transition-all duration-300 ease-in" />
            </div>
            {/* LASTNAME */}
            <div className="grid grid-cols-8 items-center">
                <label htmlFor="lastname" className="col-span-2">Lastname: </label>
                <input id="lastname" value={user.lastName} type="text" disabled={true} className="px-4 py-0.5 col-span-6 border-2 rounded-lg border-slate-400 hover:border-blue-700 transition-all duration-300 ease-in" />
            </div>
            {/* EMAIL */}
            <div className="grid grid-cols-8 items-center">
                <label htmlFor="email" className="col-span-2">Email: </label>
                <input id="email" value={user.email} type="text" disabled={true} className="px-4 py-0.5 col-span-6 border-2 rounded-lg border-slate-400 hover:border-blue-700 transition-all duration-300 ease-in" />
            </div>
            {/* User Type */}
            <div className="grid grid-cols-8 items-center border-b-2 border-blue-400 pb-4">
                <label htmlFor="userType" className="col-span-2">User Type: </label>
                <input id="userType" value={user.userType} type="text" disabled={true} className="px-4 py-0.5 col-span-6 border-2 rounded-lg border-slate-400 hover:border-blue-700 transition-all duration-300 ease-in" />
            </div>
            {/* TIMESTAMPS */}
            {/* Registration TIMESTAMP */}
            <div className="flex justify-center">
                <span>Timestamps</span>
            </div>
            <div className="grid grid-cols-9 items-center gap-1">
                <label htmlFor="registrationTS" className="col-span-3">Registration: </label>
                {/* DATE */}
                <input id="registrationTS" value={new Date(user.userAuthLogsList.filter(l => l.eventType.toLowerCase() === 'registration')[0].eventTimestamp).toISOString().split('T')[0]} type="text" disabled={true} className="text-lg px-4 py-0.5 col-span-3 border-2 rounded-lg border-slate-400 hover:border-blue-700 transition-all duration-300 ease-in" />
                {/* TIME */}
                <input id="registrationTS" value={new Date(user.userAuthLogsList.filter(l => l.eventType.toLowerCase() === 'registration')[0].eventTimestamp).toISOString().split('T')[1]} type="text" disabled={true} className="px-4 py-0.5 col-span-3 border-2 rounded-lg border-slate-400 hover:border-blue-700 transition-all duration-300 ease-in" />
            </div>

            <div className="grid grid-cols-9 items-center gap-1">
                <label htmlFor="lastLoginTS" className="col-span-3">Last Login: </label>
                {
                    user.userAuthLogsList.filter(l => l.eventType.toLowerCase() === 'last_login').length > 0 ?
                        <>
                            <input
                                type="text"
                                value={new Date(user.userAuthLogsList.filter(l => l.eventType.toLowerCase() === 'last_login')[0].eventTimestamp).toISOString().split('T')[0]}
                                className="col-span-3 border-2 rounded-lg border-slate-400 transition-all duration-300 easi-in hover:border-blue-700 px-4 py-0.5"
                            />
                            <input
                                type="text"
                                value={new Date(user.userAuthLogsList.filter(l => l.eventType.toLowerCase() === 'last_login')[0].eventTimestamp).toISOString().split('T')[1]}
                                className="col-span-3 border-2 rounded-lg border-slate-400 transition-all duration-300 easi-in hover:border-blue-700 px-4 py-0.5"
                            />
                        </>
                        :
                        <input
                            type="text"
                            value="Haven't logged in yet"
                            disabled={true}
                            className="col-span-5 border-2 rounded-lg border-slate-400 transition-all duration-300 easi-in hover:border-blue-700 text-red-700 px-4 py-0.5 text-center"
                        />
                }

            </div>

            <div className="grid grid-cols-9 items-center gap-1">
                <label htmlFor="" className="col-span-3">last_updated: </label>
                {
                    user.userAuthLogsList.filter(l => l.eventType.toLowerCase() === 'last_update').length > 0 ?
                        <>
                            <input
                                type="text"
                                value={new Date(user.userAuthLogsList.filter(l => l.eventType.toLowerCase() === 'last_update')[0].eventTimestamp).toISOString().split("T")[0]}
                                className="col-span-3 border-2 rounded-lg border-slate-400 transition-all duration-300 easi-in hover:border-blue-700 px-4 py-0.5"
                            />
                            <input
                                type="text"
                                value={new Date(user.userAuthLogsList.filter(l => l.eventType.toLowerCase() === 'last_update')[0].eventTimestamp).toISOString().split('T')[1]}
                                className="col-span-3 border-2 rounded-lg border-slate-400 transition-all duration-300 easi-in hover:border-blue-700 px-4 py-0.5"
                            />
                        </>
                        :
                        <input
                            type="text"
                            value="Not Updated Yet"
                            disabled={true}
                            className="col-span-5 border-2 rounded-lg border-slate-400 transition-all duration-300 easi-in hover:border-blue-700 text-red-700 px-4 py-0.5 text-center"
                        />
                }
            </div>
        </section>
    )
} 
