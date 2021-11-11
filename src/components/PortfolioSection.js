import * as React from "react"
import { Container, Col } from "react-bootstrap"

// styles
import '../scss/sections.scss';

// images
import RobotImg from "../images/robot.png"
import BiasDetectorImg from "../images/biasdetector.jpg"
import GithubImg from "../images/github.png"
import ASVImg from "../images/asv.jpg"
import FinanceImg from "../images/finance.png"

// data
import * as projects from '../utils/projects.js'

// constants
const image_map  = {
    'robot': RobotImg,
    'biasdetector': BiasDetectorImg,
    'github': GithubImg,
    'asv': ASVImg,
    'finance': FinanceImg,
}

// components
function Card(props) {
    const { project } = props;
    return(
      <a className="card" target="_blank" rel="noreferrer" href={project.link}>
        <div className="card__body">
            <p className="card__title">{project.title}</p>
            <p className="card__description">{project.description}</p>
            <div>
                {project.skills.map( (skill) => {
                    return(
                        <p className="skills__badge">{skill}</p>
                    )
                })}
            </div>
        </div>
        <div className="card__media">
            <img className="card__media-img" src={image_map[project.image]} alt={project.image} />
        </div>
      </a>
    )
}

const PortfolioSection = () => {
    return (
        <Container className="portfolio">
            <Container className="projects">
                {projects.PROJECTS.map( (project) => {
                    return(
                        <Col className="projects__col">
                            <Card project={project} />
                        </Col>
                    )
                })}
            </Container>
        </Container>
    )
}

export default PortfolioSection;
