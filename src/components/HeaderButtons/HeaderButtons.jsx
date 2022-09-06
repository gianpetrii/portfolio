// Files
import CVEsp from '../../assets/Esp-GianlucaPetriCV.pdf';
import CVIng from '../../assets/Ing-GianlucaPetriCV.pdf';


function HeaderButtons() {
    return (
        <div className="header_btn_container">
            <a href={CVEsp} className="btn btn-secondary">Download CV</a>
            <a href="#contact" className="btn btn-primary" >Let's talk</a>
        </div>
    );
}

export default HeaderButtons;