import './App.css'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import MasterLayout from './shared/layouts/master-layout'
import { Dashboard } from '@/components/dashboard.tsx'
import CausesAndBank from './components/causes-and-bank'
import Cases from '@/components/CaseComponents/cases'
import ManagementTeam from './components/Mangement-Team/management-team.tsx'
import AuthGuard from './route-guards/AuthGuard'
import Login from './shared/pages/login'
import SecondaryMasterLayout from './shared/layouts/secondary-master-layout'
import { AuthContext } from './context/AuthContext.ts'

function App() {


    return (
        <>
            < BrowserRouter>
                <AuthContext.Provider value={{ userCnic: 26 }}>
                    <Routes>
                        <Route path='/' element={<AuthGuard></AuthGuard>}>
                        <Route path='/login' element={<Login></Login>}></Route>
                        
                            <Route path='/' element={<Navigate to={"/dashboard"}></Navigate>}></Route>
                            <Route path='/' element={<MasterLayout></MasterLayout>}>
                                <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
                                <Route path='/causes-bank' element={<CausesAndBank></CausesAndBank>}></Route>
                            </Route>

                            <Route path='/' element={<SecondaryMasterLayout></SecondaryMasterLayout>}>
                                <Route path='/cases' element={<Cases></Cases>}></Route>
                                <Route path='/management-team' element={<ManagementTeam></ManagementTeam>}></Route>
                            </Route>
                        </Route>
                    </Routes>
                </AuthContext.Provider>
            </BrowserRouter>
        </>
    )
}

export default App
