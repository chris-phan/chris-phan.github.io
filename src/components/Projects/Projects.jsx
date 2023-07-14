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

function Projects() {
	return (
		<div className="projects">
			<SectionHeader header="Projects" />
			<div className="projects-grid">
				<ProjectCard
					title="HTAP Database"
					background_image={LStoreImg}
					link={null}
					rotate_amt={10}
					top={-70}
					left={-60}
				/>
				<ProjectCard
					title="The Odin Project"
					background_image={OdinImg}
					link="https://chris-phan.github.io/odin-project/"
					rotate_amt={-15}
					top={-25}
					left={-25}
				/>
				<ProjectCard
					title="Minesweeper"
					background_image={MinesweeperImg}
					link="https://chris-phan.github.io/Minesweeper/dist/index.html"
					rotate_amt={-10}
					top={-90}
					left={-100}
				/>
				<ProjectCard
					title="Discord Bot"
					background_image={DiscordBotImg}
					link="https://replit.com/@cruckus/cruckus-Bot?v=1"
					rotate_amt={-10}
					top={-25}
					left={-5}
				/>
				<ProjectCard
					title="HackDavis 2022"
					background_image={DDCImg}
					link="https://hansonklau.github.io/DDC/"
					rotate_amt={10}
					top={0}
					left={-15}
				/>
				<ProjectCard
					title="This website!"
					background_image={PersonalWebsiteImg}
					link="https://chris-phan.github.io/"
					rotate_amt={10}
					top={-60}
					left={-60}
				/>
			</div>
		</div>
	);
}

export default Projects;
