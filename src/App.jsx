import './App.css';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience.jsx';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<>
			<Landing />
			<Projects />
			<Experience />
			<Skills />
			<Education />
			<About />
			<Footer />
		</>
	);
}

export default App;
