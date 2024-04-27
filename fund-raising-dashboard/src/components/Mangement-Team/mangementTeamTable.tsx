import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table.tsx";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import { IUserResponseDtoList } from "@/models/DTOs/IUserResponseDto.ts";
import Spinner from "@/shared/component/Spinner.tsx";


export interface IManagementTeamTable {
    userListState: IUserResponseDtoList
}
export default function ManagementTeamTable({ userListState }: IManagementTeamTable): JSX.Element {
    return (
        <>
            <div className="h-[70vh] overflow-auto relative">
                <Spinner id={"management-team-table-spinner"} BgClass={`bg-transparent`}></Spinner>
                <Table>
                    <TableCaption>List of users end.</TableCaption>

                    <TableHeader>
                        <TableRow>
                            <TableHead className={`w-[100px] hover:bg-blue-100 cursor-pointer`}>User Id</TableHead>
                            <TableHead className={`hover:bg-blue-100 cursor-pointer`}>First Name</TableHead>
                            <TableHead className={`hover:bg-blue-100 cursor-pointer`}>Last Name</TableHead>
                            <TableHead className={`hover:bg-blue-100 cursor-pointer`}>Email</TableHead>
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
                                <TableCell>{u.email}</TableCell>
                                <TableCell>
                                    {new Date(u.userAuthLogsList.filter(l => l.eventType === "Registration")[0].eventTimestamp).toISOString().split('T')[0]}
                                </TableCell>
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
                                            <DropdownMenuItem className={`rounded-lg`}>
                                                Edit User
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className={`bg-red-100 rounded-lg`}>
                                                Remove user
                                            </DropdownMenuItem>

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
