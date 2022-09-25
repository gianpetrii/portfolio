// Estilos
import './Experience.css';

// files
import { BsPatchCheckFill } from 'react-icons/bs';
import { MdOutlineFlipCameraAndroid } from 'react-icons/md';

// hooks
import { useState, useEffect } from 'react';

function Experience() {

   // handle one full stack card when mobile
   const [isSmallerThanTablet, setIsSmallerThanTablet] = useState(false);
   
   useEffect(() => {
      function handleResize() {
        if (window.innerWidth < 800) {
          setIsSmallerThanTablet(true);
        }
      }
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);




   // SET ACTIVE SERVICE
   const [activeCard, setActiveCard] = useState("Full Stack");

   const handleActiveCard = (cardTitle) => {
      if (activeCard !== cardTitle) {
         setActiveCard(cardTitle);
      }
   };

   // handle flipping card in mobile view
   const [cardFlipped, setCardFlipped] = useState(3);

   const handleFlipCard = (cardSubtitle, cardId) => {
      // chequeo subtitulo full stack y si estoy en mobile
      if(cardSubtitle === "Full Stack" && isSmallerThanTablet === true) { 
         console.log("mobile: " + isSmallerThanTablet);
         console.log("recien clickee: " + cardId);
         if(cardFlipped !== cardId) {
            setCardFlipped(cardId);
            console.log("cambio a:" + cardFlipped);
         }
      }
   };




   return (
      <section id='experience' className='experiece'>
         <h5>Skills I Have</h5>
         <h2>My Experience</h2>

         <div className='experience_type'>
            {sections.map(section => ( // map de los titulos de secciones
               <h3 key={section.title} className={activeCard === section.title ? "clicked-section" : ""} 
                  onClick={() => handleActiveCard(`${section.title}`)}>
                  {section.title}
               </h3>
            ))}
         </div>

         <div className="container experience_container">
            
            {cards.map(card => // hago un map en todas las cards

               <>
                  {activeCard ===  `${card.title}` && (  // la card que title coincide la muestro
                  
                     <>

                     <div 
                     key={card.id}
                     className={cardFlipped === card.id ? "experience_card non-active" : "experience_card"}
                     onClick={() => handleFlipCard(`${card.title}`, `${card.id}`)}
                     >
      
                        {card.subtitle === "" ? <></> : // si tiene subtitulo lo muestro con el icono
                           <h3>
                              {card.subtitle}<MdOutlineFlipCameraAndroid className='experience_flip_icon'/>
                           </h3>
                        }
                     
                        <div className='experience_content'>
                              {card.experiences.map(experience => (
                                 <article key={experience.title} className="experience_details ">
                                    <BsPatchCheckFill className='experience_icon'/>
                                    <div>
                                       <h4>{experience.title}</h4>
                                       <small className='text-light'>{experience.level}</small>
                                    </div>   
                                 </article>
                              ))}
                        </div>
      
                     </div>
                     </>

                  )}
               </>
            )}

         </div>
      </section>
   );
};

export default Experience;

// list of sections
const sections = [{
   title: "UI-UX Design"
   
}, {
   title: "Full Stack"
}, {
   title: "General Skills"
}];

// list of cards
const cards = [ {
   id: 1,
   title: "UI-UX Design",
   subtitle: "",
   experiences:  [{
      title: "React JS",
      level: "Experienced"
   }, {
      title: "Redux",
      level: "Intermediate"
   }, {
      title: "Bootstrap",
      level: "Experienced"
   }, {
      title: "HTML / CSS",
      level: "Experienced"
   }, {
      title: "Context",
      level: "Intermediate"
   }, {
      title: "Framer motion",
      level: "Intermediate"
   }]
   }, {
      id: 2,
      title: "Full Stack",
      subtitle: "Frontend Development",
      experiences:  [{
         title: "React JS",
         level: "Experienced"
      }, {
         title: "Redux",
         level: "Intermediate"
      }, {
         title: "Bootstrap",
         level: "Experienced"
      }, {
         title: "HTML / CSS",
         level: "Experienced"
      }, {
         title: "Context",
         level: "Intermediate"
      }, {
         title: "Framer motion",
         level: "Intermediate"
      }]
   }, {
      id: 3,
      title: "Full Stack",
      subtitle: "Backend Development",
      experiences:  [{
         title: "Node JS",
         level: "Experienced"
      }, {
         title: "Express",
         level: "Experienced"
      }, {
         title: "APIs",
         level: "Experienced"
      }, {
         title: "Sequelize",
         level: "Experienced"
      }, {
         title: "MySQL",
         level: "Intermediate"
      }, {
         title: "Postman / Thunder Client",
         level: "Experienced"
      }]
   }, {
      id: 4,
      title: "General Skills",
      subtitle: "",
      experiences:  [{
         title: "Git / GitHub",
         level: "Experienced"
      }, {
         title: "Agile methodologies",
         level: "Experienced"
      }, {
         title: "Trello / Jira / Asana",
         level: "Experienced"
      }, {
         title: "Dev Tools",
         level: "Intermediate"
      },  {
         title: "Figma / Adobe XD",
         level: "Intermediate"
      }]
   }
]