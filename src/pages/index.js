import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <>
    <Link
      to="/egies"
    >
      Click here
    </Link>
    {(typeof window !== 'undefined') && (window.location.href = '/egies') && undefined}
  </>
)

export default IndexPage
