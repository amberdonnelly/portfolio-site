import * as React from "react"
import { Container } from "react-bootstrap"

// styles
import '../scss/sections.scss';

// images
import DocIcon from "../images/doc.png"

// data
import * as about from '../utils/about.js'

const AboutSection = () => {
    return(
      <Container className="about">
        <div className="about__header">
          <a className="about__header-resume" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1NPeqeRVCZzkGRIBDgHopk90GtRFWWYkL/view?usp=sharing">
            <span className="tooltiptext">resume</span>
            <img className="resume" src={DocIcon} />
          </a>
          <div className="about__header-title">
            <p><strong>amber donnelly</strong> (they/them)</p>
            <p>software engineer</p>
          </div>
        </div>
        <br />
        <div className="about__section">
          <p className="about__section-title">professional experience</p>
          <p className="about__section-body">
            2020 - present: software engineer @ <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/momentive.ai/">momentive</a>
            {/* <br />
            2019 (4mo): software engineer intern / <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/momentive.ai/">momentive</a>
            <br />
            2018 (8mo): software engineer intern / elastic path  */}
          </p>
        </div>
        <div className="about__section">
            <p className="about__section-title">education</p>
            <p className="about__section-body">BASc in <a target="_blank" rel="noreferrer" href="https://www.engphys.ubc.ca/">engineering physics</a> from ubc vancouver (2020)</p>
        </div>
        <p><strong>skills</strong></p>
        {about.SKILLS.map( (skill_section) => {
          return(
              <div className="skills">
                <p className="skills__title">{skill_section.section}</p>
                {skill_section.list.map( (skill) => {
                  return(
                    <p className="skills__badge">{skill}</p>
                  )
                })}
              </div>
          )
        })}
        <div className="about__section">
          <p className="about__section-title">interests</p>
          <p className="about__section-body">film analysis, sci-fi novels, videogames, languages (czech &amp; spanish), travel, diversity equity &amp; inclusion</p>
        </div>
      </Container>
    )
}

export default AboutSection;
