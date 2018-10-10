import React from "react"
import Layout from "../components/layout"
import { ProjectJumbotron } from "../components/Jumbotron"
import "./styles.scss"

export default function ExpDetail({ data }) {
  const { markdownRemark: exp } = data

  return (
    <Layout altNav="True">
      <ProjectJumbotron exp={exp} />
      <div
        className="section-cont project-content-cont"
        dangerouslySetInnerHTML={{ __html: exp.html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query expByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        name
        tagline
        tileImage
        jtImage
        role
        location
        startDate
        endDate
      }
    }
  }
`
