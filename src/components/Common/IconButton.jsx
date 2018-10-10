import React from "react"
import PropTypes from "prop-types"
import FeatherIcon from "feather-icons-react"
import "./styles.scss"

export const IconButton = ({ name, size, color, link }) => {
  const renderStackOverflowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      width={size}
      height={size}>
      <path fill="#fff" d="M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z" />
      <path
        fill="#fff"
        d="M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z"
      />
    </svg>
  )
  return (
    <a href={link} className="icon-btn" style={{ borderColor: color }}>
      {name !== "stack-overflow" ? (
        <FeatherIcon icon={name} size={size} color={color} />
      ) : (
        renderStackOverflowIcon()
      )}
    </a>
  )
}

export const ArrowButton = ({ name, size, color, anchor }) => {
  const el = document.getElementById(anchor)
  const yLoc = el
    ? el.getBoundingClientRect().top + el.scrollTop
    : window.innerHeight * 0.8
  return (
    <div
      onClick={() => {
        window.scrollTo({ top: yLoc, left: 0, behavior: "smooth" })
      }}
      className="icon-btn"
      style={{ borderColor: color }}>
      <FeatherIcon icon={name} size={size} color={color} />
    </div>
  )
}

const pt = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
const dp = {
  link: "#",
  size: "28",
  color: "#fff",
}

IconButton.propTypes = pt
ArrowButton.propTypes = pt

IconButton.defaultProps = dp
ArrowButton.defaultProps = dp

export default IconButton
