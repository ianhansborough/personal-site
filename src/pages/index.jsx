import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { HomeJumbotron } from "../components/Jumbotron"
import About from "../components/About"
import Experience from "../components/Experience"

const IndexPage = ({ data }) => {
  // destructure index data from graphql query
  const { edges: exps } = data.experiences
  const { edges: readings } = data.readings
  const renderReadings = () => {
    return readings.map((reading, index) => {
      return <li key={index}>{reading.node.frontmatter.title}</li>
    })
  }

  return (
    <Layout>
      <HomeJumbotron />
      <About />
      <Experience exps={exps} />
    </Layout>
  )
  // <ul>{renderReadings()}</ul>
}

export const pageQuery = graphql`
  query IndexQuery {
    experiences: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "exp" } } }
    ) {
      edges {
        node {
          frontmatter {
            name
            tagline
            path
            tileImage
          }
        }
      }
    }
    readings: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "reading" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
export default IndexPage
