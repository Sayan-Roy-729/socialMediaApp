import './App.css';
import AuthenticateUser from './components/AuthenticateUser/AuthenticateUser';
import Navbar from './components/Navbar/Navbar';
import WelcomePage from './components/WelcomePage/WelcomePage';

function App() {
  return (
    <>
    <Navbar/>
    

    {/* <WelcomePage/> */}
    <AuthenticateUser/>

     
    </>
  );
}

export default App;
