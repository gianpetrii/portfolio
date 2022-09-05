// react
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import { useState, useEffect } from 'react';


// Estilos
import './Portfolio.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// files
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio1.jpg';
import IMG3 from '../../assets/portfolio1.jpg';
import IMG4 from '../../assets/portfolio1.jpg';
import IMG5 from '../../assets/portfolio1.jpg';
import IMG6 from '../../assets/portfolio1.jpg';
import { Autoplay, Pagination, Navigation } from "swiper";


function Portfolio() {
   // handle taking out navigation in slider when tablet or mobile display
   const [isSmallerThanTablet, setIsSmallerThanTablet] = useState(false);
   
   useEffect(() => {
      function handleResize() {
        if (window.innerWidth < 1250) {
          setIsSmallerThanTablet(true);
        } else {
          setIsSmallerThanTablet(false);
        }
      }
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
   
   
   return (
      <section id='portfolio'>
         <h5>My best ventures</h5>
         <h2>Projects and Developments</h2>

         {isSmallerThanTablet ? 
            <>
               <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                     delay: 2500,
                     disableOnInteraction: false,
                  }}
                  pagination={{
                     clickable: true,
                  }}
                  navigation={false}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="portfolio-container container"
               >

                  {projects.map(project => (
                     <SwiperSlide className='portfolio-article' key={project.id}>   {/* AGREGAR QUE PARA PHONE SE PASE PARA EL COSTADO */}
                        <div className="portfolio-div-image">
                           <img src={project.image} />{/* arreglar tema de ruta imagen */}
                        </div>
                        <h3>{project.title}</h3>

                        <div className="portfolio-buttons">
                           <a href={project.github} className='btn' target="_blank">GitHub</a>
                           <a href={project.demo} className='btn btn-primary' target="_blank">Live Demo</a>
                        </div>

                     </SwiperSlide>
                  ))}

               </Swiper>

            </> : <>

               <div className="portfolio-container container">

                  {projects.map(project => (
                     <article className='portfolio-article' key={project.id}>   {/* AGREGAR QUE PARA PHONE SE PASE PARA EL COSTADO */}
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
            </>
         }

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