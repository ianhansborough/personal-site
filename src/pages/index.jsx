import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { HomeJumbotron } from "../components/Jumbotron"
import About from "../components/About"
import Experience from "../components/Experience"

// TODO: Add in cloudfront for chaching and better availability
// TODO: Set up s3-deploy cli (be sure to clear cloudfront cache)
// TODO: Set up SSL

const IndexPage = ({ data }) => {
  const { edges: exps } = data.experiences
  const { edges: readings } = data.readings
  // const renderReadings = () => {
  //   return readings.map((reading, index) => {
  //     return <li key={index}>{reading.node.frontmatter.title}</li>
  //   })
  // }

  return (
    <Layout>
      <HomeJumbotron />
      <About />
      <Experience exps={exps} />
    </Layout>
  )
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
