// Files
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

function HeaderSocials() {
    return (
        <div className="header_socials">
            <a href="https://linkedin.com" target="_blank" className='header-socials-icon'><BsLinkedin /></a>
            <a href="https://github.com" target="_blank" className='header-socials-icon'><FaGithub /></a>
            <a href="https://dribble.com" target="_blank" className='header-socials-icon'><FiDribbble /></a>
        </div>
    );
}

export default HeaderSocials;