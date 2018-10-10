import React from "react"
import FeatherIcon from "feather-icons-react"
import PropTypes from "prop-types"
import "./styles.scss"

const IconText = ({ children, name, size, color, link }) => {
  return (
    <a
      href={link}
      className="icon-text body-text reg"
      style={{ color: color, fontSize: size + "px" }}
    >
      <FeatherIcon icon={name} size={size} color={color} />
      {children}
    </a>
  )
}

IconText.propTyps = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

IconText.defaultProps = {
  size: "18",
  color: "#fff",
  link: "#",
}

export default IconText
