import React from "react"
import { IconButton, ArrowButton } from "../Common/IconButton"
import IconText from "../Footer/iconText"
import moment from "moment"
import "./styles.scss"

// TODO: idea. instead of just saying amazing, make it one of those changing words
// that animates between a bunch of different relevant words.

export const HomeJumbotron = () => {
  return (
    <div className="jumbotron-cont home">
      <h5>Hi, I'm</h5>
      <h1>Ian Hansborough</h1>
      <h4>Let's build something amazing.</h4>
      <hr className="title-hr" />
      <div className="icon-cont-outer">
        <div className="icon-cont">
          <div className="icon-cont-left">
            <IconButton
              className="hide-sm"
              name="Github"
              size="28"
              color="#fff"
              link="https://github.com/ianhansborough"
            />
            <IconButton
              className="hide-sm"
              name="Linkedin"
              size="28"
              color="#fff"
              link="https://www.linkedin.com/in/ian-hansborough-128ab0a0/"
            />
          </div>
          <div className="icon-cont-right">
            <IconButton
              className="hide-sm"
              name="Mail"
              size="28"
              color="#fff"
              link="mailto:ian.hansborough@gmail.com"
            />
            <IconButton
              className="hide-sm"
              name="stack-overflow"
              size="28"
              color="#fff"
              link="https://stackoverflow.com/users/10448262/ian-hansborough"
            />
          </div>
        </div>
        <div className="icon-cont lower">
          <ArrowButton
            className="hide-sm"
            name="ArrowDown"
            size="28"
            color="#61EBFF"
            anchor="about"
          />
        </div>
      </div>
    </div>
  )
}

export const ProjectsJumbotron = () => {
  return (
    <div className="jumbotron-cont projects">
      <h1>My Projects</h1>
      <h5 className="projects-tagline">
        A few of the more memorable experiences
        <br className="hide-sm" />
        that I've been involved with
      </h5>

      <hr className="title-hr" />
      <div className="icon-cont">
        <ArrowButton
          name="ArrowDown"
          size="28"
          color="#61EBFF"
          anchor="projects"
        />
      </div>
    </div>
  )
}

export const ProjectJumbotron = ({ exp }) => {
  const renderDateRange = (sd, ed) => {
    sd = moment(sd).format("MMMM, YYYY")
    ed = ed ? moment(ed).format("MMMM, YYYY") : "Present"
    return String(sd) + " to " + String(ed) + "."
  }
  return (
    <div className="section-cont">
      <div className="project-jumbotron-cont">
        <div className="left-cont">
          <IconText
            name="MapPin"
            color="#1a1a1a"
            size="16"
            className="project-header-tagline">
            {exp.frontmatter.location} - {exp.frontmatter.tagline}
          </IconText>
          <h1>{exp.frontmatter.name}</h1>
          <p className="body-text md project-subtitle">
            I was involved as a {exp.frontmatter.role} from{" "}
            {renderDateRange(
              exp.frontmatter.startDate,
              exp.frontmatter.endDate
            )}
          </p>
          <hr className="title-hr alt" />
        </div>
        <div
          className="right-cont"
          style={{ backgroundImage: "url(" + exp.frontmatter.jtImage + ")" }}
        />
      </div>
    </div>
  )
}
// #8CB3FF
