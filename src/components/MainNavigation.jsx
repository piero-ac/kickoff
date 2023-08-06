import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function MainNavigation() {
	return (
		<Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
			<Container>
				<Navbar.Brand>KickOff</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<LinkContainer to="/">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<NavDropdown title="Leagues" id="basic-nav-dropdown">
							<LinkContainer to="/league/epl">
								<NavDropdown.Item>Premier League</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/league/seriea">
								<NavDropdown.Item>Serie A</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/league/laliga">
								<NavDropdown.Item>La Liga</NavDropdown.Item>
							</LinkContainer>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
