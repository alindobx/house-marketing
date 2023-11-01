
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Explore from './pages/Explore';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
// import Profile from './pages/Profile';
import NavBar from './components/NavBar';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';

function App() {


  return (
    <>
     <Router>
      <Routes>
        <Route path = "/" element={<Explore/>}/>
        <Route path = "/offers" element={<Offers/>}/>
        <Route path = "/profile" element={<Signin/>}/>
        <Route path = "/signin" element={<Signin/>}/>
        <Route path = "/signup" element={<SignUp/>}/>
        <Route path = "/forgotpass" element={<ForgotPassword/>}/>
      </Routes>
      <NavBar/>
     </Router>
    </>
  )
}

export default App
