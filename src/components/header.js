import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem .8rem`,
      }}
    >
      <h1 style={{ 
        margin: 0,
        
        }}
      >
        {siteTitle}
      </h1>
      <h5 style={{ marginTop: `1rem `}}>
          Software Engineer || Los Angeles
      </h5>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
