import React from 'react';
import './About.css';
import SectionHeader from '../SectionHeader/SectionHeader';

function About() {
	const about_body =
		"\
        Hey, I'm Chris, a third year computer science student at UC Davis ('25).\n\n\
        Most of my personal projects are web related, but I have dabbled in other areas.\n\n\
        Let me know how you got here, ask me about my sunflowers, give me recommendations for platformers and rogue-likes, or just say hello using the information at the bottom of the page.\n\n\
    ";
	return (
		<div className="about">
			<SectionHeader header="About" />
			<p className="body">{about_body}</p>
		</div>
	);
}

export default About;
