import './App.css';
import { Routes , Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Project1 from './components/Projects/Project1/Project1';
import Project2 from './components/Projects/Project2/Project2';
import Footer from './components/Footer/Footer';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Lenguage from './components/Theme_And_Lenguage/Lenguage/Lenguage';

function App() {
  
  return (
    <I18nextProvider i18n={i18n}>
    <div className='Background'>
      <div className="App">
        <Lenguage/>
        <NavBar/>
        <Routes> 
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects/project1' element={<Project1/>}/>
          <Route path='/projects/project2' element={<Project2/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
    </I18nextProvider>
  )
}

export default App;
