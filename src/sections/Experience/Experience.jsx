// Estilos
import './Experience.css';

// files
import { BsPatchCheckFill } from 'react-icons/bs';

function Experience() {



    return (
      <section id='experience'>
         <h5>Skills I Have</h5>
         <h2>My Experience</h2>

         <div className="container experience_container">
            <div className="experience_card">

               {cards.map(card => (
                  <>
                  <h3>{card.type}</h3>

                     <div className='experience_content'>
                           {card.experiences.map(experience => (
                              <article className="experience_details">
                                 <BsPatchCheckFill />
                                 <h4>{experience.title}</h4>
                                 <small className='text-light'>{experience.level}</small>
                              </article>
                           ))}
                     </div>

                  </>
               ))}

            </div>

         </div>
      </section>
    );
}

export default Experience;

// list of cards
const cards = [{
      type: "Frontend Development",
      experiences:  [{
         title: "React JS",
         level: "Experienced"
      }, {
         title: "Redux",
         level: "Experienced"
      }, {
         title: "Bootstrap",
         level: "Experienced"
      }, {
         title: "HTML / CSS",
         level: "Experienced"
      }, {
         title: "Context / Redux",
         level: "Experienced"
      }, {
         title: "UI / UX Design",
         level: "Experienced"
      }]
   }, {
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
         level: "Experienced"
      }, {
         title: "Postman / Thunder Client",
         level: "Experienced"
      }]
   }, {
      type: "Python/JS Automation & A.I.",
      experiences:  [{
         title: "Python / JavaScript",
         level: "Experienced"
      }, {
         title: "Selenium Webdriver",
         level: "Experienced"
      }, {
         title: "Problem-solving skills",
         level: "Experienced"
      }, {
         title: "Mathematical aptitude",
         level: "Experienced"
      }, {
         title: "Testing",
         level: "Experienced"
      }, {
         title: "Debugging",
         level: "Experienced"
      }]
   }, {
      type: "General Skills",
      experiences:  [{
         title: "Git / GitHub",
         level: "Experienced"
      }, {
         title: "Agile / Scrum methodologies",
         level: "Experienced"
      }, {
         title: "Trello / Jira for organization",
         level: "Experienced"
      }, {
         title: "Dev Tools",
         level: "Experienced"
      }]
   }]