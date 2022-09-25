// Files
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

function HeaderSocials() {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/gianluca-petri/" target="_blank" className='header-socials-icon'><BsLinkedin /></a>
            <a href="https://github.com/gianpetrii" target="_blank" className='header-socials-icon'><FaGithub /></a>
        </div>
    );
}

export default HeaderSocials;