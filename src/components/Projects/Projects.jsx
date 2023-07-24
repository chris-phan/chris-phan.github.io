import React from 'react';
import './Projects.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import ProjectCard from './ProjectCard';
import MinesweeperImg from '../../images/minesweeper.png';
import LStoreImg from '../../images/lstore.png';
import DiscordBotImg from '../../images/discordbot.png';
import OdinImg from '../../images/odin.png';
import DDCImg from '../../images/ddc.png';
import PersonalWebsiteImg from '../../images/personalwebsite.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Projects() {
	return (
		<div>
			<SectionHeader header="Projects" />
			<Container fluid>
				<Row>
					<Col md={12} lg={6}>
						<ProjectCard
							title="HTAP Database"
							background_image={LStoreImg}
							link={null}
							rotate_amt={10}
							top={-70}
							left={-60}
						/>
					</Col>
					<Col md={12} lg={6}>
						<ProjectCard
							title="The Odin Project"
							background_image={OdinImg}
							link="https://chris-phan.github.io/odin-project/"
							rotate_amt={-15}
							top={-25}
							left={-25}
						/>
					</Col>
				</Row>
				<Row>
					<Col md={12} lg={6}>
						<ProjectCard
							title="Minesweeper"
							background_image={MinesweeperImg}
							link="https://chris-phan.github.io/Minesweeper/dist/index.html"
							rotate_amt={-10}
							top={-90}
							left={-100}
						/>
					</Col>
					<Col md={12} lg={6}>
						<ProjectCard
							title="Discord Bot"
							background_image={DiscordBotImg}
							link="https://replit.com/@cruckus/cruckus-Bot?v=1"
							rotate_amt={-10}
							top={-25}
							left={-5}
						/>
					</Col>
				</Row>
				<Row>
					<Col md={12} lg={6}>
						<ProjectCard
							title="HackDavis 2022"
							background_image={DDCImg}
							link="https://hansonklau.github.io/DDC/"
							rotate_amt={10}
							top={0}
							left={-15}
						/>
					</Col>
					<Col md={12} lg={6}>
						<ProjectCard
							title="This website!"
							background_image={PersonalWebsiteImg}
							link="https://chris-phan.github.io/"
							rotate_amt={10}
							top={-60}
							left={-60}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Projects;
