import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import { IUserResponseDtoList } from "@/models/DTOs/IUserResponseDto.ts";
import Spinner from "@/shared/component/Spinner.tsx";
import useUserService from "@/customHooks/useUserService";
import Dialog from "@/shared/component/Dialog";
import TriggerClick from "@/utils/TriggerClick";
import UpdateUserForm from "./UpdateUserForm";


export interface IManagementTeamTable {
    userListState: IUserResponseDtoList
    setUserState: (userList: IUserResponseDtoList) => void
}
export default function ManagementTeamTable({ userListState, setUserState }: IManagementTeamTable): JSX.Element {

    const DeletUser = useUserService()[2];

    const handleDeleteUser = (userId: number) => {
        DeletUser(setUserState, userId, "management-team-table-spinner", 'dialog-spinner');
    }

    return (
        <>
            <div className="h-[70vh] overflow-auto relative">
                <Spinner id={"management-team-table-spinner"} BgClass={`bg-transparent`}></Spinner>
                <Table>
                    <TableCaption>List of users end.</TableCaption>

                    <TableHeader>
                        <TableRow>
                            <TableHead className={`max-w-[100px] hover:bg-blue-100 cursor-pointer`}>User Id</TableHead>
                            <TableHead className={`hover:bg-blue-100 cursor-pointer`}>First Name</TableHead>
                            <TableHead className={`hover:bg-blue-100 cursor-pointer`}>Last Name</TableHead>
                            <TableHead className={`hover:bg-blue-100 cursor-pointer`}>Email</TableHead>
                            <TableHead className={`hover:bg-blue-100 cursor-pointer`}>UserType</TableHead>
                            <TableHead className={`hover:bg-blue-100 cursor-pointer`}>Registration date</TableHead>
                            <TableHead className={`hover:bg-blue-100 cursor-pointer`}>Last login</TableHead>
                            <TableHead className={`w-[100px] hover:bg-blue-100 cursor-pointer`}>Action</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {userListState.map(u => (
                            <TableRow>
                                <TableCell className={`font-medium`}>{u.userId}</TableCell>
                                <TableCell>{u.firstName}</TableCell>
                                <TableCell>{u.lastName}</TableCell>
                                <TableCell className="">{u.email.length > 10 ? u.email.substring(0, 10) + '...' : u.email}</TableCell>
                                <TableCell className="">{u.userType}</TableCell>
                                {/* REGISTRATION TIMESTAMP */}
                                {(u.userAuthLogsList.filter(l => l.eventType === "Registration").length > 0) ?
                                    <TableCell>
                                        {new Date(u.userAuthLogsList.filter(l => l.eventType === "Registration")[0].eventTimestamp).toISOString().split('T')[0]}
                                    </TableCell>
                                    :
                                    <TableCell className="text-red-500 text-sm font-medium">No Data found</TableCell>
                                }

                                {/* LAST LOGIN TIMESTAMP */}
                                {(u.userAuthLogsList.filter(l => l.eventType === "Last_Login").length > 0) ?
                                    <TableCell>{new Date(u.userAuthLogsList.filter(l => l.eventType === "Last_Login")[0].eventTimestamp).toISOString().split('T')[0]}</TableCell>
                                    :
                                    <TableCell className={`text-red-500 font-medium text-sm`}>Never logged in yet</TableCell>
                                }
                                <TableCell className="text-end">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <button className="px-4 py-2 outline-none hover:bg-slate-300 transition-all duration-300 rounded-lg shadow-md shadow-slate-300 tracking-wide font-black"> . . . </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuLabel>User</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className={`rounded-lg`}>
                                                View Details
                                            </DropdownMenuItem>
                                            <Dialog
                                                TriggerNode={
                                                    <button className="px-2 text-sm py-1.5 hover:bg-slate-100 transition-all duration-300 ease-in border border-transparent hover:border-slate-100 text-start w-full rounded-lg">Edit User</button>
                                                }
                                                title={"Edit User"}
                                            >
                                                <div className="w-full py-2">
                                                    <UpdateUserForm user={u} setUserState={setUserState} />
                                                </div>
                                            </Dialog>
                                            <Dialog
                                                TriggerNode={
                                                    <button className={`bg-red-100 border border-red-200 hover:border-red-400 transition-all duration-300 ease-in rounded-lg px-2 py-1.5 mt-1 text-sm w-full text-start`}>Remove User</button>
                                                }
                                                title={"Remove User# " + u.userId}
                                            >
                                                <div className="flex flex-col gap-1">
                                                    <p className="font-medium">Are you sure? This action causes deleting of record permanently and you can not undo this action</p>
                                                    <div className="flex justify-end gap-4">
                                                        <button
                                                            onClick={() => TriggerClick('dialog-close-btn')}
                                                            className="px-4 py-2 border-2 border-slate-400 outline-none rounded-lg bg-slate-100 text-slate-950 opacity-80 font-mono font-black text-base hover:border-blue-700 transition-border duration-300">Cancel</button>
                                                        <button onClick={
                                                            () => handleDeleteUser(u.userId)
                                                        } className="px-4 py-2 border-2 border-red-300 hover:border-red-500 outline-none rounded-lg bg-red-300 text-slate-950 opacity-80 font-mono font-black text-base transition-border duration-300">Delete</button>
                                                    </div>
                                                </div>

                                            </Dialog>

                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}
