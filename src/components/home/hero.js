import PropTypes from "prop-types"
import React from "react"
import "./hero.scss"

const Hero = ({ siteTitle }) => (
  <div className="hero">
    <div className="layout-container">
      <div className="layout-left">
        <div className="hero__surtitle">Hello, I am</div>
        <h1>Vanessa<br />De Robillard</h1>
        <div className="hero__subtitle">A young <span className="gold">UI/UX</span> designer with crazy for mobile &amp; web design.</div>
        <div className="hero__description">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
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
