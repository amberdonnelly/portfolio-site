import * as React from "react"
import { useState, useEffect } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

// components
import AboutSection from "../components/AboutSection"
import PortfolioSection from "../components/PortfolioSection"
import ContactSection from "../components/ContactSection"

// images
import ArrowImg from "../images/arrow.gif"

// styles
import '../scss/main.scss';
import '../scss/menu.scss';

// data
import * as constants from '../utils/constants.js'

// components
function Menu(props) {
  const { section, onClick } = props;
  return(
      <Row className="menu">
          <Col className="menu__space">
              <Button className="menu__item" onClick={onClick}>
                  home
              </Button>
          </Col>      
          {constants.SECTIONS.map( (menuSection) => {
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

  return (
    <main className="home">
      {/* Page setting */}
      <title>amber</title>

      {/* If no section is selected, render the options */}
      {!section && 
        <Container className="sections">
          {constants.SECTIONS.map( (section) => {
            return ( 
              <Row className="sections__row">
                <Button className="sections__link" onClick={sectionSelected}>
                  {showArrow && section === "about" && <img className="arrow" src={ArrowImg} alt="arrow pointing to about" />}
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
          <Menu section={section} onClick={sectionSelected} />
          <SectionPage section={section} />
        </Container>
      }

    </main>
  )
}

export default HomePage
