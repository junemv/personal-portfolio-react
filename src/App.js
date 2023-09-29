import { Helmet } from 'react-helmet';
import { useRef, useState, useEffect } from "react";
import './App.css';
import About from './components/about_components/About';
import Illustration from './components/illustration_components/Illustration';
import NavBar from './components/nav_components/Nav';
import Software from './components/software_components/Software';
import TopBar from './components/top_bar_components/Topbar';
import Footer from './components/footer_components/Footer';
import NavBtnContainer from './components/nav_components/NavBtnContainer';

function App() {
  const [headerIsVisible, setHeaderIsVisible] = useState()

  const headerRef = useRef();


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHeaderIsVisible(entry.isIntersecting)
      console.log('entries', entries)
    })
    observer.observe(headerRef.current)
  }, [])

  return (
    <div className="App">
      <Helmet>
        <title>June Valentino - Developer</title>
      </Helmet>
      <div className="margins">
        <header ref={headerRef}>
          <TopBar></TopBar>
          <About></About>
          <NavBtnContainer></NavBtnContainer>
        </header>
        <body>
          <main>
            {headerIsVisible === false && (
              <div id="sticky">
                <NavBar></NavBar>
              </div>
            )}
            <Software></Software>
            <Illustration></Illustration>
          </main>
        </body>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
}

export default App;
