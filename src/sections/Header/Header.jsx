// react
import { useState, useEffect } from "react";

// Estilos
import './Header.css';

// Files and dependencies
import HeaderButtons from "../../components/HeaderButtons/HeaderButtons";
import HeaderSocials from '../../components/HeaderSocials/HeaderSocials';
import Typical from "react-typical";




function Header() {





   return (
      <>
         <header>
            <div className="container header_container">
               <h5 className="text-light">Hello there! My name is</h5>
               <h1 className="header-name">Gianluca Petri</h1>

               <div className="header-animation-container">
                  
                  <div className="header-animation">
                     <h1>I'm a</h1>
                  
                     <h1>
                        <Typical 
                        loop={Infinity}
                        wrapper="i"
                        steps={[
                           " Full Stack Developer",
                           2500,
                           " UI / UX Designer",
                           2500
                        ]}
                        />
                     </h1>
                  </div>
                  <HeaderButtons />
                  <HeaderSocials />
               </div>
               
                  
               <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
         </header>
      </>
   );
}

export default Header;