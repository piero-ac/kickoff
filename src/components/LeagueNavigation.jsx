import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

export default function LeagueNavigation() {
	return (
		<Col s={12} md={3} className="mb-3 mb-md-0">
			<ListGroup variant="flush">
				<ListGroup.Item className="bg-dark">
					<Link
						to="/league/39"
						className="link-secondary link-underline link-underline-opacity-0 fs-5 text-success"
					>
						Premier League
					</Link>
				</ListGroup.Item>
				<ListGroup.Item className="bg-dark">
					<Link
						to="/league/140"
						className="link-secondary link-underline link-underline-opacity-0 fs-5 text-success"
					>
						La Liga
					</Link>
				</ListGroup.Item>
				<ListGroup.Item className="bg-dark">
					<Link
						to="/league/135"
						className="link-secondary  link-underline link-underline-opacity-0 fs-5 text-success"
					>
						Serie A
					</Link>
				</ListGroup.Item>
				<ListGroup.Item className="bg-dark">
					<Link
						to="/league/78"
						className="link-secondary link-underline link-underline-opacity-0 fs-5 text-success"
					>
						Bundesliga
					</Link>
				</ListGroup.Item>
				<ListGroup.Item className="bg-dark">
					<Link
						to="/league/61"
						className="link-secondary link-underline link-underline-opacity-0 fs-5 text-success"
					>
						Ligue 1
					</Link>
				</ListGroup.Item>
				<ListGroup.Item className="bg-dark">
					<Link
						to="/league/866"
						className="link-secondary link-underline link-underline-opacity-0 fs-5 text-success"
					>
						MLS
					</Link>
				</ListGroup.Item>
			</ListGroup>
		</Col>
	);
}
