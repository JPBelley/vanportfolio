import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss" 

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#0E0C38`,
      color: `#fff`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className="nav-title">Portfolio</div>
    <ul>
      <li>About</li>
      <li>Portfolio</li>
      <li>Contact</li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
