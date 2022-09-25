// Estilos
import './About.css';

// files
import AboutImage from '../../assets/me-about.jpeg';

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
      title: "Studies",
      content: "Currently studying Computer Science"
   }, {
      icon: <VscFolderLibrary className='about_icon'/>,
      title: "Projects",
      content: "20+ completed projects"
   }]

    return (
      <section id='about'>
         <h5>Get to Know</h5>
         <h2>About Me</h2>

         <div className="container about_container" >
            <div className='about_me'>
               <div className='about_me-image-container'>
                  <img className='about-me-image' src={AboutImage} alt="About Image" />
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
               I think of myself as a person who is hungry for knowledge, eager to learn and
               improve every single day, with great communication as well as logical skills 
               and capable of overcoming every challenge!
               <br />
               Full Stack web developer already experienced with Scrum methodologies and teamwork
               environments, always enthusiastic about facing a new project!
               <br />
               </p>

               <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                
            </div>
         </div>
      </section>
    );
}

export default About;