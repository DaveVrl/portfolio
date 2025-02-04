import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { Routes, Route } from 'react-router-dom';
import Project1 from './components/Projects/Project1/Project1';
import Project2 from './components/Projects/Project2/Project2';
import DownArrow from './components/DownArrow/DownArrow';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
        <div className='Background'>
          <div className="App">
        
            <NavBar />
            
            {/* Configura las rutas */}
            <Routes>
              {/* Ruta para la página principal */}
              <Route path="/" element={
                <>
                  <section id="home">
                    <Home />
                  </section>
                  <DownArrow/>
                  <section id="projects">
                    <Projects />
                  </section>
                  <DownArrow/>
                  <section id="about">
                    <About />
                  </section>
                </>
              } />

              {/* Rutas para proyectos específicos */}
              <Route path="/projects/liliana-game-store" element={<Project1  />} />
              <Route path="/projects/pokemon-spa" element={<Project2  />} />
            </Routes>
            
            <Footer />
          </div>
        </div>
    </I18nextProvider>
  );
}

export default App;
