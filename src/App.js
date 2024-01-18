import { Helmet } from 'react-helmet';
import { useRef, useState, useEffect } from "react";
import './App.css';
import About from './components/about_components/About';
import IllustrationContainer from './components/illustration_components/IllustrationContainer';
import NavBar from './components/nav_components/Nav';
import SoftwareContainer from './components/software_components/SoftwareContainer';
import TopBar from './components/top_bar_components/Topbar';
import Footer from './components/footer_components/Footer';
import NavBtnContainer from './components/nav_components/NavBtnContainer';
import MobileNav from './components/nav_components/MobileNav';
import ContactContainer from './components/contact_components/ContactContainer';

function App() {
  const [headerIsVisible, setHeaderIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [scrollVisible, setScrollVisible] = useState(false)
  const headerRef = useRef();
  const softwareRef = useRef(null);
  const illustrationRef = useRef(null);
  const contactRef = useRef(null);
  
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

  // page scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // => scroll position
      setScrollVisible(toggleTopButton(scrollPosition))
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // toggle mobile view
  const toggleMobile = (width) => {
    if (width <= 1100) {
      return true
    } else {
      return false
    }
  };

  // toggle scroll to top button
  const toggleTopButton = (scrollPosition) => {
    if (scrollPosition > 0) {
      return true
    } else {
      return false
    }
  };

  // hide/reveal navbar & top btn
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setHeaderIsVisible(entry.isIntersecting);
    })
    observer.observe(headerRef.current);
  }, []);

  // scroll to ref on click
  const handleNavClick = (sectionRef=null) => {
    sectionRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  // scroll to top
  const handleTopScrollClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div id="App">
      <Helmet>
        <title>June Valentino - Developer</title>
      </Helmet>
      <header ref={headerRef} className={"mobile-margins-" + isMobile}>
        <TopBar isMobile={isMobile}>
        </TopBar>
        <About></About>
        {isMobile === false && (
          <NavBtnContainer 
          handleNavClick={handleNavClick} 
          softwareRef={softwareRef}
          illustrationRef={illustrationRef}
          contactRef={contactRef}
          ></NavBtnContainer>
        )}
        {isMobile === true && (
          <MobileNav
            handleNavClick={handleNavClick} 
            handleTopScrollClick={handleTopScrollClick}
            softwareRef={softwareRef}
            illustrationRef={illustrationRef}
            contactRef={contactRef}
          ></MobileNav>
        )}
      </header>
      <body className={"mobile-margins-" + isMobile}>
        {isMobile === false && 
          (headerIsVisible === false &&  (
            <div id="sticky">
              <NavBar
                handleNavClick={handleNavClick} 
                handleTopScrollClick={handleTopScrollClick}
                softwareRef={softwareRef}
                illustrationRef={illustrationRef}
                contactRef={contactRef}
              ></NavBar>
            </div>
          )
        )}
        {isMobile === false &&
          (scrollVisible === true && (
            <button id="top-btn" onClick={()=>handleTopScrollClick()}>
            ^
            </button>
          )
        )}
        <main>
          <div ref={softwareRef}>
            <SoftwareContainer></SoftwareContainer>
          </div>
          <div ref={illustrationRef}>
            <IllustrationContainer></IllustrationContainer>
          </div>
          <div ref={contactRef}>
            <ContactContainer></ContactContainer>
          </div>
        </main>
      </body>
      <footer className={"mobile-margins-" + isMobile}>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
