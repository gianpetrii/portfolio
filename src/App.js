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


const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
}

export default App;

