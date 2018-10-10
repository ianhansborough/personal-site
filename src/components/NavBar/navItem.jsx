import React from "react"
import { navigate } from "gatsby"
import "./styles.scss"

const NavItem = ({ children, item, alt, mobile, toggle }) => {
  const navigateToPage = () => {
    mobile && toggle()
    navigate(item.path)
  }
  return (
    <div className={"nav-item-cont " + (mobile ? "mobile " : "")}>
      {!item.download && (
        <div
          onClick={navigateToPage}
          className={
            "nav-item body-text reg " +
            (alt ? "alt " : "") +
            (mobile ? "mobile " : "")
          }
          to={item.path || "/"}
        >
          {item.name}
        </div>
      )}
      {item.download && (
        <a
          className={
            "nav-item body-text reg " +
            (alt ? "alt " : "") +
            (mobile ? "mobile " : "")
          }
          href={item.path}
          download
        >
          {item.name}
        </a>
      )}
    </div>
  )
}

export default NavItem
