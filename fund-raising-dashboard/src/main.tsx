import ReactDOM from 'react-dom/client'
import './index.css'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import MasterLayout from './shared/layouts/master-layour'
import {Dashboard} from '../src/components/dashboard'
import CausesAndBank from './components/causes-and-bank'

ReactDOM.createRoot(document.getElementById('root')!).render(
  < BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to={'/dashboard'}></Navigate>}></Route>
      <Route path='/' element={<MasterLayout></MasterLayout>}>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/causes-bank' element={<CausesAndBank></CausesAndBank>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>  
)
