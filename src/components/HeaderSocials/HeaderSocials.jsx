// Files
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

function HeaderSocials() {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/gianluca-petri/" target="_blank" className='header-socials-icon'><BsLinkedin /></a>
            <a href="https://github.com/gianpetrii" target="_blank" className='header-socials-icon'><FaGithub /></a>
            <a href="https://gianluca-petri.000webhostapp.com/" target="_blank" className='header-socials-icon'><FiDribbble /></a>
        </div>
    );
}

export default HeaderSocials;