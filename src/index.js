import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Typed from 'typed.js';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

const figureFrames = [
	{
		id: 0,
		head: '                              \\\\         /       //',
		body: '                              /  .                |',
		legs: '                             |-  -                \\',
	},
	{
		id: 1,
		head: '!!',
		body: 'O',
		legs: '/\\_/\\\\',
	},
	{
		id: 2,
		head: ' O',
		body: '/|',
		legs: ' \\\\',
	},
	{
		id: 3,
		head: '  O',
		body: '//V',
		legs: '/ \\',
	},
	{
		id: 4,
		head: '   O',
		body: ' //V',
		legs: ' / \\',
	},
	{
		id: 5,
		head: '    O',
		body: '  //V',
		legs: '  / \\',
	},
	{
		id: 6,
		head: '      O',
		body: '    //V',
		legs: '    / \\',
	},
	{
		id: 7,
		head: '      O',
		body: '    //V',
		legs: '    / \\',
	},
	{
		id: 8,
		head: '       O',
		body: '     //V',
		legs: '     / \\',
	},
	{
		id: 9,
		head: '        O',
		body: '      //V',
		legs: '      / \\',
	},
	{
		id: 10,
		head: '        O',
		body: '       /|\\',
		legs: '       / \\',
	},
	{
		id: 11,
		head: '        O/',
		body: '       /|',
		legs: '       / \\',
	},
	{
		id: 12,
		head: '        O_',
		body: '       /|',
		legs: '       / \\',
	},
	{
		id: 13,
		head: '',
		body: 'O',
		legs: '<\\>_/\\\\',
	},
]

function animateFigureDialog() {
	
	// Initial dialog
	if (localStorage.getItem('watchedAnimation') === 'false' || localStorage.getItem('watchedAnimation') == null) {
		var initDialog = new Typed('#animateDialog', {
			strings: [
				'^1500Oh!^1000 HEY!!^2000',
				'^1750ahem.',
				'welcome to my website.',
				'i\'m chris.',
				'stay for as long as you like',
				'.^450.^450.',
				'yeah.'
			],
			typeSpeed: 50,
			backSpeed: 25,
			startDelay: 2500,
			backDelay: 700,
			showCursor: false,
	
			// Set watchedAnimation to true
			onComplete: (typedDialog) => {
				localStorage.setItem('watchedAnimation', true);
			}
		});
	}
	else {
		// Revisit dialog
		var revisitDialog = new Typed('#animateDialog', {
			strings: ["oh^1500, you're back"],
			typeSpeed: 100,
			startDelay: 1000,
			fadeOut: true,
			fadeOutDelay: 5000,
			showCursor: false,
		});
	}
}

var birdDialog = new Typed('#animateBird', {
	strings: [
		'^30000caw!^3000',
		'^30000caw! caw! caw!^3000',
		'^30000*bird noises*^3000',
		'^30000chirp^3000',
		'^30000tweet^3000',
		'^30000coo coo^3000',
		'^30000♫ ♪^3000',
		'^30000♥^3000'
	],
	typeSpeed: 0,
	fadeOut: true,
	fadeOutDelay: 5000,
	startDelay: 0,
	loop: true,
	loopCount: Infinity,
	showCursor: false,
	shuffle: true,
});

async function playAnimation() {
	if (localStorage.getItem('watchedAnimation') === 'true') {
		return;
	}

	// alert
	await sleep(2000);
	animateFigure(1);

	// get up
	await sleep(1500);
	animateFigure(2);

	// run then stand
	await sleep(4500);
	for (let i = 3; i < 11; i++) {
		animateFigure(i);
		await sleep(50);
	}

	// wave
	await sleep(3500);
	animateFigure(11);
	var headElement = document.querySelector('#animateHead');
	for (let i = 1; i < 7500; i+=500) {
		if (headElement.innerHTML.charAt(headElement.innerHTML.length - 1) === '/') {
			headElement.innerHTML = figureFrames[0].head + figureFrames[12].head;
			// console.log('changed in if', headElementHTML);
		}
		else {
			headElement.innerHTML = figureFrames[0].head + figureFrames[11].head;
		}
		await sleep(500);
		// console.log('outside', headElementHTML);
	}

	// stand
	animateFigure(10);
}

// Changes html of document
function animateFigure(frame) {
	document.querySelector('#animateHead').innerHTML = figureFrames[0].head + figureFrames[frame].head;
	document.querySelector('#animateBody').innerHTML = figureFrames[0].body + figureFrames[frame].body;
	document.querySelector('#animateLegs').innerHTML = figureFrames[0].legs + figureFrames[frame].legs;
}

// Sleep function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Figure napping animation, sleeps after 1.5 mins
async function figureNap() {
	await sleep(45000);
	animateFigure(13);

	// Napping dialog
	var sleepDialog = new Typed('#animateDialog', {
		strings: [
			"^45000zzZZzZ",
			"^45000zZzZz",
			"^45000zzz",
			"^45000...",
			"^45000ZZzZZz",
		],
		typeSpeed: 1000,
		fadeOut: true,
		fadeOutDelay: 3000,
		shuffle: true,
		loop: true,
		loopCount: Infinity,
		showCursor: false
	});

}

console.log(window.screen.height);
console.log(window.screen.width);

// Execution
function main() {
	playAnimation();
	animateFigureDialog();
	figureNap();
}
main();

reportWebVitals();