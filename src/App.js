import { Helmet } from 'react-helmet';
import { useState } from "react";
import './App.css';
import About from './components/about_components/About';
import Illustration from './components/illustration_components/Illustration';
import NavBar from './components/nav_components/Nav';
import Software from './components/software_components/Software';
import TopBar from './components/top_bar_components/Topbar';
import Footer from './components/footer_components/Footer';


function App() {
  const [navIsVisible, toggleNavIsVisible] = useState(false)

  // var navbar = document.getElementById("navbar");
  // var sticky = navbar.offsetTop;


  return (
    <div className="App">
      <Helmet>
        <title>June Valentino - Developer</title>
      </Helmet>
      <div className="margins">
        <header>
          <div>
            <TopBar></TopBar>
          </div>
          <div>
            <About></About>
          </div>
        </header>
        <body>
          <main>
            <div>
              <NavBar
                // visible={navIsVisible}
                setVisible={toggleNavIsVisible}
              ></NavBar>
            </div>
            {/* {navIsVisible === true && (
              <div>
                <NavBar
                  // visible={navIsVisible}
                  setVisible={toggleNavIsVisible}
                ></NavBar>
              </div>
            )} */}
            <div>
              <Software></Software>
            </div>
            <div>
              <Illustration></Illustration>
            </div>
          </main>
        </body>
        <footer>
          <div>
            <Footer></Footer>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
