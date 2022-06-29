import MyNavbar from './components/MyNavbar'
import Login from './pages/Login';
import Signup from './pages/Signup';
import SendEmail from './pages/reset-password/SendEmail';
import ResetPassword from './pages/reset-password/ResetPassword';
import Forum from './pages/Forum';
import Messaging from './pages/Messaging';
import Profile from './pages/profile/Profile';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/Home';

import {
  Routes,
  Route
} from 'react-router-dom'
import ProfileLesions from './pages/profile/ProfileLesions';
import ProfileSettings from './pages/profile/ProfileSettings';
import AllUsers from './pages/dashboard/AllUsers';
import Doctors from './pages/dashboard/Doctors';

function App() {
  return (
    <>
      <MyNavbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="send-email" element={<SendEmail/>}/>
        <Route path="reset-password" element={<ResetPassword/>}/>
        <Route path="profile" element={<Profile/>}>
          <Route index element={<ProfileLesions/>}/>
          <Route path="settings" element={<ProfileSettings/>}/>
        </Route>
        <Route path="dashboard" element={<Dashboard/>}>
          <Route index element={<Doctors/>}/>
          <Route path="users" element={<AllUsers/>}/>
        </Route>
        <Route path="forum" element={<Forum/>}/>
        <Route path="messages/:id" element={<Messaging/>}/>
      </Routes>
    </>
    )

}

export default App;

// import logo from './logo.svg';
{/* <img src={logo} className="App-logo" alt="logo" /> */}