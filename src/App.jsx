import { BrowserRouter , Route, Routes } from 'react-router-dom'; // Import Router, Route, Switch from react-router-dom
import './App.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';

function App() {
  

  return (
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
     </Routes>
     
     
     
     
     
     </BrowserRouter>
  );
}

export default App;
