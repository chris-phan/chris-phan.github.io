import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Education = () => {
    return (
        <Container fluid="xs" className="mb-5" style={{paddingTop: "2rem"}} id="education">
            <div style={{textAlign:'center', padding: 0}} className="mt-4 mb-4">
				<h1 style={{display: 'inline', margin: 0, padding: 0}}>📚</h1>
				<h1 style={{display: 'inline', margin: 0, padding: 0, textAlign: 'center', textDecoration: 'underline', textDecorationColor: 'slateblue'}}> Education </h1>
				<h1 style={{display: 'inline', margin: 0, padding: 0}}>📐</h1>
			</div>
            <Row style={{width: "100%", margin: "0", marginBottom: '5vh'}}>
				<Col xs="1" md="2" lg="3" style={{padding: 0}}></Col>
                <Col style={{padding: 0, paddingBottom: "5vh", borderBottom: "1px solid black"}}>
                    <h4>Piedmont Hills High School</h4>
                    <p style={{fontSize: "13px", color: "gray"}} >2017-2021, GPA: 4.0</p>
                    AP Computer Science Principles (2019-2020)<br/><br/>
                    AP Computer Science A (2020-2021)<br/>
                </Col>
				<Col xs="1" md="2" lg="3" style={{padding: 0}}></Col>
            </Row>
            <Row style={{width: "100%", margin: "0", marginBottom: '12vh'}}>
				<Col xs="1" md="2" lg="3" style={{padding: 0}}></Col>
                <Col style={{padding: 0}}>
                    <h4>University of California, Davis</h4>
                    <p style={{fontSize: "13px", color: "gray"}} >Expected Graduation: June 2025, GPA: 3.97</p>
                    ECS 36A: Programming &amp; Problem Solving (Fall 2021)<br/><br/>
                    ECS 20: Discrete Math (Winter 2022)<br/><br/>
                    ECS 36B: Software Development &amp; Object-Oriented Programming in C++ (Winter 2022)<br/><br/>
                    ECS 98F: The Missing CS Quarter (Winter 2022)<br/><br/>
                    ECS 36C: Data Structures, Algorithms, &amp; Programming (Spring 2022)<br/><br/>
                    ECS 50: Computer Organization &amp; Machine-Dependent Programming (Fall 2022)<br/><br/>
                    ECS 122A: Algorithm Design &amp; Analysis (Fall 2022)<br/><br/>
                </Col>
				<Col xs="1" md="2" lg="3" style={{padding: 0}}></Col>
            </Row>
        </Container>
    )
}

export default Education;