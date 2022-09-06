// Estilos
import './Experience.css';

// files
import { BsPatchCheckFill } from 'react-icons/bs';
import { MdOutlineFlipCameraAndroid } from 'react-icons/md';

// hooks
import { useState } from 'react';

function Experience() {

   // para manejo de clicked experience
   const [clickedExp, setClickedExp] = useState(["active", "non", "non"]);
   const [mobileActiveCard, setMobileActiveCard] = useState(["clicked", "not"]);

    return (
      <section id='experience' className='experiece-section'>
         <h5>Skills I Have</h5>
         <h2>My Experience</h2>

         <div className='experience_type'>
            <h3 onClick={() => setClickedExp(["active", "non", "non"])} className={clickedExp[0]}>Full Stack</h3>
            <h3 onClick={() => setClickedExp(["non", "active", "non"])} className={clickedExp[1]}>Python/JS Automation</h3>
            <h3 onClick={() => setClickedExp(["non", "non", "active"])} className={clickedExp[2]}>General Skills</h3>
         </div>

         <div className="container experience_container">
            
            {cards.map(card => (
               
               <div className={card.clicked === undefined ? "experience_card "+ clickedExp[card.id] :
               "experience_card "+ clickedExp[card.id] + " " + mobileActiveCard[0]} 
               onClick={() => card.clicked === undefined ? <></> : setMobileActiveCard(card.clicked)}>
               
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
               ))}

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