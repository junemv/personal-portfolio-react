import './App.css';
import About from './components/about_components/About';
import NavBar from './components/nav_components/Nav';
import Software from './components/software_components/Software';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <main>
        <div>
          <About></About>
        </div>
        <div>
        <Software></Software>
        </div>
        <div>
          Illustration will go here idk
        </div>
      </main>
    </div>
  );
}

export default App;
