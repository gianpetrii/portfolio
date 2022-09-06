// react
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import React from "react";

// Estilos
import './Testimonials.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// Files
import AVATAR1 from '../../assets/avatar1.jpg';
import { Autoplay, Pagination, Navigation } from "swiper";


function Testimonials() {

   // handle taking out navigation in slider when tablet or mobile display
   const [isSmallerThanTablet, setIsSmallerThanTablet] = useState(true);

   useEffect(() => {
      function handleResize() {
        if (window.innerWidth < 1024) {
          setIsSmallerThanTablet(false);
        } else {
          setIsSmallerThanTablet(true);
        }
      }
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);





   return (
      <section id='testimonials'>
         <h5>Review from clients</h5>
         <h2>Testimonials</h2>

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
               navigation={isSmallerThanTablet}
               modules={[Autoplay, Pagination, Navigation]}
               className="testimonials-container container"
         >
               
               {testimonials.map(testimonial => (
                  <SwiperSlide className='testimonials-article' key={testimonial.id}>
                     <div className='testimonials-avatar'>
                        <img src={testimonial.image} alt="avatar" />
                     </div>
                     <h5>{testimonial.name}</h5>
                     <small className='testimonials-review'>{`" ${testimonial.content} "`}</small>
                  </SwiperSlide>           
                  ))}

         </Swiper>
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