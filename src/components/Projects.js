import Smiley from '../images/smiley.png';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { GoBrowser, GoMarkGithub } from 'react-icons/go';
import { AiOutlineCode, } from 'react-icons/ai'

const Projects = () => {
    return (
        <Container className="mt-5 mb-5" id="projects">
            <div style={{textAlign:'center'}} className="mt-4 mb-4">
                <h1 style={{display: 'inline', margin: 0, padding: 0}}>🔧</h1>
                <h1 style={{display: 'inline', margin: 0, textAlign: 'center', textDecoration: 'underline', textDecorationColor: 'green'}}> Projects </h1>
                <h1 style={{display: 'inline', margin: 0, padding: 0}}>⚙️</h1>
            </div>
            <Row xs="1" md="2" lg="3" className="g-4">
                <Col md="4" >
                    <Card className="mt-2">
                        <Card.Header style={headerColor}>Minesweeper Clone 🚩</Card.Header>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">2021</Card.Subtitle>
                            <Card.Text>
                                Cloned Minesweeper to a webpage that tracks your fastest times against other players.<br /><br/>
                                Sign up using an email and compete against your friends!<br /><br/>
                                Created using HTML, CSS, vanilla JavaScript, and Firebase.
                            </Card.Text>
                            <a href="https://chris-phan.github.io/Minesweeper/dist/index.html" target="_blank" rel="noreferrer" style={{color: "black",}}>
                                <GoBrowser style={{fontSize: "calc(30px + 0.5vw)"}} />
                            </a>
                            <a href="https://github.com/chris-phan/Minesweeper" target="_blank" rel="noreferrer" style={{color: "black",}}>
                                <GoMarkGithub style={{fontSize: "calc(30px + 0.5vw"}} />
                            </a>
                        </Card.Body>
                    </Card>

                    <Card className="mt-4" >
                        <Card.Header style={headerColor}>Davis Dining Commons 🥦</Card.Header>
                            <Card.Body>
                                <Card.Subtitle className="mb-2 text-muted">HackDavis 2022</Card.Subtitle>
                                <Card.Text>
                                    Prototype website that builds upon the idea of having the menu of UC Davis' dining commons online.<br/><br/>
                                    Improves the filter options for various  dietary restrictions and streamlines navigation between dining commons.<br/><br/>
                                    Made with React
                                </Card.Text>
                                <a href="https://hansonklau.github.io/DDC/" target="_blank" rel="noreferrer" style={{color: "black",}}>
                                    <GoBrowser style={{fontSize: "calc(30px + 0.5vw)"}} />
                                </a>
                                <a href="https://github.com/HansonKLau/DDC" target="_blank" rel="noreferrer" style={{color: "black",}}>
                                    <GoMarkGithub style={{fontSize: "calc(30px + 0.5vw"}} />
                                </a>
                            </Card.Body>
                    </Card>
                </Col>
                <Col md="4">
                    <Card className="mt-2" >
                        <Card.Header style={headerColor}>Discord Bot 🤖</Card.Header>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">2022</Card.Subtitle>
                            <Card.Text>
                                Made a Discord bot to serve as a to-do list manager and task scheduler.<br/><br/>
                                Also messages me about the latest manga chapter discussions and releases from One Punch Man, Jujutsu Kaisen, My Hero Academia, Chainsaw Man, and Boruto.<br/><br/>
                                Created using Python (nextcord and PRAW) and hosted on repl.it
                            </Card.Text>
                            <a href="https://replit.com/@cruckus/cruckus-Bot?v=1" target="_blank" rel="noreferrer" style={{color: "black",}} >
                                <AiOutlineCode style={{fontSize: "calc(30px + 0.5vw)"}} />
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="4">
                    <Card className="mt-2" >
                        <Card.Header style={headerColor}>This Website! 🌐</Card.Header>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">2022</Card.Subtitle>
                            <Card.Text>
                                Made with React and Bootstrap
                            </Card.Text>
                            <a href="https://chris-phan.github.io/" target="_blank" rel="noreferrer" style={{color: "black",}}>
                                <GoBrowser style={{fontSize: "calc(30px + 0.5vw)"}} />
                            </a>
                            <a href="https://github.com/chris-phan/chris-phan.github.io" target="_blank" rel="noreferrer" style={{color: "black",}}>
                                <GoMarkGithub style={{fontSize: "calc(30px + 0.5vw"}} />
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;

const headerColor = {
    backgroundColor: 'honeydew'
}