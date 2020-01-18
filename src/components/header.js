import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Images from "./images"

const Header = () => (
  <header
    style={{
      background: '#999',
      //background: `rgba(16, 159, 0, 0.6)`,
      marginBottom: `1.45rem`,
      position: 'sticky'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Images fileName="asLogo" style={{ width: "1em", display: "inline-block" }} />
          AlphaStrategies
        </Link>
      </h3>
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
