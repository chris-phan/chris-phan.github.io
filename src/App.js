import CustomNavbar from './components/CustomNavbar.js';
import IntroCard from './components/IntroCard.js';
import Name from './components/Name.js';
import IntroBlurb from './components/IntroBlurb.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Education from './components/Education.js';
import Footer from './components/Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import SecretButton from './components/SecretButton.js'

const App = () => {
	return (
		<div style={divStyle}>
			{/* <CustomNavbar /> */}
			{/* <SecretButton /> */}
			<IntroCard />
			<Name />
			<div style={{backgroundColor: '#f0f0f0', position: 'relative'}}>
				<IntroBlurb />
				<Projects />
				<Skills />
				<Education />
				<Footer />
			</div>
		</div>
	);
}

export default App;

const divStyle = {
    height: '100%',
    // backgroundImage: 'url(' + Background + ')',
    backgroundSize: 'contain',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center top',
}

const constructionStyle = {
	width: '100%',
	textAlign: 'center',
	fontSize: '5vw',
	backgroundColor: 'yellow',
    marginTop: '5vh'
};