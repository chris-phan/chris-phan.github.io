import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Face from '../images/face.png'

const IntroBlurb = () => {
	return (
		<Container fluid="xs" className="mb-5" style={{paddingTop: "2rem"}} id="introblurb">
			<div style={{textAlign:'center', padding: 0}} className="mt-4 mb-4">
				<h1 style={{display: 'inline', margin: 0, padding: 0}}>☀️</h1>
				<h1 style={{display: 'inline', margin: 0, padding: 0, textAlign: 'center', textDecoration: 'underline', textDecorationColor: 'darkkhaki'}}> About Me </h1>
				<h1 style={{display: 'inline', margin: 0, padding: 0}}>🌻</h1>
			</div>
			<Row style={{width: "100%", margin: "0"}}>
				<Col style={{padding: "0"}}>
					<img src={Face} style={centerImg} /><br/>
				</Col>
			</Row>
			<Row style={{width: "100%", margin: "0", marginBottom: '12vh'}}>
				<Col xs="1" lg="3" style={{padding: "0"}}></Col>
				<Col>
					Hey, I'm Chris, a second year computer science student at UC Davis ('25).<br/><br/>
					Most of my personal projects are web related, but I have dabbled in other areas.<br/><br/>
					Let me know how you got here, ask me about my sunflowers, give me recommendations for platformers and rogue-likes, or just say hello using the information at <a href="#footer" style={linkStyle} >the bottom of the page</a>.<br/>
				</Col>
				<Col xs="1" lg="3" style={{padding: "0"}}></Col>
			</Row>
		</Container>
	);
}

export default IntroBlurb;

const divStyle = {
	width: 'auto',
	height: 'auto',
	// backgroundColor: '#5e2f99',
	// position: 'relative',
	// zIndex: 1,
};

const h1Style = {
	width: '90%',
	margin: 'auto',
	color: 'black',
	fontFamily: 'Trebuchet MS',
	fontSize: 'calc(12px + 2vw)',
	textAlign: 'center'
}

const textStyle = {
	margin: 'auto',
	color: 'black',
};

const ulStyle = {
	margin: '0.5vh'
}

const bStyle = {
	// fontSize: 'calc(12px + 0.5vw)',
	color: 'darkcyan'
}

const linkStyle = {
	textDecoration: 'underline burlywood',
	color: 'black'
}

const centerImg = {
	display: "block",
	marginLeft: "auto",
	marginRight: "auto",
	// width: '50%',
	border: "2px solid black",
	borderRadius: "50%",
	height: "calc(10vh + 20px)"
}