// Estilos
import './Portfolio.css';

function Portfolio() {
    return (
      <section id='portfolio'>
         <h5>My best ventures</h5>
         <h2>Projects and Developments</h2>

         <div className="portfolio-container container">

            {projects.map(project => (
               <article className='portfolio-article'>
                  <div className="portfolio-image">
                  <img src={project.image} alt="" />
                  </div>
                  <h3>{project.title}</h3>
                  <a href={project.github} className='btn' target="_blank">GitHub</a>
                  <a href={project.demo} className='btn btn-primary' target="_blank">Live Demo</a>

               </article>
            ))}

         </div>
      </section>
    );
}

export default Portfolio;

const projects = [{
   title: "Este es el titulo",
   image: "src/de/la/imagen",
   github: "github.link",
   demo: "demo.link"
   }, {
   title: "Este es el titulo",
   image: "src/de/la/imagen",
   github: "github.link",
   demo: "demo.link"
   }, {
   title: "Este es el titulo",
   image: "src/de/la/imagen",
   github: "github.link",
   demo: "demo.link"
   }, {
   title: "Este es el titulo",
   image: "src/de/la/imagen",
   github: "github.link",
   demo: "demo.link"
   }, {
   title: "Este es el titulo",
   image: "src/de/la/imagen",
   github: "github.link",
   demo: "demo.link"
   }, {
   title: "Este es el titulo",
   image: "src/de/la/imagen",
   github: "github.link",
   demo: "demo.link"
   }
]