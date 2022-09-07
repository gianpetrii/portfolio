// Estilos
import './Experience.css';

// files
import { BsPatchCheckFill } from 'react-icons/bs';
import { MdOutlineFlipCameraAndroid } from 'react-icons/md';

// hooks
import { useState, useEffect } from 'react';

function Experience() {

   // SET ACTIVE EXPERIENCE
   const [activeExp, setActiveExp] = useState(0);

   const handleMoreInfo = (id) => {
       if (activeExp == id) {
           setActiveExp(-1);
       } else {
           setActiveExp(id);
       }
   };





   // handle one full stack card when mobile
   const [isSmallerThanTablet, setIsSmallerThanTablet] = useState(false);
   
   useEffect(() => {
      function handleResize() {
        if (window.innerWidth < 700) {
          setIsSmallerThanTablet(true);
        }
      }
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <section id='experience' className='experiece-section'>
         <h5>Skills I Have</h5>
         <h2>My Experience</h2>

         <div className='experience_type'>
            <h3 onClick={() => handleMoreInfo(`${cards[0].id}`)} className={activeExp === `${cards[0].id}` && "active"}>Full Stack</h3>
            <h3 onClick={() => handleMoreInfo(`${cards[2].id}`)} className={activeExp === `${cards[2].id}` && "active"}>Python/JS Automation</h3>
            <h3 onClick={() => handleMoreInfo(`${cards[3].id}`)} className={activeExp === `${cards[3].id}` && "active"}>General Skills</h3>
         </div>

         <div className="container experience_container">
            
            {cards.map(card => <>

               {activeExp === `${card.id}` && (

                  <div className="experience_card" >

                     {card.type === "" ? <></> : 
                     <>
                        <h3>{card.type} <MdOutlineFlipCameraAndroid className='experience_flip_icon'/></h3>
                        
                     </>}
                     
                        <div className='experience_content'>
                              {card.experiences.map(experience => (
                                 <article className="experience_details ">
                                    <BsPatchCheckFill className='experience_icon'/>
                                    <div>
                                       <h4>{experience.title}</h4>
                                       <small className='text-light'>{experience.level}</small>
                                    </div>   
                                 </article>
                              ))}
                        </div>

                  </div>               

               )}
            </>)}

         </div>
      </section>
    );
}

export default Experience;

// list of cards
const cards = [{
      id: 0,
      clicked: ["clicked", "not"],
      type: "Frontend Development",
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
         title: "Context / Redux",
         level: "Intermediate"
      }, {
         title: "UI / UX Design",
         level: "Experienced"
      }]
   }, {
      id: 0,
      clicked: ["not", "clicked"],
      type: "Backend Development",
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
      id: 1,
      type: "",
      experiences:  [{
         title: "Python / JavaScript",
         level: "Experienced"
      }, {
         title: "Selenium Webdriver",
         level: "Experienced"
      }, {
         title: "Problem-solving skills",
         level: "Intermediate"
      }, {
         title: "Mathematical aptitude",
         level: "Intermediate"
      }, {
         title: "Testing",
         level: "Experienced"
      }, {
         title: "Debugging",
         level: "Experienced"
      }]
   }, {
      id: 2,
      type: "",
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
   }/*, {
      id: 3,
      type: "",
      experiences:  [{
         title: "APPIAN",
         level: "Experienced"
      }]
   }*/
];