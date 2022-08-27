import NotepadNavBar from './NotepadNavBar';
import NotepadBody from './NotepadBody';

const Notepad = () => {
	return (
		<div style={divStyle} id='notepad'>
			<NotepadNavBar />
			<NotepadBody />
		</div>
	);
};

export default Notepad;

const divStyle = {
	backgroundColor: 'white',
	margin: '0',
	width: '100%',
	height: '100vh',
	// border: '1px solid black',
	boxShadow: '0 6.4px 14.4px 0 rgb(0 0 0 / 13%), 0 1.2px 3.6px 0 rgb(0 0 0 / 11%)',
	// position: 'relative',
	zIndex: '1',
	position: 'absolute',
	overflow: 'hidden'
};
