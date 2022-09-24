// Estilos
import './Header.css';

// Files
import HeaderButtons from "../../components/HeaderButtons/HeaderButtons";
import HeaderSocials from '../../components/HeaderSocials/HeaderSocials';
import MyImage from "../../assets/me.png";


function Header() {
   return (
      <>
         <header>
            <div className="container header_container">
               <h5>Hello there! I am</h5>
               <h1>Gianluca Petri</h1>
               <h5 className="text-light">Full Stack Developer / UI-UX Designer</h5>
                    
               <HeaderButtons />

               <HeaderSocials />
                  
               <div className='me'>
                  <img src={MyImage} alt="Image of myself" />
               </div>

               <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
         </header>
      </>
   );
}

export default Header;