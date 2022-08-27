// Estilos
import './Testimonials.css';

// Files
import AVATAR1 from '../../assets/avatar1.jpg';
import AVATAR2 from '../../assets/avatar2.jpg';
import AVATAR3 from '../../assets/avatar3.jpg';
import AVATAR4 from '../../assets/avatar4.jpg';

function Testimonials() {
   return (
      <section id='testimonials'>
         <h5>Review from clients</h5>
         <h2>Testimonials</h2>

         <div className="testimonials-container container">

            {testimonials.map(testimonial => (
               <article className='testimonials-article'>
                  <div className='testimonials-avatar'>
                     <img src={testimonial.image} alt="avatar" />
                  </div>
                  <h5>{testimonial.name}</h5>
                  <small className='testimonials-review'>{`" ${testimonial.content} "`}</small>
               </article>              
            ))}

         </div>
      </section>
   );
}

export default Testimonials;

const testimonials = [{
      name: "Name of client",
      image: AVATAR1,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Labore minus quibusdam fuga praesentium dicta dolorum laudantium \
      nulla at, tempore aliquam, sit amet, nihil rem vitae vero perspiciatis \
      ut doloribus. Accusamus."
   }, {
      name: "Name of client",
      image: AVATAR1,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Labore minus quibusdam fuga praesentium dicta dolorum laudantium \
      nulla at, tempore aliquam, sit amet, nihil rem vitae vero perspiciatis \
      ut doloribus. Accusamus."
   }, {
      name: "Name of client",
      image: AVATAR1,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Labore minus quibusdam fuga praesentium dicta dolorum laudantium \
      nulla at, tempore aliquam, sit amet, nihil rem vitae vero perspiciatis \
      ut doloribus. Accusamus."
   }, {
      name: "Name of client",
      image: AVATAR1,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. \
      Labore minus quibusdam fuga praesentium dicta dolorum laudantium \
      nulla at, tempore aliquam, sit amet, nihil rem vitae vero perspiciatis \
      ut doloribus. Accusamus."
   }, 
]