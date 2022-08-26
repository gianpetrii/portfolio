// Estilos
import './Services.css';

function Services() {
    return (
      <section id='services'>
         <h5>What I Offer</h5>
         <h2>Services</h2>

         <div className="services-container container">

            {servicios.map(servicio => (
               <article className="service">
                  <div className="service-head">
                     <h3>{servicio.title}</h3>
                  </div>
   
                  <ul className='service-list'>
                     {servicio.services.map(service => (
                        <li>
                           <p>{service.content}</p>
                        </li>
                     ))}
                  </ul>
   
               </article>
            ))}

         </div>

      </section>
    );
}

export default Services;

const servicios = [{
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