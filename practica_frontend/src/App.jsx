import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Icons from './pages/icons'
import Maps from './pages/maps'
import Notifications from './pages/notifications'
import Table_list from './pages/table_list'
import Typography from './pages/typographip'
import User_profile from './pages/user_profile'
function App() {
return(

  <>
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<Icons/>}/>
      <Route path='/maps' element={<Maps/>}/>
      <Route path='/notification' element={<Notifications/>}/>
      <Route path='/table-list' element={<Table_list/>}/>
      <Route path='/typographic' element={<Typography />}/>
      <Route path='/user-profile' element={<User_profile/>}/>
  </Routes>
</BrowserRouter>
  </>
)
}


 
export default App
