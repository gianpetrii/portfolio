// Hooks
import { useState } from 'react';

// Estilos
import './Nav.css';

// dependencias
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { MdMiscellaneousServices } from 'react-icons/md';
import { VscFolderLibrary } from 'react-icons/vsc';



function Nav() {
   const [activeNav, setActiveNav] = useState("#");   // defino header como initialvalue

   // manejo de clickeo de seccion activa



   
   return (
      <nav>
         <ul>
            {sections.map(section => (
               <li><a 
                  key={section.path.replace("#","")} 
                  href={section.path} 
                  className={activeNav === section.path ? "active" : "" }
                  onClick={() => setActiveNav(section.path)}
                  >{section.icon}</a></li>
            ))}

         </ul>
      </nav>
    );
}

export default Nav;

   // listado de secciones
   const sections = [{
      path: "#",
      icon: <AiOutlineHome />
   }, {
      path: "#about",
      icon: <AiOutlineUser />
   },{
      path: "#experience",
      icon: <BiBook />
   },{
      path: "#services",
      icon: <MdMiscellaneousServices />
   },{
      path: "#portfolio",
      icon: <VscFolderLibrary />
   },{
      path: "#contact",
      icon: <BiMessageSquareDetail />
   },]