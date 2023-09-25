import './App.css'
import { Routes , Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Projects from './components/Projects/Projects';

function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </div>
  )
}

export default App;
