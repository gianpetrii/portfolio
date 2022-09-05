// Estilos
import './Contact.css';

// files
import { MdOutlineEmail } from 'react-icons/md'

function Contact() {
    return (
      <section id='contact'>
         <h5>Get in touch!</h5>
         <h2>Contact Me</h2>

         <div className='container contact-container'>
            
            <div className='contact-options'>
               
               <article className="contact-option">
                  <MdOutlineEmail className='contact-icon'/>
                  <h4>Email</h4>
                  <h5>gianpetrii@gmail.com</h5>
                  <a target="_blank" href="mailto:gianpetrii@gmail.com" className='contact-link'>Send me an email!</a>
               </article>
               <article className="contact-option">
                  <MdOutlineEmail className='contact-icon'/>
                  <h4>WhatsApp</h4>
                  <h5>+54 9 11 3466-2500</h5>
                  <a target="_blank" href="https://api.whatsapp.com/send?phone=5491134662500" className='contact-link'>Write me a message!</a>
               </article>

            </div>

            <form action="">
               <input type="text" name='name' placeholder='Full Name' required />
               <input type="text" name='email' placeholder='Email' required />
               <textarea name="content" rows="7" required></textarea>
               <button type='submit' className='btn btn-primary'>Send Email</button>
            </form>
         </div>
      </section>
    );
}

export default Contact;