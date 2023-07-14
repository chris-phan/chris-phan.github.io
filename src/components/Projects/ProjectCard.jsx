import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, link, background_image, rotate_amt, top, left }) {
	const background_image_style = {
		transform: `rotate(${rotate_amt}deg)`,
		top: `${top}%`,
		left: `${left}%`,
	};

	const handle_click = () => {
		alert(
			"Sorry! This is a school project, so I can't provide you a link!"
		);
	};

	return (
		<div className="project-card">
			<img
				className="project-image"
				src={background_image}
				alt={title}
				style={background_image_style}
			/>
			<div className="project-content">
				{link !== null && (
					<a href={link} className="project-title">
						{title}
					</a>
				)}
				{link === null && (
					<a onClick={handle_click} className="project-title">
						{title}
					</a>
				)}
				<div className="bar"></div>
			</div>
			<div className="overlay"></div>
		</div>
	);
}

export default ProjectCard;
