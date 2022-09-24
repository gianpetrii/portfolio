// react
import React, { useState, useEffect } from 'react';

// Estilos
import './Services.css';

function Services() {

   //SWIPER WHEN DISPLAY IS TABLET OR SMALLER
   const [isSmallerThanTablet, setIsSmallerThanTablet] = useState("non-active");
   
   useEffect(() => {
      function handleResize() {
        if (window.innerWidth < 1250) {
          setIsSmallerThanTablet("active");
        } else {
          setIsSmallerThanTablet("non-active");
        }
      }
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
   }, []);




   
   // SET ACTIVE SERVICE
   const [activeService, setActiveService] = useState(0);

   const handleMoreInfo = (id) => {
       if (activeService === id) {
           setActiveService(0);
       } else {
           setActiveService(id);
       }
   };
  

   return (
      <section id='services'>
         <h5>What I Offer</h5>
         <h2>Services</h2>

         <div className="services-container container">

            {servicios.map(servicio => (
               <article className="service-article" key={servicio.id}>
                  <div className="service-head" onClick={() => handleMoreInfo(`${servicio.id}`)}>
                     <h3>{servicio.title}</h3>
                  </div>

                  {activeService === `${servicio.id}` && (

                     <ul className='service-list'>
                     {servicio.services.map(service => (
                        <li>
                           <p>{service.content}</p>
                        </li>
                     ))}
                     </ul>

                  )}

   
               </article>
            ))}

         </div>

      </section>
    );
}

export default Services;

const servicios = [{
   id: 1,
   title: "Frontend Development",
   services: [{
      content: "- Este seria sdfsdfdsuno de los servicios"
      }, {
      content: "- Este seria sdfsdfdsuno de los servicios"
      }, {
      content: "- Este seria sdfsdfdsuno de los servicios"
      }, {
      content: "- Este seria sdfsdfdsuno de los servicios"
      }, {
      content: "- Este seria sdfsdfdsuno de los servicios"
      }, {
      content: "- Este seria sdfsdfdsuno de los servicios"
      }]
   }, {
      id: 2,
      title: "Backend Development",
      services: [{
         content: "- Este seria sdfsdfdsuno de los servicios"
         }, {
         content: "- Este seria sdfsdfdsuno de los servicios"
         }, {
         content: "- Este seria sdfsdfdsuno de los servicios"
         }, {
         content: "- Este seria sdfsdfdsuno de los servicios"
         }, {
         content: "- Este seria sdfsdfdsuno de los servicios"
         }, {
         content: "- Este seria sdfsdfdsuno de los servicios"
         }]
   }, {
      id: 3,
      title: "Python Task Automation",
      services: [{
         content: "- Este seria sdfsdfdsuno de los servicios"
         }, {
         content: "- Este seria sdfsdfdsuno de los servicios"
         }, {
         content: "- Este seria sdfsdfdsuno de los servicios"
         }, {
         content: "- Este seria sdfsdfdsuno de los servicios"
         }, {
         content: "- Este seria sdfsdfdsuno de los servicios"
         }, {
         content: "- Este seria sdfsdfdsuno de los servicios"
         }]
   } 
]