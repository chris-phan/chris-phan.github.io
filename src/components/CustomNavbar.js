import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

const CustomNavbar = () => {

    const [navBarBG, setNavBarBG] = useState("rgba(0, 0, 0, 0)");

    function changeBG() {
        if (navBarBG === "rgba(0, 0, 0, 0)") {
            setNavBarBG("white");
        }
        else {
            setNavBarBG("rgba(0, 0, 0, 0)");
        }
    }

    return (
		<div>
			<Navbar collapseOnSelect expand="" style={{backgroundColor: "transparent"}} variant="light" fixed="top">
				<Container>
					<Navbar.Brand></Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
					<Navbar.Collapse id="responsive-navbar-nav" style={{transition: "none"}} >
						<a href="" style={navBarItemsStyle}>Home</a>
						<a href="" style={navBarItemsStyle}>About</a>
						<a href="" style={navBarItemsStyle}>Projects</a>
                        {/* <Nav className="navbar-right">
							<Nav.Link href="#features" style={navBarItemsStyle}>Features</Nav.Link>
							<Nav.Link href="#pricing" style={navBarItemsStyle}>Pricing</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="#deets">More deets</Nav.Link>
							<Nav.Link eventKey={2} href="#memes">
								Dank memes
							</Nav.Link>
						</Nav> */}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default CustomNavbar;

const navBarItemsStyle = {
    color: 'salmon',
    textStyle: 'inline',
    paddingRight: '5vw'
}