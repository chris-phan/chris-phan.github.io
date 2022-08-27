import CamelBG from '../images/camels.png';
import name_bg from '../images/name_bg.jpg'
import face_left from '../images/face_left.png';
import face_right from '../images/face_right.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Name = () => {
    return (
        <div style={divStyle} id="name">
            <Container>
                <Row>
                    <h1 style={h1Style}>Chris Phan</h1>
                </Row>
                <Row>
                    <Col>
                        <img id="faceleft" src={face_left} style={fl_style} hidden="true" />
                    </Col>
                    <Col>
                        <img id="faceright" src={face_right} style={fr_style} hidden="true" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Name;

const divStyle = {
    backgroundImage: 'url(' + name_bg + ')',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    height: '120%',
    position: 'relative',
    textAlign: 'center',
    backgroundColor: 'white',
    zIndex: '0',
}

const h1Style = {
    position: 'fixed',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    fontSize: '4em',
    color: 'black',
    textDecoration: 'overline double slategray 3px',
    zIndex: '0'
}

const fl_style = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: 'calc(40px + 5vw)',
    zIndex: '0'
}

const fr_style = {
    position: 'fixed',
    bottom: '0',
    right: '0',
    width: 'calc(150px + 10vw)',
    zIndex: '0'
}