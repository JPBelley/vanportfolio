import PropTypes from "prop-types"
import React from "react"
import "./about.scss"

const About = () => (
  <div className="about">
    <div className="layout-container">
      <div className="layout-left">
        <h2 className="about__title">About me</h2>
        <div className="about__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
        <a className="button" href="">Download CV</a>
      </div>
      <div className="layout-right">
        <img src="https://source.unsplash.com/random" alt="" />
      </div>
    </div>
  </div>
)

export default About
