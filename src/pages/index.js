import * as React from "react"
import { useState, useEffect } from "react"
import { Container, Row, Button } from "react-bootstrap"

// images
import ArrowImg from "../images/arrow.gif"

// styles
import '../scss/main.scss';
import '../scss/section.scss';

// data
const sections = [
  'about',
  'portfolio',
  'contact'
]

// components
function AboutSection(props) {
  return(
    <></>
  )
}

function PortfolioSection(props) {
  return(
    <></>
  )
}

function ContactSection(props) {
  return(
    <></>
  )
}

function SectionPage(props) {
  const { section, onClose } = props;
  return(
    <Container className="section-page">
      <Button className="section-page__close" onClick={onClose}>&#8592; Go Back</Button>
      <h2 className="section-page__title">{section}</h2>
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
        setTimer(-1);
        // only want to see the arrow once
        setShowArrow(false);
        // handle redirect
        setSection("about");
      }, 500);
    }
  })

  function sectionSelected(e) {
    setSection(e.target.innerText);
  }

  function closeSection() {
    setSection(null);
  }

  return (
    <main className="home">
      {/* Page setting */}
      <title>home</title>

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
      {!!section && <SectionPage section={section} onClose={closeSection} />}

    </main>
  )
}

export default HomePage
