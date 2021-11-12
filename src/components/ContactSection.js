import * as React from "react"
import { Container } from "react-bootstrap"

// styles
import '../scss/sections.scss';

const ContactSection = () => {
    return (
        <Container className="contact">

            <p>this is going to be an email form!</p>
            <br />
            <p>but in the meantime, here's my <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/amberdonnelly/">linkedin</a></p>
        </Container>
    )
}

export default ContactSection;
