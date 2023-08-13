import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import ExperienceCard from './ExperienceCard';

function Experience() {
	const optum_body = [
		'Performed migration from Angular v8 to Angular v14 to address security vulnerabilities in two different portals',
		"Upgraded to the latest version of Optum's UI Tool Kit to modernize and revamp the UI",
		'Worked with Java and Spring Boot to consume and integrate a new API to create an easily configurable common UI for efficient future onboarding of new states',
	];
	const aatc_body = [
		'Held individual tutoring sessions for students learning data structures and algorithms',
		'Provided supplemental material and practice problems on stacks, queues, red black trees, AVL trees, graphs, hash tables, and sorting algorithms.',
		'Learned different tutoring strategies and how to adapt a session to meet the personal needs of every tutee',
	];

	return (
		<div className="experience">
			<SectionHeader header="Experience" />
			<ExperienceCard
				title="Optum"
				role="TDP Intern"
				date="Jun. 2023 - Aug. 2023"
				body={optum_body}
			/>
			<ExperienceCard
				title="Academic Assistance and Tutoring Center"
				role="CS Tutor"
				date="Nov. 2022 - Jun. 2023"
				body={aatc_body}
			/>
		</div>
	);
}

export default Experience;
