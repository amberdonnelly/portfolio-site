import * as React from "react"
import { Container } from "react-bootstrap"

// styles
import '../scss/sections.scss';

const AboutSection = () => {
    return(
      <Container className="about">
        <h1 className="title">amber donnelly (they/them)</h1>
        <h2 className="subtitle">software engineer</h2>
        <br />
        <p><strong>current role:</strong> full-stack engineer @ <a target="_blank" href="https://www.linkedin.com/company/momentive.ai/">momentive</a></p>
        <br />
        <p><strong>education:</strong> engineering physics // ubc vancouver // may 2020</p>
        <br />
        <p><strong>skills:</strong> lately I've been using a lot of python, javascript, react, html/css, graphql</p>
        <br />
        <p><strong>interests:</strong> film analysis, sci-fi novels, videogames, travel, diversity equity &amp; inclusion </p>
        <br />
        {/* <a href="">resume</a> */}
      </Container>
    )
}

export default AboutSection;
