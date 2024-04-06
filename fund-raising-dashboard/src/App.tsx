import './App.css'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import MasterLayout from './shared/layouts/master-layour'
import { Dashboard } from '../src/components/dashboard'
import CausesAndBank from './components/causes-and-bank'
import Cases from './components/cases'
import ManagementTeam from './components/management-team'
import AuthGuard from './route-guards/AuthGuard'
import Login from './shared/pages/login'

function App() {


  return (
    <>
      < BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/dashboard" />}></Route>
          <Route path='/' element={<AuthGuard></AuthGuard>}>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/' element={<MasterLayout></MasterLayout>}>
              <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
              <Route path='/causes-bank' element={<CausesAndBank></CausesAndBank>}></Route>
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
