import { startSpinner } from "@/utils/SpinnerFn.ts";
import { IUserResponseDtoList } from "@/models/DTOs/IUserResponseDto.ts";
import { useLayoutEffect, useState } from "react";
import useUserService from "@/customHooks/useUserService.tsx";
import ManagementTeamTable from "@/components/Mangement-Team/mangementTeamTable.tsx";
import NewUserForm from "@/components/Mangement-Team/NewUserForm.tsx";




export default function ManagementTeam() {
    // Instantiations
    const [GetAllUsers] = useUserService();



    const [userListState, setUsersState] = useState<IUserResponseDtoList>([]);

    useLayoutEffect(() => {
        startSpinner("management-team-table-spinner");
        GetAllUsers(setUsersState, "management-team-table-spinner");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <>
            {/* container */}
            <div className="max-w-[1280px] h-full px-4 py-1 flex flex-col gap-4">
                {/* Date goes here */}
                <span className={`text-sm font-mono font-bold opacity-70`}>2024-03-24</span>
                <span className="text-sm text-primary opacity-75"></span>

                {/* Header for verified and unverified Cases */}
                <div className="grid gap-4 grid-cols-2">
                    <div className="w-full px-4 py-2 bg-slate-50 flex gap-3 shadow-md shadow-slate-400">
                        <div className="w-full py-2 text-center">
                            <h1 className="cursor-pointer text-2xl font-bold text-primary border-b-4 border-blue-500">Management Team</h1>
                        </div>
                    </div>
                    <div className={`w-full`}>
                        <NewUserForm setUserStateFn={setUsersState}></NewUserForm>
                    </div>
                </div>


                {/* Table goes here */}
                <ManagementTeamTable setUserState={setUsersState} userListState={userListState}></ManagementTeamTable>
            </div >
        </>
    )
}