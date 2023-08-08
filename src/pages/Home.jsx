import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
	return (
		<Container className="my-5">
			<h1 className="display-1 text-center text-success fw-bold">
				Kick
				<FontAwesomeIcon icon={faFutbol} />
				ff
			</h1>
			<Row className="mt-3 mx-1 justify-content-evenly">
				<Col md={3} className="bg-success text-center mx-1 rounded-1 mb-3">
					<Link
						to="/league/39/overview"
						className="text-light link-underline link-underline-opacity-0 fs-2 fw-bold"
					>
						Premier League
					</Link>
				</Col>
				<Col md={3} className="bg-success text-center mx-1 rounded-1 mb-3">
					<Link
						to="/league/135/overview"
						className="text-light link-underline link-underline-opacity-0 fs-2 fw-bold"
					>
						Serie A
					</Link>
				</Col>
				<Col md={3} className="bg-success text-center mx-1 rounded-1 mb-3">
					<Link
						to="/league/140/overview"
						className="text-light link-underline link-underline-opacity-0 fs-2 fw-bold"
					>
						La Liga
					</Link>
				</Col>
				<Col md={3} className="bg-success text-center mx-1 rounded-1 mb-3">
					<Link
						to="/league/78/overview"
						className="text-light link-underline link-underline-opacity-0 fs-2 fw-bold"
					>
						Bundesliga
					</Link>
				</Col>
				<Col md={3} className="bg-success text-center mx-1 rounded-1 mb-3">
					<Link
						to="/league/61/overview"
						className="text-light link-underline link-underline-opacity-0 fs-2 fw-bold"
					>
						Ligue 1
					</Link>
				</Col>
				{/* <Col md={3} className="bg-success text-center mx-1 rounded-1 mb-3">
					<Link
						to="/league/866/overview"
						className="text-light link-underline link-underline-opacity-0 fs-2 fw-bold"
					>
						MLS
					</Link>
				</Col> */}
			</Row>
		</Container>
	);
}
