import * as React from "react"
import { Container } from "react-bootstrap"

// styles
import '../scss/sections.scss';

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

export default AboutSection;
