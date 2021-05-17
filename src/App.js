
import './App.scss';
import NavBar from './components/navBar.js'
import Welcome from './components/welcome.js'
import AboutMe from './pages/aboutme.js'
import Projects from './pages/projects';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="main">
        <Welcome/>
        <AboutMe/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
