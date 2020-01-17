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
    {history.push('/egien')}
  </>
)

export default IndexPage
