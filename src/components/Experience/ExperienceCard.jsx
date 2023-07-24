import React from 'react';
import './ExperienceCard.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ExperienceCard({ title, role, date, body }) {
	console.log(body);
	return (
		<div className="experience-card">
			<Container>
				<Row>
					<Col md={12} lg={4}>
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
					</Col>
					<Col md={12} lg={8}>
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
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default ExperienceCard;
