import React from 'react';
import './Footer.css';
import { FaGithub, FaLink, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

function Footer() {
	return (
		<footer className="footer">
			<a href="https://github.com/chris-phan">
				<FaGithub size={50} />
			</a>
			<a href="https://www.linkedin.com/in/christopher-phillip/">
				<FaLinkedin size={50} />
			</a>
			<a href="mailto:cpphan@ucdavis.edu">
				<AiOutlineMail size={50} />
			</a>
		</footer>
	);
}

export default Footer;
