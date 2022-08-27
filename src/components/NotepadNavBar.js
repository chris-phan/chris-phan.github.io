import icon from '../images/notepad_icon.png';

const NotepadNavBar = () => {

	return (
		<div style={divStyle}>
			<div>
				<img
					src={icon}
					alt=""
					width="18px"
					height="18px"
					style={iconStyle}
				/>
				<p style={notepadNameStyle}>*Untitled - Notepad</p>
			</div>
			<button
				className="optionButton"
				style={optionBtnStyle}
			>
				<u style={font}>F</u>ile
			</button>
			<button
				className="optionButton"
				style={optionBtnStyle}
			>
				<u style={font}>E</u>dit
			</button>
			<button
				className="optionButton"
				style={optionBtnStyle}
			>
				F<u style={font}>o</u>rmat
			</button>
			<button
				className="optionButton"
				style={optionBtnStyle}
			>
				<u style={font}>V</u>iew
			</button>
			<button
				className="optionButton"
				style={optionBtnStyle}
			>
				<u style={font}>H</u>elp
			</button>
		</div>
	);
};

export default NotepadNavBar;

const divStyle = {
	borderBottom: '2px solid #f0f0f0',
	padding: '0px',
	height: '47.2px',
};

const iconStyle = {
	marginTop: '3px',
	marginLeft: '5px',
	marginRight: '3px',
};

const notepadNameStyle = {	
	display: 'inline-block',
	fontFamily: 'Calibri',
	fontSize: '14px',

	// Moves the text up a bit to align with the icon
	position: 'relative',
	top: '2px',
	marginBottom: '0',
};

const optionBtnStyle = {
	marginLeft: '0px',
	marginBottom: '0px',
	paddingLeft: '5px',
	paddingRight: '5px',
	fontFamily: 'Calibri',
	fontSize: '13px',
	backgroundColor: 'transparent',

	// Moves the text up a bit to align with the icon
	position: 'relative',
	bottom: '3px',
};

const font = {
	fontFamily: 'Calibri'
};
