import PropTypes from "prop-types"
import React from "react"
import "./skills.scss"

const Skills = () => (
  <div className="skills" id="skills">
    <div className="layout-container">
      <h2 className="skills__title"> <div>My Capabilities</div> </h2>
      <div className="skills__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis nostrud exercitation.</div>
      <div className="skills__container">
        {/* Skill card */}
        <div className="skills__card">
          <img src="https://source.unsplash.com/random" alt="" />
          <h3>Web design</h3>
          <p>Get awesome design services from inkyy.com</p>
        </div>

        {/* Skill card */}
        <div className="skills__card">
          <img src="https://source.unsplash.com/random" alt="" />
          <h3>Web design</h3>
          <p>Get awesome design services from inkyy.com</p>
        </div>

        {/* Skill card */}
        <div className="skills__card">
          <img src="https://source.unsplash.com/random" alt="" />
          <h3>Web design</h3>
          <p>Get awesome design services from inkyy.com</p>
        </div>

        {/* Skill card */}
        <div className="skills__card">
          <img src="https://source.unsplash.com/random" alt="" />
          <h3>Web design</h3>
          <p>Get awesome design services from inkyy.com</p>
        </div>

        {/* Skill card */}
        <div className="skills__card">
          <img src="https://source.unsplash.com/random" alt="" />
          <h3>Web design</h3>
          <p>Get awesome design services from inkyy.com</p>
        </div>

        {/* Skill card */}
        <div className="skills__card">
          <img src="https://source.unsplash.com/random" alt="" />
          <h3>Web design</h3>
          <p>Get awesome design services from inkyy.com</p>
        </div>
      </div>
    </div>
  </div>
)

export default Skills
