// Estilos
import './About.css';

// files
import AboutImage from '../../assets/me-about.jpg';

// dependencies
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';



function About() {

   // list that goes through articles
   const articles = [{
      icon: <FaAward className='about_icon'/>,
      title: "Experience",
      content: "3+ Years Working"
   }, {
      icon: <FiUsers className='about_icon'/>,
      title: "Clients",
      content: "200+ clients worldwide"
   }, {
      icon: <VscFolderLibrary className='about_icon'/>,
      title: "Projects",
      content: "80+ completed projects"
   }]

    return (
      <section id='about'>
         <h5>Get to Know</h5>
         <h2>About Me</h2>

         <div className="container about_container" >
            <div className='about_me'>
               <div className='about_me-image'>
                  <img src={AboutImage} alt="About Image" />
               </div>
            </div>

            <div className="about_content">
               <div className="about_cards">
                  {articles.map(article => (
                     <article className='about_card'>
                           {article.icon}
                           <h5>{article.title}</h5>
                           <small>{article.content}</small>
                     </article>
                  ))}
               </div>
                     
               <p>
               Lorem ipsum dolor sit amet consectetur adipiscing elit, quisque tristique sagittis ornare vitae himenaeos habitasse, fringilla facilisis massa iaculis diam nibh. Iaculis quisque nullam praesent nibh tristique fermentum ridiculus morbi curabitur sociis, dapibus a tempus et auctor eu bibendum magna varius nascetur felis, eros potenti imperdiet faucibus fames nulla proin urna tincidunt. 
               </p>

               <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                
            </div>
         </div>
      </section>
    );
}

export default About;