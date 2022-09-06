// Estilos
import './Footer.css';

// dependencies
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

function Footer() {
    return (
        <footer>
            <a href='#' className='footer-logo'>GIANLUCA PETRI</a>

            <ul className='permalinks'>
               
               {links.map(link => 
                  <li key={link.id}>
                     <a href={link.url}>{link.text}</a>
                  </li>
               )}
            </ul>
            
            <div className="footer-icons">
               <a href="https://linkedin.com" target="_blank" className='footer-icon'><BsLinkedin /></a>
               <a href="https://github.com" target="_blank" className='footer-icon'><FaGithub /></a>
            </div>

            <div className="footer-copyright">
                  <small>&copy; All rights reserved.</small>
            </div>

        </footer>
    );
}

export default Footer;

const links = [{
      id: 1,
      url: "#",
      text: "Home"
   }, {
      id: 2,
      url: "#about",
      text: "About"
   }, {
      id: 3,
      url: "#experience",
      text: "Home"
   }, {
      id: 4,
      url: "#services",
      text: "Services"
   }, {
      id: 5,
      url: "#portfolio",
      text: "Projects"
   }, /*{
      id: 6,
      url: "#testimonials",
      text: "Testimonials"
   }, */{
      id: 7,
      url: "#contact",
      text: "Contact"
   }
];