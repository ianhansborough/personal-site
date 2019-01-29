import React from "react"
import ExperienceTile from "./experienceTile"
import { Link } from "gatsby"

const Experience = ({ exps }) => {
  const renderExperiences = () => {
    return exps
      .slice(0, 3)
      .map((exp, index) => (
        <ExperienceTile key={index} exp={exp.node.frontmatter} />
      ))
  }
  return (
    <div className="exp-cont">
      <div className="section-cont">
        <h3 className="section-title">What I've done so far</h3>
        <div className="exp-inner-cont">
          <ExperienceTile
            key="1"
            exp={
              exps.filter(exp => exp.node.frontmatter.path === "/equitai")[0]
                .node.frontmatter
            }
          />
          <ExperienceTile
            key="2"
            exp={
              exps.filter(exp => exp.node.frontmatter.path === "/vest")[0].node
                .frontmatter
            }
          />
          <ExperienceTile
            key="3"
            exp={
              exps.filter(exp => exp.node.frontmatter.path === "/hatchli")[0]
                .node.frontmatter
            }
          />
        </div>
        <div className="exp-inner-cont">
          <Link
            to="/projects"
            className="link-btn alt body-text md all-projects-btn">
            View all projects
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Experience
