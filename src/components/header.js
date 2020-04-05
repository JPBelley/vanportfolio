import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss" 

const Header = ({ siteTitle }) => {

  // let scroll = (destination) => {
  //   window.scroll({
  //     top: '#skills',
  //     behavior: 'smooth'  // 👈 
  //   });
  // }


  return (
    <header
      style={{
        background: `#0E0C38`,
      }}
    >
      <div className="layout-container">
        <div className="nav-title">Portfolio</div>
        <ul>
          <li className="current" ><a href="#">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
