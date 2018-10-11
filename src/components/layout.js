import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import NavBar from "./NavBar"
import Footer from "./Footer"
import "./styles.scss"

const Layout = ({ children, activeNavIndex, altNav }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: "Ian Hansborough's personal website.",
            },
            {
              name: "keywords",
              content: "Ian Hansorough, developer, software",
            },
          ]}>
          <html lang="en" />
        </Helmet>
        <div className="site-cont">
          <NavBar altNav={altNav} activeNavIndex={activeNavIndex} />
          {children}
          <Footer />
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
