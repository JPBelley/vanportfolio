import PropTypes from "prop-types"
import React from "react"
import "./hero.scss"

const Hero = ({ siteTitle }) => (
  <div className="hero">
    <div className="layout-container">
      <div className="layout-left">
        <div className="hero__surtitle">Hello, I am</div>
        <h1>Vanessa<br />De Robillard</h1>
        <div className="hero__subtitle">A young UI/UX designer with crazy for mobile &amp; web design.</div>
        <div className="hero__find_me">Find Me on</div>
        <ul className="hero__links">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <a className="button" href="">Hire me</a>
        <a className="button" href="">Portfolio</a>
      </div>
      <div className="layout-right">
        <img src="https://source.unsplash.com/random" alt="" />
      </div>
    </div>
  </div>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}


export default Hero
