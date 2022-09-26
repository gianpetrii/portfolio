// react
import { useState, useEffect } from "react";

// Estilos
import './Header.css';

// Files and dependencies
import HeaderButtons from "../../components/HeaderButtons/HeaderButtons";
import HeaderSocials from '../../components/HeaderSocials/HeaderSocials';
import Typical from "react-typical";




function Header() {

   // handle theme switch
   const style = document.documentElement.style; // de aca saco mis estilos

   const stylesList = [{
      title: '--color-bg',
      valueIce: '#06283D',
      valueMono: '#e6ccb2',
   }, {
      title: '--color-bg-variant',
      valueIce: '#1363DF',
      valueMono: '#9c6644',
   }, {
      title: '--color-primary',
      valueIce: '#47B5FF',
      valueMono: '#7f5539',
   },{
      title: '--color-primary-variant',
      valueIce: '#DFF6FF',
      valueMono: '#DFF6FF',
   },{
      title: '--color-white',
      valueIce: '#FFF',
      valueMono: '#FFF',
   },{
      title: '--color-light',
      valueIce: 'rgba(255, 255, 255, 0.6)',
      valueMono: 'rgba(255, 255, 255, 0.6)',
   }]

   const handleSwitchTheme = (styleType) => {

      stylesList.map(styleVariable => {

         if(styleType === "blue-ice") {
            style.setProperty(styleVariable.title, styleVariable.valueIce);
            console.log("cambie a ice");
         } else if(styleType === "monocromatic") {
            style.setProperty(styleVariable.title, styleVariable.valueMono);
            console.log("cambie a mono");
         }
      });
   };



   return (
      <>
         <header>
            <div className="container header_container">
               <h5 className="text-light">Hello there! My name is</h5>
               <h1 className="header-name">Gianluca Petri</h1>
               
               <div className="header-themes">
                  <h4>Choose Theme: </h4>
                  <h4 className="theme"
                  onClick={() => handleSwitchTheme("blue-ice")}>blue-ice</h4>
                  <h4 className="theme"
                  onClick={() => handleSwitchTheme("monocromatic")}>monocromatic</h4>
               </div>


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