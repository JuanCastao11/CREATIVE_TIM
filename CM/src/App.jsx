import {BrowserRouter,useRoutes} from 'react-router-dom'
import './input.css'
import Icons from './components/icons'
import Maps from './components/maps'
import NavBar from './components/navBar'
import Notifications from './components/notifications'
import Table_list from './components/table-list'
import Type from './components/type'
import User_profile from './components/user-profile'
import Dashboard from './components/dashboard'

function Router(){
  let router = useRoutes([
    {path:'/', element:<Dashboard/>},
    {path:'/icons', element: <Icons/>},
    {path:'/maps', element: <Maps/>},
    {path:'/notifications', element: <Notifications/>},
    {path:'/table-list', element: <Table_list/>},
    {path:'/type', element: <Type/>},
    {path:'/User-profile', element: <User_profile/>}
   
    
  ])
  return router
}

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Router>
    </Router>
    </BrowserRouter>
      
    </>
  )
}

export default App
