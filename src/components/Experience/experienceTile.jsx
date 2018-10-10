import React from "react"
import { Link } from "gatsby"
import "./styles.scss"

const ExperienceTile = ({ exp }) => {
  return (
    <div
      className="exp-tile-cont"
      style={{ backgroundImage: "url(" + exp.tileImage + ")" }}
    >
      <div className="exp-tile-popover">
        <p className="tagline body-text sm">{exp.tagline}</p>
        <p className="name body-text md">{exp.name}</p>
        <Link className="link-btn body-text reg" to={exp.path}>
          View project
        </Link>
      </div>
    </div>
  )
}

export default ExperienceTile
