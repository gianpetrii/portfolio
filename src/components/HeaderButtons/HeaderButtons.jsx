// Style
import './HeaderButtons.css';

// Files
import CV from '../../assets/CV.pdf';

function HeaderButtons() {
    return (
        <div className="header_btn_container">
            <a href={CV} className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary" >Let's talk</a>
        </div>
    );
}

export default HeaderButtons;