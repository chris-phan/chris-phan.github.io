import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SiPython, SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiFirebase } from 'react-icons/si';
import { FaReact, FaGitAlt, FaLinux, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { FcLinux } from "react-icons/fc";
import { IoLogoJavascript } from 'react-icons/io'

const Skills = () => {
    return (
        <Container fluid="xs" className="mb-5" style={{paddingTop: "2rem"}} id="skills">
            <div style={{textAlign:'center', padding: 0}} className="mt-4 mb-4">
				<h1 style={{display: 'inline', margin: 0, padding: 0}}>🔌</h1>
				<h1 style={{display: 'inline', margin: 0, padding: 0, textAlign: 'center', textDecoration: 'underline', textDecorationColor: 'teal'}}> Skills </h1>
				<h1 style={{display: 'inline', margin: 0, padding: 0}}>💡</h1>
			</div>
            <Row style={{width: "100%", margin: "0", marginBottom: '5vh'}}>
				<Col xs="0" md="2"></Col>
                <Col xs="6" md="4" style={{padding: "0"}}>
                    <h4 style={{textDecoration: "underline steelblue", textAlign: "center"}}>
                        Languages
                    </h4>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Python&nbsp;
                        <SiPython style={{fontSize: "25px", color: "navy"}} />
                    </div>
                    <br/>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        C++&nbsp;
                        <SiCplusplus style={{fontSize: "25px", color: "royalblue"}} />
                    </div>
                    <br/>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        JavaScript&nbsp;
                        <SiJavascript style={{fontSize: "25px", color: "gold", backgroundColor: "black"}} />
                    </div>
                    <br/>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        HTML&nbsp;
                        <SiHtml5 style={{fontSize: "25px", color: "orange"}} />
                    </div>
                    <br/>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        CSS&nbsp;
                        <SiCss3 style={{fontSize: "25px", color: "royalblue"}} />
                    </div>
                    <br/>
				</Col>
                <Col xs="6" md="4" style={{padding: "0"}}>
                    <h4 style={{textDecoration: "underline steelblue", textAlign: "center"}}>
                        Technologies
                    </h4>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        React&nbsp;
                        <FaReact style={{fontSize: "25px", color: "darkturquoise"}} />
                    </div>
                    <br/>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Git&nbsp;
                        <FaGitAlt style={{fontSize: "25px", color: "red"}} />
                    </div>
                    <br/>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Linux&nbsp;
                        <FcLinux style={{fontSize: "25px", color: "black"}} />
                    </div>
                    <br/>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Node.js&nbsp;
                        <FaNodeJs style={{fontSize: "25px", color: "green"}} />
                    </div>
                    <br/>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Bootstrap&nbsp;
                        <FaBootstrap style={{fontSize: "25px", color: "slateblue"}} />
                    </div>
                    <br/>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        Firebase&nbsp;
                        <SiFirebase style={{fontSize: "25px", color: "gold"}} />
                    </div>
				</Col>
				<Col xs="0" md="2"></Col>
            </Row>
        </Container>
    )
}

export default Skills;