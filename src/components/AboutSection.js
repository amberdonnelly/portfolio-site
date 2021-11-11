import * as React from "react"
import { Container, Row, Col } from "react-bootstrap"

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
          <Row className="about__row">
            <Col className="about__row-leftcol">[2020:]</Col>
            <Col className="about__row-midcol"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/momentive.ai/">momentive ai</a> (previously surveymonkey)</Col>
            <Col className="about__row-rightcol">software engineer (fullstack)</Col>  
          </Row>
          <Row className="about__row">
            <Col className="about__row-leftcol">[2019]</Col>
            <Col className="about__row-midcol"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/momentive.ai/">momentive ai</a> (previously surveymonkey)</Col>
            <Col className="about__row-rightcol">software engineer intern (backend)</Col>  
          </Row>
          <Row className="about__row">
            <Col className="about__row-leftcol">[2018]</Col>
            <Col className="about__row-midcol"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/elastic-path/">elastic path</a></Col>
            <Col className="about__row-rightcol">software engineer intern (backend &amp; devops)</Col>
          </Row>
        </div>
        <div className="about__section">
            <p className="about__section-title">education</p>
            <Row className="about__row">
              <Col className="about__row-leftcol">[2015:2020]</Col>
              <Col className="about__row-midcol">university of british columbia</Col>
              <Col className="about__row-rightcol">BASc in <a target="_blank" rel="noreferrer" href="https://www.engphys.ubc.ca/">engineering physics</a></Col>
            </Row>
            <Row className="about__row">
              <Col className="about__row-leftcol">[2011:2015]</Col>
              <Col className="about__row-midcol">vincent massey highschool</Col>
              <Col className="about__row-rightcol">highschool diploma &amp; 5 ap credits</Col>
            </Row>
        </div>
        <div className="about__section">
          <p className="about__section-title">skills</p>
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
        </div>
        <div className="about__section">
          <p className="about__section-title">volunteer experience</p>
          <Row className="about__row">
            <Col className="about__row-leftcol">[2015:2020]</Col>
            <Col className="about__row-midcol">university of british columbia</Col>
            <Col className="about__row-rightcol">BASc in <a target="_blank" rel="noreferrer" href="https://www.engphys.ubc.ca/">engineering physics</a></Col>
          </Row>
          <Row className="about__row">
            <Col className="about__row-leftcol">[2011:2015]</Col>
            <Col className="about__row-midcol">vincent massey highschool</Col>
            <Col className="about__row-rightcol">highschool diploma &amp; 5 ap credits</Col>
          </Row>
        </div>
        <div className="about__section">
          <p className="about__section-title">interests</p>
          <p className="about__section-body">film analysis, sci-fi novels, videogames, languages (czech &amp; spanish &amp; french), travel, diversity equity &amp; inclusion, aviation</p>
        </div>
      </Container>
    )
}

export default AboutSection;
