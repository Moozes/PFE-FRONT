import MyNavbar from './components/MyNavbar'
import ProfileCard from './components/ProfileCard';
import Notification from './components/Notification';
import LesionCard from './components/LesionCard';
import Box from '@mui/material/Box';
import UploadAvatar from './components/UploadAvatar';
import DeleteAccount from './components/DeleteAccount';
import LogoutAll from './components/LogoutAll';
import SingleMessage from './components/SingleMessage';
import MessageForm from './components/MessageForm';
import ProfileNavbar from './components/ProfileNavbar'
import DashboardNavbar from './components/DashboardNavbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SendEmail from './pages/reset-password/SendEmail';
import ResetPassword from './pages/reset-password/ResetPassword';
import Forum from './pages/Forum';
import Messaging from './pages/Messaging';
import Profile from './pages/profile/Profile';
import Dashboard from './pages/dashboard/Dashboard';
function App() {
  return (
    <>
      <MyNavbar/>
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <ResetPassword/> */}
      {/* <SendEmail/> */}
      {/* <Profile/> */}
      <Messaging/>
      {/* <Dashboard/> */}
      {/* <Forum/> */}
    </>
    )

}

export default App;

// import logo from './logo.svg';
{/* <img src={logo} className="App-logo" alt="logo" /> */}