// Estilos
import './Portfolio.css';

// files
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio1.jpg';
import IMG3 from '../../assets/portfolio1.jpg';
import IMG4 from '../../assets/portfolio1.jpg';
import IMG5 from '../../assets/portfolio1.jpg';
import IMG6 from '../../assets/portfolio1.jpg';

function Portfolio() {
    return (
      <section id='portfolio'>
         <h5>My best ventures</h5>
         <h2>Projects and Developments</h2>

         <div className="portfolio-container container">

            {projects.map(project => (
               <article className='portfolio-article'>   {/* AGREGAR QUE PARA PHONE SE PASE PARA EL COSTADO */}
                  <div className="portfolio-div-image">
                     <img src={project.image} />{/* arreglar tema de ruta imagen */}
                  </div>
                  <h3>{project.title}</h3>

                  <div className="portfolio-buttons">
                     <a href={project.github} className='btn' target="_blank">GitHub</a>
                     <a href={project.demo} className='btn btn-primary' target="_blank">Live Demo</a>
                  </div>

               </article>
            ))}

         </div>
      </section>
    );
}

export default Portfolio;

const projects = [{
   title: "Este es el titulo del projecto",
   image: IMG1,
   github: "github.link",
   demo: "demo.link"
   }, {
   title: "Este es el titulo",
   image: IMG2,
   github: "github.link",
   demo: "demo.link"
   }, {
   title: "Este es el titulo",
   image: IMG3,
   github: "github.link",
   demo: "demo.link"
   }, {
   title: "Este es el titulo",
   image: IMG4,
   github: "github.link",
   demo: "demo.link"
   }, {
   title: "Este es el titulo",
   image: IMG5,
   github: "github.link",
   demo: "demo.link"
   }, {
   title: "Este es el titulo",
   image: IMG6,
   github: "github.link",
   demo: "demo.link"
   }
]