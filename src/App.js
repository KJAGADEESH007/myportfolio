
import { Route, Routes } from 'react-router-dom';
import './App.css';


import Aboutme from './Component/Aboutme';

import Projects from './Component/Projects';
import Skills from './Component/Skills';
import Project1 from './Pages/Project1';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import Engimach from './Pages/Engimach';
function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/project1' element={<Project1></Project1>}></Route>
        <Route path='/Skills' element={<Skills></Skills>}></Route>
        <Route path='/Aboutme' element={<Aboutme></Aboutme>}></Route>
        <Route path='/Projects' element={<Projects></Projects>}></Route>
        <Route path='/ContactMe' element={<Contact></Contact>}></Route>
         <Route path='/engimach' element={<Engimach></Engimach>}></Route>
       {/* <Route path='/project1' element={<Project1></Project1>}></Route>
        <Route path='/project1' element={<Project1></Project1>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
