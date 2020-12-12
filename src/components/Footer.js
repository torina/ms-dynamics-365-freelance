import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

export default () => {
  const { author } = useStaticQuery(query).site.siteMetadata
  return (
    <div className="footer text-muted text-center">
      <span className="m-auto">
        <b>{author}</b> &copy; {new Date().getFullYear()}. 
        <Link as={Link} to="/datenschutz/" title="Datenschutzerklärung"> Datenschutzerklärung</Link>
        {/* Handmade with&nbsp;
        <span className="heart">&nbsp;❤&nbsp;</span>  */}
      </span>
    </div>
  )
}
const query = graphql`
  query Author {
    site {
      siteMetadata {
        author
      }
    }
  }
`
