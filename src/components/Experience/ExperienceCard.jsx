import React from 'react';
import './ExperienceCard.css';

function ExperienceCard({ title, role, date, body }) {
	console.log(body);
	return (
		<div className="experience-card">
			<div className="title-and-date">
				<div className="title-and-role">
					<h2 className="title">{title}</h2>
					<p className="role">
						<em>{role}</em>
					</p>
				</div>
				<p className="date">
					<em>{date}</em>
				</p>
			</div>
			<div>
				<ul className="body">
					{body.map((line) => {
						return (
							<li>
								<p>{line}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default ExperienceCard;
