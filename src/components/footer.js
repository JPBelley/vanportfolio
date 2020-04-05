import PropTypes from "prop-types"
import React from "react"
import "./footer.scss"

const Footer = ({ siteTitle }) => {

  return (
    <footer>
      <div className="layout-container">

        <h2 className="footer__title">Portfolio</h2>

        <ul>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>

        <ul>
          <li>CA</li>
          <li>+15148357454</li>
          <li>Cov.derobillard@gmail.comntact</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
