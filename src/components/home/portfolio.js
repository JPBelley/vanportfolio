import PropTypes from "prop-types"
import React from "react"
import "./portfolio.scss"

const Portfolio = () => (
  <div className="portfolio">
    <div className="layout-container">
      <h2 className="portfolio__title"> <div>Portfolio</div> </h2>
      <ul>
        <li>All</li>
        <li>Logo</li>
        <li>Websites</li>
        <li>Mobile Apps</li>
      </ul>
      <div className="portfolio__container">
        <div className="portfolio__card"><img src="https://source.unsplash.com/random" alt="" /></div>
        <div className="portfolio__card"><img src="https://source.unsplash.com/random" alt="" /></div>
        <div className="portfolio__card"><img src="https://source.unsplash.com/random" alt="" /></div>
        <div className="portfolio__card"><img src="https://source.unsplash.com/random" alt="" /></div>
        <div className="portfolio__card"><img src="https://source.unsplash.com/random" alt="" /></div>
        <div className="portfolio__card"><img src="https://source.unsplash.com/random" alt="" /></div>
      </div>
    </div>
  </div>
)

export default Portfolio
