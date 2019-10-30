import React from "react"
import IconButton from "../Common/IconButton"
import IconText from "./iconText"
import "./styles.scss"

const Footer = () => {
  return (
    <div className="footer-cont" id="contact">
      <div className="section-cont footer-inner-cont">
        <h3 className="footer-title">Want to get in touch?</h3>
        <p className="body-text reg footer-tagline">
          Working on something cool? Want to know more about my work? Let's chat
          about it! <br className="hide-sm" />
          Email is preferred, but text messages and LinkedIn messages work too.
        </p>
        <hr className="title-hr" />
        <div className="footer-contact-cont">
          <IconText link="mailto:ian.hansborough@gmail.com" name="Mail">
            ian.hansborough@gmail.com
          </IconText>
          <IconText link="tel:+14403969920" name="Phone">
            +1 (440) 396-9920
          </IconText>
          <div className="footer-social-cont">
            <IconButton
              name="Github"
              size="20"
              color="#fff"
              link="https://github.com/ianhansborough"
            />
            <IconButton
              name="Linkedin"
              size="20"
              color="#fff"
              link="https://www.linkedin.com/in/ian-hansborough-128ab0a0/"
            />
            <IconButton
              name="stack-overflow"
              size="20"
              color="#fff"
              link="https://stackoverflow.com/users/10448262/ian-hansborough"
            />
          </div>
        </div>
        <p className="body-text sm copyright-text">
          © 2019 Ian Hansborough. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
