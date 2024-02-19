
import { BrowserRouter , Route, Routes } from 'react-router-dom'; // Import Router, Route, Switch from react-router-dom
import './App.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';
import Sidenav from './components/SideNav/Sidenav';
function App() {
  

  return (
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sidenav" element={<Sidenav />} />
     </Routes>
     
     
     
     
     
     </BrowserRouter>
  );
}

export default App;
