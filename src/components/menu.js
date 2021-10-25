import * as React from "react"
import { Row, Col, Button } from "react-bootstrap"

// styles
import '../scss/menu.scss';

// data
import * as constants from '../utils/constants.js'

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

export default Menu;
