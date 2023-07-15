import React from 'react';
import './EducationCard.css';

function EducationCard({ name, subtext }) {
	return (
		<div className="education-card">
			<h2>{name}</h2>
			<p>
				<em>{subtext}</em>
			</p>
		</div>
	);
}

export default EducationCard;
