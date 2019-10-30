import React from "react"
import "./styles.scss"

const About = () => {
  return (
    <div className="section-cont about-cont" id="about">
      <h3 className="section-title">A little about myself</h3>
      <div className="about-inner-cont">
        <div className="left" />
        <div className="right">
          <p className="body-text md">
            I’m a 24 year old software engineer with a knack for
            problem-solving, an inventive mind, and a passion for building
            things that make a difference.
          </p>
          <p className="body-text md">
            This constant urge to build and create led me to discover
            programming back in 2015; teaching myself Swift in order to build
            out a mobile app idea. This newfound hobby quickly consumed much of
            my time/attention, and in 2016 I took a 2 year sabbatical from
            school after receiving investment to pursue the app I had built.
          </p>
          <p className="body-text md">
            Those two years were nothing short of incredible, and I feel so
            blessed to have experienced the wild world of tech startups
            firsthand; both as a founder and as a private contractor.
          </p>
          <p className="body-text md">
            I’m currently finishing up my studies as a computer science
            engineering student at The Ohio State University, all the while
            keeping the door open for whatever awesome opportunities I might
            encounter next. Want to get in touch? Drop me a line via LinkedIn,
            Facebook, or email below!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
