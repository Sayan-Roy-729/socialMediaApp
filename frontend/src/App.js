import './App.css';
import AuthenticateUser from './components/AuthenticateUser/AuthenticateUser';
import Navbar from './components/Navbar/Navbar';
import UserInformation from './components/UserInformation/UserInformation';
import WelcomePage from './components/WelcomePage/WelcomePage';

function App() {
  return (
    <>
    <Navbar/>
    

    {/* <WelcomePage/> */}
    {/* <AuthenticateUser/> */}
    <UserInformation/>

     
    </>
  );
}

export default App;
