import * as React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

// styles
import '../scss/main.scss';

// data
const sections = [
  {
    'name': 'about me',
    'link': '/about'
  },
  {
    'name': 'portfolio',
    'link': '/portfolio'
  }
]

// markup
const HomePage = () => {
  return (
    <main class="home">
      <title>home</title>
      <Container className="sections">
        {sections.map( (section) => {
          return ( 
            <Row className="sections__row">
              <a className="sections__link" href={section.link}>{section.name}</a>
            </Row>
        )
        })}
        <Row className="sections__row">
          <Button className="sections__link sections__link-contact">contact</Button>
        </Row>
      </Container>
    </main>
  )
}

export default HomePage
