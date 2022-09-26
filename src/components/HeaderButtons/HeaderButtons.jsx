// Files
import CVEsp from '../../assets/Esp-GianlucaPetriCV.pdf';
import CVIng from '../../assets/Ing-GianlucaPetriCV.pdf';

// style
import './HeaderButtons.css';

// react
import { useState, useRef, useEffect } from 'react';

function HeaderButtons() {

    //handle download CV button clicked
    const [downloadCV, setDownloadCV] = useState(false);
    const refDownloadCV = useRef(null);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
    }, [])

    const handleClickOutside = (e) => {
        if(!refDownloadCV.current.contains(e.target)) {
            setDownloadCV(false);
        }
    };

    return (
        <div className="header_btn_container">
            <div className="dropdown" ref={refDownloadCV}>
                <button className="btn btn-secondary dropbtn" onClick={() => setDownloadCV(!downloadCV)}>Download CV</button>
                
                {downloadCV && (
                    <div className="dropdown-content">
                        <a href={CVEsp}>CV - Español</a>
                        <a href={CVIng}>CV - English</a>
                    </div>
                )}

            </div>
            
            <a href="#contact" className="btn btn-primary" >Let's talk</a>
        </div>
    );
}

export default HeaderButtons;