import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { ProjectsJumbotron } from "../components/Jumbotron"
import ExperienceTile from "../components/Experience/experienceTile"
import "./styles.scss"

const Projects = ({ data }) => {
  const { edges: exps } = data.allMarkdownRemark
  const renderExperiences = () =>
    exps
      .sort(
        (a, b) =>
          new Date(a.node.frontmatter.startDate) <
          new Date(b.node.frontmatter.name)
      )

      .map((exp, index) => {
        return <ExperienceTile key={index} exp={exp.node.frontmatter} />
      })

  return (
    <Layout>
      <ProjectsJumbotron />
      <div className="section-cont projects-cont" id="projects">
        {renderExperiences()}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query projectsQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "exp" } } }) {
      edges {
        node {
          frontmatter {
            name
            tagline
            tileImage
            path
          }
        }
      }
    }
  }
`
export default Projects
