import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFutbol,
	faChartSimple,
	faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

export default function MainNavigation() {
	return (
		<Navbar expand="lg" className="bg-dark py-md-3" data-bs-theme="dark">
			<Container fluid>
				<Navbar.Brand>
					<span className="text-success">
						Kick
						<FontAwesomeIcon icon={faFutbol} />
						ff
					</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<LinkContainer to="/">
							<Nav.Link className="fs-5">
								<FontAwesomeIcon icon={faFutbol} /> Football
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/stats" disabled>
							<Nav.Link className="fs-5">
								<FontAwesomeIcon icon={faChartSimple} /> Statistics
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/news" disabled>
							<Nav.Link className="fs-5">
								<FontAwesomeIcon icon={faNewspaper} /> News
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
