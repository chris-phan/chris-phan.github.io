import React, { useState, useEffect } from 'react';
import './Landing.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function Landing() {
	const [dots, set_dots] = useState([]);
	const { height, width } = useWindowDimensions();

	useEffect(() => {
		const create_dot = () => {
			const size = Math.floor(7 * Math.random());
			const dot = {
				top: (height - 30) * Math.random(),
				left: (width - 30) * Math.random(),
				height: size,
				width: size,
				backgroundColor: 'rgba(255, 255, 224, ' + Math.random() + ')',
			};

			// Prevent dots from creating vertical and horizontal overflow
			if (dot.top <= 30) {
				console.log(dot);
				dot.top = 30;
			}

			if (dot.left <= 30) {
				dot.left = 30;
			}

			dot.top = dot.top + 'px';
			dot.left = dot.left + 'px';
			dot.height = dot.height + 'px';
			dot.width = dot.width + 'px';

			return dot;
		};

		const new_dots = [];
		for (var i = 0; i < 200; i++) {
			new_dots.push(create_dot());
		}

		set_dots(new_dots);
	}, [height, width]);

	return (
		<div className="landing">
			<>
				{dots.map((dot, idx) => {
					return <div className="dot" key={idx} style={dot}></div>;
				})}
			</>
			<div className="landing-container">
				<h1 className="name">Chris</h1>
				<h2 className="subtitle">CS @ UCD '25</h2>
			</div>
		</div>
	);
}

export default Landing;
