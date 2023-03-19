import { BrowserRouter as Router, Routes, Switch, Route, Link } from 'react-router-dom';
import Hero_MovieShowtime from './Components/Hero_MovieShowtime';
import Home from "./Pages/HomePage"
import MovieShowtime from './Pages/MovieShowtime';
import SignUp from './Pages/SignUpPage';
import Login from './Pages/Login'

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/popcornlk" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Signup" element={<SignUp/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Showtime" element={<MovieShowtime/>}/>
    </Routes>
    </Router>
  );
}

export default App;

