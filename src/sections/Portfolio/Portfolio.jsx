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
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';


import { Autoplay, Navigation } from "swiper";


function Portfolio() {
   // handle taking out navigation in slider when tablet or mobile display
   const [isSmallerThanTablet, setIsSmallerThanTablet] = useState(false);
   const [numOfSlides, setNumOfSlides] = useState(3);
   
   useEffect(() => {
      function handleResize() {
        if (window.innerWidth < 1250) {
         setNumOfSlides(2);
         setIsSmallerThanTablet(true);
        }
        if (window.innerWidth < 700){
         setNumOfSlides(1); 
        }
      }
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
   });
   
   


   return (
      <section id='portfolio' className='portfolio'>
         <h5>My best ventures</h5>
         <h2>Projects and Developments</h2>

         <Swiper
            slidesPerView={numOfSlides}
            spaceBetween={30}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
            navigation={isSmallerThanTablet ? false : true}
            modules={[Autoplay, Navigation]}
            className="portfolio-container container"
         >


                  {projects.map(project => (
                     <SwiperSlide className='portfolio-article' key={project.title}>
                        <div className="portfolio-div-image">
                           <img src={project.image} />
                        </div>
                        <h3>{project.title}</h3>

                        <div className="portfolio-buttons">
                           <a href={project.github} className='btn' target="_blank">GitHub</a>
                           <a href={project.demo} className='btn btn-primary' target="_blank">Live Demo</a>
                        </div>

                     </SwiperSlide>
                  ))}

         </Swiper>

      </section>
    );
}

export default Portfolio;

const projects = [{
   title: "Professional Portfolio",
   image: IMG1,
   github: "https://github.com/gianpetrii/portfolio",
   demo: "https://gianluca-petri-portfolio.vercel.app/"
   }, {
   title: "HooBank Payment App",
   image: IMG2,
   github: "https://github.com/gianpetrii/hoobank-w-vite-react",
   demo: "https://hoobank-w-vite-react.vercel.app/"
   }, {
   title: "Sanity E-commerce website",
   image: IMG3,
   github: "github.link",
   demo: "https://sanity-ecommerce-next-react-w-stripe.vercel.app/"
   }, {
   title: "Netflix emulator",
   image: IMG4,
   github: "https://github.com/gianpetrii/runers",
   demo: "https://my-netflix-emulator.vercel.app/"
   }, {
      title: "Somos Mas ONG",
      image: IMG5,
      github: "https://github.com/gianpetrii/alkemy_JSfullstack_challenge",
      demo: "demo.link"
      }
]