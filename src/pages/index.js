import * as React from "react"
import { useState, useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

// images
import ArrowImg from "../images/arrow.gif"

// styles
import '../scss/main.scss';
import '../scss/menu.scss';
import '../scss/sections.scss';

// data
const sections = [
  'about',
  'portfolio',
  'contact'
]

// components
function AboutSection(props) {
  return(
    <Container className="about">
      <h1>amber donnelly (they/them)</h1>
      <h2>software engineer</h2>
      <br />
      <p>
        <strong>current role:</strong> full-stack engineer @ <a href="">momentive</a>
      </p>
      <br />
      <p>
        <strong>education:</strong> engineering physics // ubc vancouver // may 2020
      </p>
      <br />
      <p>
        <strong>interests:</strong> film analysis, sci-fi novels, videogames, travel, diversity equity &amp; inclusion 
      </p>
      <br />
      {/* <a href="">resume</a> */}
    </Container>
  )
}

function PortfolioSection(props) {
  return(
    <Container className="portfolio">
      <p>
        projects will go here :)
      </p>
    </Container>
  )
}

function ContactSection(props) {
  return(
    <Container className="portfolio">
      <p>
        this is going to be an email form!
      </p>
      <br />
      <p>
        but in the meantime, here's my <a target="_blank" href="https://www.linkedin.com/in/amberdonnelly/">linkedin</a>
      </p>
    </Container>
  )
}

function SectionPage(props) {
  const { section } = props;
  return(
    <Container className="section-page">
      {section === "about" && <AboutSection />}
      {section === "portfolio" && <PortfolioSection />}
      {section === "contact" && <ContactSection />}
    </Container>
  )
}

function SectionMenu(props) {
  const { section, onClick } = props;
  return(
    <Row className="menu">
      <Col className="menu__space">
        <Button className="menu__item" onClick={onClick}>
          home
        </Button>
      </Col>      
      {sections.map( (menuSection) => {
        return (
          <Col className="menu__space">
            <Button className={menuSection === section ? "menu__item menu__item-selected" : "menu__item"} onClick={onClick}>
              {menuSection}
            </Button>
          </Col>
        )
    })}
    </Row>
  )
}

// markup
const HomePage = () => {
  const [section, setSection] = useState(null);
  const [timer, setTimer] = useState(5.5); // set timer to 15s on page load
  const [showArrow, setShowArrow] = useState(true);
  const [shouldRedirect, setshouldRedirect] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 0.5), 500);
    } else if (timer === 0) {
      const $about = document.querySelector('.sections__link');
      const $arrow = document.querySelector('.arrow');
      if (!!$about) {
        $about.style.color = "#4800D4";
      }
      setTimeout(() => {
        // only want to be redirected once
        setshouldRedirect(false);
        // only want to see the arrow once
        setShowArrow(false);
        // handle redirect
        if (shouldRedirect) {
          setSection("about");
        }
      }, 500);
    }
  })

  function sectionSelected(e) {
    setTimer(-1);
    setshouldRedirect(false);
    const selectionText =  e.target.innerText
    if (selectionText === "home") {
      setSection(null);
    } else {
      setSection(selectionText);
    }
  }

  function closeSection() {
    setSection(null);
  }

  return (
    <main className="home">
      {/* Page setting */}
      <title>amber</title>

      {/* If no section is selected, render the options */}
      {!section && 
        <Container className="sections">
          {sections.map( (section) => {
            return ( 
              <Row className="sections__row">
                <Button className="sections__link" onClick={sectionSelected}>
                  {showArrow && section === "about" && <img className="arrow" src={ArrowImg} />}
                  {section}
                </Button>
              </Row>
          )
          })}
        </Container>
      }

      {/* Render whichever section is selected */}
      {!!section && 
        <Container className="page">
          <SectionMenu section={section} onClick={sectionSelected} />
          <SectionPage section={section} />
        </Container>
      }

    </main>
  )
}

export default HomePage
