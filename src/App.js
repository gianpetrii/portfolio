// Files
import Header from './sections/Header/Header';
import Nav from './sections/Nav/Nav';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Services from './sections/Services/Services';
import Portfolio from './sections/Portfolio/Portfolio';
import Testimonials from './sections/Testimonials/Testimonials';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';


// Styles
import './App.css';

// dependencies
import { ScrollContainer, ScrollPage, Animator, batch, Fade, Sticky, MoveOut, Zoom } from 'react-scroll-motion';


const App = () => {
    return (
        <>
            <Nav />
            <ScrollContainer>
               <ScrollPage page={0}>
                  <Animator animation={batch(Fade(), MoveOut(0, -100), Zoom(0.5, 1))}>
                     <Header />
                  </Animator>
               </ScrollPage>
               <ScrollPage page={1}>
                  <Animator animation={batch(Fade(), MoveOut(0, -100), Zoom(0.5, 1))}>
                     <About />
                  </Animator>
               </ScrollPage>
               <ScrollPage page={2}>
                  <Animator animation={batch(Fade(), MoveOut(0, -100), Zoom(0.5, 1))}>
                     <Experience />
                  </Animator>
               </ScrollPage>
               <ScrollPage page={3}>
                  <Animator animation={batch(Fade(), MoveOut(0, -100), Zoom(0.5, 1))}>
                     <Services />
                  </Animator>
               </ScrollPage>
               <ScrollPage page={4}>
                  <Animator animation={batch(Fade(), MoveOut(0, -100), Zoom(0.5, 1))}>
                     <Portfolio />
                  </Animator>
               </ScrollPage>{/*
               <ScrollPage page={5}>
                  <Animator animation={batch(Fade(), MoveOut(0, -100), Zoom(0.5, 1))}>
                     <Testimonials />
                  </Animator>
               </ScrollPage>*/}
               <ScrollPage page={6}>
                  <Animator animation={batch(Fade(), MoveOut(0, -100), Zoom(0.5, 1))}>
                     <Contact />
                  </Animator>
               </ScrollPage>
               <Footer />
            </ScrollContainer>
            
                     
                     
                     
                     
                     
                     
                     
                     


        </>
    );
}

export default App;

