import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Images from "./images"

const Header = () => (
  <header
    style={{
      background: '#bbb',
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
      <h3 style={{ margin: 0, display: 'inline-block' }}>
        <Link
          to="/egies"
          style={{
            textDecoration: `none`,
            color: "white",
            marginRight: '2em'
          }}
        >
          <Images fileName="asLogo" style={{ width: "1em", display: "inline-block", marginBottom: 0 }} />
          lphaStrategies
        </Link>
      </h3>
      <h6
        style={{ display: 'inline-block', marginRight: '1em' }}
      >
        <Link
          to="/egies/produkte"
          style={{
            textDecoration: `none`,
            color: "white"
          }}
        >
          Produkte
        </Link>
      </h6>
      <h6
        style={{ display: 'inline-block' }}
      >
        <Link
          to="/egies/geschichte"
          style={{
            textDecoration: `none`,
            color: "white"
          }}
        >
          Firmengeschichte
        </Link>
      </h6>
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
