import React, { Component } from "react"
import NavItem from "./navItem"
import * as Icon from "react-feather"
import resume from "../../files/ian-hansborough-resume-2018.pdf"
import { Link } from "gatsby"
import "./styles.scss"

export default class NavBar extends Component {
  render() {
    const { activeNavIndex, altNav } = this.props

    const renderNavItems = mobile => {
      const navItems = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "About", path: "/#about" },
        { name: "Resume", path: resume, download: true },
        { name: "Contact", path: "/#contact" },
      ]
      return navItems.map((navItem, index) => {
        return (
          <NavItem
            key={index}
            item={navItem}
            toggle={toggleHamburgerNav}
            alt={altNav}
            mobile={mobile}
            active={activeNavIndex === index}
          />
        )
      })
    }

    const toggleHamburgerNav = () => {
      const currentState = document.body.style.overflow === "hidden"
      document.getElementById("hamburger-cont").classList.toggle("active")
      document.body.style.overflow = currentState ? "initial" : "hidden"
    }

    return (
      <div className="nav-bar-cont">
        <div className="nav-left-cont">
          <div className={"hide-sm nav-logo " + (altNav ? "alt" : "")} />
          <Link to="/" className="sm-only nav-logo alt" />
        </div>
        <div className="nav-right-cont hide-sm">{renderNavItems()}</div>
        <div className="nav-right-cont sm-only">
          <Icon.Menu
            icon="menu"
            size="36"
            color="#1a1a1a"
            onClick={toggleHamburgerNav}
          />
        </div>
        <div id="hamburger-cont" className="hamburger-cont">
          <Icon.X
            icon="x"
            size="36"
            color="#1a1a1a"
            className="hamburger-close-btn"
            onClick={toggleHamburgerNav}
          />
          <div className="hamburger-inner-cont">{renderNavItems(true)}</div>
        </div>
      </div>
    )
  }
}
