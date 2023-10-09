import React from "react";
import "./contact.css";
import {MdOutlineEmail} from "react-icons/md"

const Contacts = () => {
  return(
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>aleatrengrouse@gmail.com</h5>
            <a href="mailto:aleatrengrouse@gmail.com" target="_blank">Send a Message</a>
          </article>
        </div>
        {/*End of Contact Options*/}
        <form action="">
          <input type="text" name="name"placeholder="Your Full Name"require />
          <input type="email"name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

      </div>
    </section>
  )
};

export default Contacts;
