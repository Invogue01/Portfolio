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
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>aleatrengrouse@gmail.com</h5>
            <a href="mailto:aleatrengrouse@gmail.com">Send a Message</a>
          </article>
        </div>
        {/*End of Contact Options*/}
        <form action=""></form>

      </div>
    </section>
  )
};

export default Contacts;
