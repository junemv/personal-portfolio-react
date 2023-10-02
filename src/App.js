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
import MobileNav from './components/nav_components/MobileNav';

function App() {
  const [headerIsVisible, setHeaderIsVisible] = useState()
  // const [dimensions, setDimensions] = useState({
  //   height: window.innerHeight,
  //   width: window.innerWidth
  // })
  const [isMobile, setIsMobile] = useState(false)

  const headerRef = useRef();
  
  // screen resize handler
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(toggleMobile(window.innerWidth))
    } 
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // toggle mobile view
  const toggleMobile = (width=1300) => {
    console.log("width", window.innerWidth)
    if (width <= 1000) {
      return true
    } else {
      return false
    }
  }

  // hide/reveal navbar
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHeaderIsVisible(entry.isIntersecting)
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
          {isMobile === true && (
            <MobileNav></MobileNav>
          )}
          {/* <MobileNav></MobileNav> */}
        </header>
        <body>
          <main>
            {isMobile === false && 
              (headerIsVisible === false &&  (
                <div id="sticky">
                  <NavBar></NavBar>
                </div>
              )
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
