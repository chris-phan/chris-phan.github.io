import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import EducationCard from './EducationCard';

function Education() {
	return (
		<div>
			<SectionHeader header="Education" />
			<EducationCard
				name="Piedmont Hills High School"
				subtext="Aug. 2017 - Jun. 2021, GPA: 4.0"
			/>
			<EducationCard
				name="University of California, Davis"
				subtext="Expected Graduation: Jun. 2025, GPA: 3.98"
			/>
		</div>
	);
}

export default Education;
