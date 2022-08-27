import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SecretButton from './SecretButton.js'

const Footer = () => {
    return (
        <footer style={footerStyle} id="footer">
            <Container fluid>
                <Row>
                    <Col className="text-center" >
                        <div style={{marginTop: "2vh"}}>
                            <a href="https://github.com/chris-phan" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="3x" fixedWidth inverse />
                            </a>
                            <a href="https://www.linkedin.com/in/christopher-phan-0a652a22a/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="3x" fixedWidth inverse />
                            </a>
                        </div>
                    </Col>
                </Row>
                <br/>
                <Row style={{marginBottom: "12vh"}} >
                    <Col className="text-center" >
                        <FontAwesomeIcon icon={faAt} size="xl" inverse />
                        <p style={emailStyle}>
                            chris_p9974@yahoo.com
                        </p> 
                    </Col>
                </Row>
                <Row>
                    <Col xs="1" lg="3" style={{padding: "0"}}></Col>
                    <Col className="text-center" >
                        <SecretButton />
                    </Col>
    				<Col xs="1" lg="3" style={{padding: "0"}}></Col>
                </Row>
                <br/>
            </Container>
        </footer>
    )
}

export default Footer;

const footerStyle = {
    backgroundColor: 'black',
    width: '100%',
    position: 'relative',
}

const emailStyle = {
    margin: 0,
    marginLeft:"0.5vw",
    display: "inline",
    color: 'white',
    fontSize: 'calc(12px + 0.25vw)',
}
