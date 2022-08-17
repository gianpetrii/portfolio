// Files
import About from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Experience from './sections/Experience/Experience';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import Nav from './sections/Nav/Nav';
import Portfolio from './sections/Portfolio/Portfolio';
import Services from './sections/Services/Services';

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
            <Contact />
            <Footer />
        </>
    );
}

export default App;

