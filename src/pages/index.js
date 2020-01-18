import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <>
    <Link
      to="/egien"
    >
      Deutsch
    </Link>
    <Link
      to="/egies"
    >
      English
    </Link>
    {(typeof history !== 'undefined') && history.push('/egien')}
  </>
)

export default IndexPage
