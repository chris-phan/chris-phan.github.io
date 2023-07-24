import React from 'react';
import './EducationCard.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function EducationCard({ name, subtext }) {
	return (
		<div className="education-card">
			<Container>
				<Row>
					<Col md={12} lg={6}>
						<h2>{name}</h2>
					</Col>
					<Col md={12} lg={6}>
						<p>
							<em>{subtext}</em>
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default EducationCard;
