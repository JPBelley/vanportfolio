import React from "react"
import "./contact.scss"

const Contact = () => (
  <div className="contact" id="contact">
    <div className="layout-container">

      <h2 className="contact__title top-line">Let’s Make Something Together</h2>

      <p className="contact__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.</p>

      <form action="">
        <div className="input-container">
          <input type="text" placeholder="Name" />
        </div>
        <div className="input-container" >
          <input type="text" placeholder="Email" />
        </div>
        <div className="input-container">
          <input type="text" placeholder="Phone" />
        </div>
        <div className="input-container">
          <input type="text" placeholder="Budget" />
        </div>
        <div className="textarea-container">
          <textarea name="comment" form="usrform" placeholder="Message"></textarea>
        </div>
        <button type="submit" className="button button--gold">Hire Me</button>
      </form>
    </div>
  </div>
)

export default Contact
