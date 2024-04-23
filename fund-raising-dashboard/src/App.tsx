import './App.css'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import MasterLayout from './shared/layouts/master-layout'
import { Dashboard } from '@/components/dashboard.tsx'
import CausesAndBank from './components/causes-and-bank'
import Cases from '@/components/CaseComponents/cases'
import ManagementTeam from './components/management-team'
import AuthGuard from './route-guards/AuthGuard'
import Login from './shared/pages/login'
import SecondaryMasterLayout from './shared/layouts/secondary-master-layout'

function App() {


    return (
        <>
            < BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navigate to="/dashboard" />}></Route>
                    <Route path='/login' element={<Login></Login>}></Route>

                    <Route path='/' element={<AuthGuard></AuthGuard>}>

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
            </BrowserRouter>
        </>
    )
}

export default App
