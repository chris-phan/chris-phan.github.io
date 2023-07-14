import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import './Skills.css';
import WordCloud from 'react-d3-cloud';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function Skills() {
	const { height, width } = useWindowDimensions();
	const lilac = 'rgb(230, 215, 255)';

	const skills_list = [
		{ text: 'Python', value: '8' },
		{ text: 'JavaScript', value: '7' },
		{ text: 'HTML', value: '9' },
		{ text: 'CSS', value: '9' },
		{ text: 'C', value: '4' },
		{ text: 'C++', value: '6' },
		{ text: 'TypeScript', value: '3' },
		{ text: 'React', value: '6' },
		{ text: 'Angular', value: '4' },
		{ text: 'Git', value: '8' },
		{ text: 'Node.js', value: '7' },
		{ text: 'Firebase', value: '3' },
		{ text: 'Bootstrap', value: '4' },
		{ text: 'Webpack', value: '5' },
		{ text: 'Jest', value: '3' },
		{ text: 'UNIX', value: '5' },
		{ text: 'GitHub', value: '8' },
	];
	return (
		<div>
			<SectionHeader header="Skills" />
			<WordCloud
				data={skills_list}
				width={Math.min(300, width)}
				height={150}
				font="Roboto"
				fontSize={(word) => Math.log2(word.value) * 5}
				spiral="archimedean"
				rotate={(word) => {
					const random = Math.random();
					if (random < 0.125) {
						return 90;
					}
					return 0;
				}}
				random={() => {
					return 0.5;
				}}
				fill={() => {
					const random = Math.floor(Math.random() * 4);
					switch (random) {
						case 0:
							return 'lightyellow';
						case 1:
							return 'skyblue';
						case 2:
							return lilac;
						case 3:
							return 'palegreen';
					}
					return 'lightyellow';
				}}
			/>
		</div>
	);
}

export default Skills;
