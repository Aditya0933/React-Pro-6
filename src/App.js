import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Support from './Components/Support';
import Lab from './Components/Lab';
import About from './Components/About';
import MainHeader from './Components/MainHeader';
import NotFound from './Components/Notfound';

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li> <NavLink to='/'>Home </NavLink></li>
          <li> <NavLink to='/about'>About </NavLink></li>
          <li> <NavLink to='/support'>Support </NavLink></li>
          <li> <NavLink to='/lab'>Labs </NavLink></li>
        </ul>
      </nav>

      <Routes>
      <Route path='/' element={<MainHeader/>}>
        <Route index element={<Home/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/lab' element={<Lab/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>  
      </Routes>
    </div>
  );
}

export default App;
